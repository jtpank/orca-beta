
import Chart from "react-apexcharts";
import React from 'react';
class ZoomLineChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [
            {
              name: "series-1",
              data: [30, 40, 25, 50, 49, 21, 70, 51]
            },
            {
              name: "series-2",
              data: [23, 12, 54, 61, 32, 56, 81, 19]
            },
          ],
        options: {
            chart: {
                type: 'area',
                stacked: false,
                height: '10%',
                width: '50%',
                zoom: {
                  type: 'x',
                  enabled: true,
                  autoScaleYaxis: true
                },
                toolbar: {
                  autoSelected: 'zoom'
                }
              },
              dataLabels: {
                enabled: false
              },
              markers: {
                size: 0,
              },
              title: {
                text: 'Historical Odds Data',
                align: 'left'
              },
              fill: {
                type: 'gradient',
                gradient: {
                  shadeIntensity: 1,
                  inverseColors: false,
                  opacityFrom: 0.5,
                  opacityTo: 0,
                  stops: [0, 90, 100]
                },
              },
              tooltip: {
                shared: false,
                y: {
                  formatter: function (val) {
                    return (val / 1000000).toFixed(0)
                  }
                }
              },
            xaxis: {
              categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
            },
        }
      
      
      };
    }

  

    render() {
      return (
        <div id="chart">
            <Chart options={this.state.options} series={this.state.series} type="area" />;
        </div>
      );
    }
  }
export default ZoomLineChart;
