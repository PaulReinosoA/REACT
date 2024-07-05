import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themesAnimated from '@amcharts/amcharts5/themes/Animated';
import { useLayoutEffect } from 'react';
import { PropTypes } from 'prop-types';
import { Grid } from '@mui/material';

export const ChartRoot = ({ idGrid }) => {
  useLayoutEffect(() => {
    const root = am5.Root.new(idGrid);
    root.setThemes([am5themesAnimated.new(root)]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: 'panX',
        wheelY: 'zoomX',
        paddingLeft: 0,
        layout: root.verticalLayout,
      }),
    );

    const data = [
      {
        descripcion: 'Morosidad', // morosidad
        cumplido: 0.8,
        pendiente: 0.2,
      },
      {
        descripcion: 'Licitaciones', // licitaciones
        cumplido: 0.4,
        pendiente: 0.6,
      },
      {
        descripcion: 'Gestion credito', // gestion credito
        cumplido: 0.25,
        pendiente: 0.75,
      },
    ];

    // Create axes
    const xRenderer = am5xy.AxisRendererX.new(root, {
      minorGridEnabled: true,
    });

    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: 'descripcion',
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      }),
    );

    xRenderer.grid.template.setAll({
      location: 1,
    });

    xAxis.data.setAll(data);

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        min: 0,
        max: 100,
        // eslint-disable-next-line quotes
        numberFormat: `#'%'`,
        strictMinMax: true,
        calculateTotals: true,
        renderer: am5xy.AxisRendererY.new(root, {
          strokeOpacity: 0.1,
        }),
      }),
    );

    const legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50,
      }),
    );
    // Add scrollbar
    chart.set(
      'scrollbarX',
      am5.Scrollbar.new(root, {
        orientation: 'horizontal',
      }),
    );

    function makeSeries(name, fieldName) {
      // console.log(name, fieldName);

      const series = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name,
          stacked: true,
          xAxis,
          yAxis,
          valueYField: fieldName,
          valueYShow: 'valueYTotalPercent',
          categoryXField: 'descripcion',
          fill:
            fieldName !== 'cumplido'
              ? am5.color(0xb30000)
              : am5.color(0x50b300),
        }),
      );

      series.columns.template.setAll({
        // texto en columna
        // eslint-disable-next-line quotes
        tooltipText: `{name}, {categoryX}: {valueYTotalPercent.formatNumber('#.#')}%`,
        tooltipY: am5.percent(10),
      });
      series.data.setAll(data);

      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/
      series.appear();

      series.bullets.push(() =>
        am5.Bullet.new(root, {
          sprite: am5.Label.new(root, {
            // eslint-disable-next-line quotes
            text: `{valueYTotalPercent.formatNumber('#.#')}% `,
            fill: root.interfaceColors.get('alternativeText'),
            centerY: am5.p50,
            centerX: am5.p50,
            populateText: true,
          }),
        }),
      );

      xAxis.get('renderer').labels.template.setAll({
        fill: root.interfaceColors.get('alternativeText'),
      });

      xAxis.setAll({
        background: am5.Rectangle.new(root, {
          fill: root.interfaceColors.get('alternativeBackground'),
          fillOpacity: 0.7,
        }),
      });

      legend.data.push(series);
    }

    makeSeries('CUMPLIDO', 'cumplido');
    makeSeries('PENDIENTE', 'pendiente');

    // chart.appear(1000, 100);
    chart.set('cursor', am5xy.XYCursor.new(root, {}));
    // eslint-disable-next-line consistent-return
    return () => {
      root.dispose();
    };
  }, []);

  return (
    <Grid
      id={idGrid}
      right={0}
      sx={{
        width: { sm: 'Calc(100% - 5%)' },
        height: '800px',
      }}
    />
  );
};

ChartRoot.propTypes = {
  idGrid: PropTypes.string.isRequired,
};
