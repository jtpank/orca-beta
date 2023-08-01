
import Chart from "react-apexcharts";
import React from 'react';
class ZoomLineChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [
            {
              name: "series-1",
              data: [
                561, 289, 458, 623, 218, 547, 611, 408, 263, 632,
                158, 717, 382, 189, 327, 409, 322, 398, 229, 537,
                523, 359, 720, 411, 625, 382, 401, 725, 167, 219,
                676, 737, 596, 353, 312, 157, 259, 520, 423, 359,
                613, 721, 512, 173, 136, 712, 744, 305, 484, 192,
              ]
            }
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
                    return (val / 1).toFixed(0)
                  }
                }
              },
              yaxis: {
                title: {
                  text: "Y Axis Label",
                  style: {
                    fontSize: "14px",
                    fontWeight: 600,
                    cssClass: "y-axis-label",
                  },
                },
                min: 0, // Minimum value for the y-axis
                max: 1000, // Maximum value for the y-axis
              },
              xaxis: {
                categories: [
                  "2023-08-01T00:00:00Z,10",
                  "2023-08-01T00:00:10Z,15",
                  "2023-08-01T00:00:20Z,12",
                  "2023-08-01T00:00:30Z,8",
                  "2023-08-01T00:00:40Z,5",
                  "2023-08-01T00:00:50Z,7",
                  "2023-08-01T00:01:00Z,13",
                  "2023-08-01T00:01:10Z,18",
                  "2023-08-01T00:01:20Z,21",
                  "2023-08-01T00:01:30Z,25",
                  "2023-08-01T00:01:40Z,28",
                  "2023-08-01T00:01:50Z,22",
                  "2023-08-01T00:02:00Z,19",
                  "2023-08-01T00:02:10Z,16",
                  "2023-08-01T00:02:20Z,20",
                  "2023-08-01T00:02:30Z,25",
                  "2023-08-01T00:02:40Z,30",
                  "2023-08-01T00:02:50Z,35",
                  "2023-08-01T00:03:00Z,40",
                  "2023-08-01T00:03:10Z,45",
                  "2023-08-01T00:03:20Z,42",
                  "2023-08-01T00:03:30Z,37",
                  "2023-08-01T00:03:40Z,32",
                  "2023-08-01T00:03:50Z,27",
                  "2023-08-01T00:04:00Z,25",
                  "2023-08-01T00:04:10Z,28",
                  "2023-08-01T00:04:20Z,30",
                  "2023-08-01T00:04:30Z,35",
                  "2023-08-01T00:04:40Z,40",
                  "2023-08-01T00:04:50Z,45",
                  "2023-08-01T00:05:00Z,42",
                  "2023-08-01T00:05:10Z,38",
                  "2023-08-01T00:05:20Z,33",
                  "2023-08-01T00:05:30Z,29",
                  "2023-08-01T00:05:40Z,25",
                  "2023-08-01T00:05:50Z,27",
                  "2023-08-01T00:06:00Z,30",
                  "2023-08-01T00:06:10Z,35",
                  "2023-08-01T00:06:20Z,40",
                  "2023-08-01T00:06:30Z,45",
                  "2023-08-01T00:06:40Z,42",
                  "2023-08-01T00:06:50Z,37",
                  "2023-08-01T00:07:00Z,32",
                  "2023-08-01T00:07:10Z,27",
                  "2023-08-01T00:07:20Z,25",
                  "2023-08-01T00:07:30Z,28",
                  "2023-08-01T00:07:40Z,30",
                  "2023-08-01T00:07:50Z,35",
                  "2023-08-01T00:08:00Z,40",
                  "2023-08-01T00:08:10Z,45",
                  "2023-08-01T00:08:20Z,42",
                  "2023-08-01T00:08:30Z,38",
                  "2023-08-01T00:08:40Z,33",
                ],
                title: {
                  text: "X Axis Label",
                  style: {
                    fontSize: "14px",
                    fontWeight: 600,
                    cssClass: "x-axis-label",
                  },
                },
                
              },
              annotations: {
                xaxis: [
                  {
                    x: "2023-08-01T00:06:00Z,30", // The data point you want to add the line to
                    borderColor: "#00E396",
                    label: {
                      borderColor: "#00E396",
                      style: {
                        color: "#fff",
                        background: "#00E396",
                      },
                      text: "Vertical Line",
                    },
                  },
                ],
              }
        },
        
      
      
      };
    }

  

    render() {
      return (
        <div id="chart">
            <Chart options={this.state.options} series={this.state.series} type="area" />
        </div>
      );
    }
  }
export default ZoomLineChart;
