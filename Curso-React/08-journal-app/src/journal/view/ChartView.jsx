// https://www.amcharts.com/docs/v5/getting-started/integrations/react/
import { useLayoutEffect } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
// eslint-disable-next-line camelcase
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { PropTypes } from 'prop-types';
import { Grid, TextField, Typography } from '@mui/material';

export const ChartView = ({ props = '' }) => {
  useLayoutEffect(() => {
    const root = am5.Root.new('chartdiv');

    // root.interfaceColors.set('grid', am5.color(0xf3f3f3));
    // eslint-disable-next-line camelcase
    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: 'panX',
        wheelY: 'zoomX',
        paddingLeft: 0,
        layout: root.verticalLayout,
      })
    );
    // Add scrollbar
    chart.set(
      'scrollbarX',
      am5.Scrollbar.new(root, {
        orientation: 'horizontal',
      })
    );

    const data = [
      {
ñ
      },
      {
        year: '2022',
        europe: 2.6,
        namerica: 2.7,
      },
      {
        year: '2023',
        europe: 2.8,
        namerica: 2.9,
      },
      {
        year: '2024',
        europe: 2.8,
        namerica: 2.9,
      },
    ];

    // Create axes
    const xRenderer = am5xy.AxisRendererX.new(root, {
      minorGridEnabled: true,
    });

    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: 'year',
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      })
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
      })
    );

    // Add legend
    // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
    const legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50,
      })
    );

    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    function makeSeries(name, fieldName) {
      console.log(name, fieldName);
      // const coloName=data.filter(d=>d.fieldName=);

      const series = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name,
          stacked: true,
          xAxis,
          yAxis,
          valueYField: fieldName,
          valueYShow: 'valueYTotalPercent',
          categoryXField: 'year',
          fill:
            fieldName !== 'europe' ? am5.color(0xb30000) : am5.color(0x50b300),
        })
      );

      series.columns.template.setAll({
        // eslint-disable-next-line quotes
        tooltipText: `{name}, {categoryX}:{valueYTotalPercent.formatNumber('#.#')}%`,
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
        })
      );

      // series.set('fill', am5.color(0xb30000)); // set Series color to red
      // series.set('fill', am5.color(0x50b300)); // set Series color to green

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


    makeSeries('Europe', 'europe');
    makeSeries('North America', 'namerica');
    makeSeries('Asia', 'asia');
    makeSeries('Latin America', 'lamerica');
    makeSeries('Middle East', 'meast');
    makeSeries('Africa', 'africa');

    chart.appear(1000, 100);
    // Add cursor
    chart.set('cursor', am5xy.XYCursor.new(root, {}));

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <>
      <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
        <Grid item xs={12} sm={2} sx={{ mt: 3 }}>
          <Typography>Ingreso de datos:</Typography>
          <TextField label="Nombre" type="text" placeholder="Nombre apellido" />
        </Grid>
        <Grid item xs={12} sm={10}>
          <Grid
            id="chartdiv"
            right={0}
            sx={{
              width: { sm: 'Calc(100% - 5%)' },
              height: '700px',
            }}
          >
            {props}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

ChartView.propTypes = {
  props: PropTypes.string.isRequired,
};
