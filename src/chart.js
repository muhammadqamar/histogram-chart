import React, { useState } from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import LabeledTwoThumbs from './range';
const options = {
  chart: {
    type: 'column',
  },
  title: {
    text: '',
  },
  subtitle: {
    text: '',
  },
  xAxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    labels: {
      enabled: false,
    },
  },
  legend: {
    enabled: false,
  },
  yAxis: {
    lineColor: 'transparent',
    min: 0,
    title: {
      text: '',
    },
    labels: {
      enabled: false,
    },
    gridLineWidth: 0,
  },
  // tooltip: {
  //   headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
  //   pointFormat:
  //     '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
  //     '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
  //   footerFormat: '</table>',
  //   shared: true,
  //   useHTML: true,
  // },
  plotOptions: {
    column: {
      pointPadding: -0.3,
      borderWidth: 1,
      color: '#ddd',
      borderRadius: '50px',
    },
  },
  series: [
    {
      //name: 'Tokyo',
      data: [
        49.9, 71.5, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4,
        49.9, 49.9, 71.5, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6,
        54.4, 49.9,
      ],
    },
  ],
};

const Chart = () => {
  const [valuesOption, setValuesOption] = useState();
  return (
    <div
      style={{ padding: '100px 250px', maxWidth: '600px', margin: '0 auto' }}
    >
      <HighchartsReact highcharts={Highcharts} options={valuesOption} />
      <br />
      <br />
      <LabeledTwoThumbs
        MAX={options.xAxis?.categories?.length}
        options={options}
        cta={(data) => {
          const updateData = {
            ...options,
            // xAxis: {
            //   categories: options.xAxis.categories.slice(data[0]-1, data[1]),
            // },
            series:
              options.series?.map((data1) => {
                return {
                  ...data1,
                  data: data1.data.map((val, index) => {
                    if (index >= data[0] - 1 && index <= data[1] - 1) {
                      return { y: val, color: 'rgb(93 137 222)' };
                    } else {
                      return {
                        y: val,
                        color: 'rgb(93 137 222)',
                        opacity: '.3',
                      };
                    }
                  }),
                };
              }) || [],
          };

          setValuesOption(updateData);
        }}
      />
    </div>
  );
};

export default Chart;
