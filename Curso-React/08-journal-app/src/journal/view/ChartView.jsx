import { useLayoutEffect } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
// eslint-disable-next-line camelcase
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { PropTypes } from 'prop-types';

export const ChartView = ({ props = '' }) => {
  useLayoutEffect(() => {
    const root = am5.Root.new('chartdiv');

    // eslint-disable-next-line camelcase
    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panY: false,
        layout: root.verticalLayout,
      }),
    );

    // Define data
    const data = [
      {
        category: 'Research',
        value1: 1000,
        value2: 588,
      },
      {
        category: 'Marketing',
        value1: 1200,
        value2: 1800,
      },
      {
        category: 'Sales',
        value1: 850,
        value2: 1230,
      },
    ];

    // Create Y-axis
    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      }),
    );

    // Create X-Axis
    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {}),
        categoryField: 'category',
      }),
    );
    xAxis.data.setAll(data);

    // Create series
    const series1 = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: 'Series',
        xAxis,
        yAxis,
        valueYField: 'value1',
        categoryXField: 'category',
      }),
    );
    series1.data.setAll(data);

    const series2 = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: 'Series',
        xAxis,
        yAxis,
        valueYField: 'value2',
        categoryXField: 'category',
      }),
    );
    series2.data.setAll(data);

    // Add legend
    const legend = chart.children.push(am5.Legend.new(root, {}));
    legend.data.setAll(chart.series.values);

    // Add cursor
    chart.set('cursor', am5xy.XYCursor.new(root, {}));

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div id="chartdiv" style={{ width: '500px', height: '500px' }}>
      {props}
    </div>
  );
};

ChartView.propTypes = {
  props: PropTypes.string.isRequired,
};
