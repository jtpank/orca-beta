
import Chart from "react-apexcharts";
import React from 'react';
class ZoomLineChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [
            {
              name: "home-team-prices",
              data: [
                0
              ]
            },
            {
              name: "away-team-prices",
              data: [
                0
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
              colors: ['#77B6EA', '#545454'],
              dataLabels: {
                enabled: false
              },
              markers: {
                size: 0,
              },
              title: {
                text: 'Live Odds Data',
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
                  text: "H2H Line",
                  style: {
                    fontSize: "14px",
                    fontWeight: 600,
                    cssClass: "y-axis-label",
                  },
                },
                min: -1000, // Minimum value for the y-axis
                max: 1000, // Maximum value for the y-axis
                labels: {
                  show: true, // Allow user to see and modify the labels
                },
              },
              xaxis: {
                categories: [
                  "2023-08-01T00:00:00Z",
                ],
                title: {
                  text: "Date Time Updated",
                  style: {
                    fontSize: "14px",
                    fontWeight: 600,
                    cssClass: "x-axis-label",
                  },
                },
                
              },
        //       annotations: {
        //         xaxis: [
        //           {
        //             x: "2023-08-01T00:06:00Z,30", // The data point you want to add the line to
        //             borderColor: "#00E396",
        //             label: {
        //               borderColor: "#00E396",
        //               style: {
        //                 color: "#fff",
        //                 background: "#00E396",
        //               },
        //               text: "Vertical Line",
        //             },
        //           },
        //         ],
        //       }
      },
        
      
      
      };
    }

    async componentDidMount() 
    {
        try {
          // Perform an asynchronous task, e.g., fetch data from an API
          const bookMakerDataArray = await this.props.handleFetchAndFilterH2hOddsData_customApi();
          console.log("success mount")
          this.setState((prevState) => ({
            series: [
              {
                name: "home-team-prices",
                data: bookMakerDataArray.map(obj => obj.home_team_price)
              },
              {
                name: "away-team-prices",
                data: bookMakerDataArray.map(obj => obj.away_team_price)
              }
            ],
          options: {
            ...prevState.options,
                xaxis: {
                  categories: bookMakerDataArray.map(obj => obj.last_update),
                  title: {
                    text: "X Axis Label",
                    style: {
                      fontSize: "14px",
                      fontWeight: 600,
                      cssClass: "x-axis-label",
                    },
                  },
                  
                },
        },
          }));
        } catch (error) {
          console.error('Error:', error);
        }
    }
    async componentDidUpdate(prevProps) {
      if (this.props.selectedBook !== prevProps.selectedBook) {
        // This function will be called whenever parentState changes
        try {
          // Perform an asynchronous task, e.g., fetch data from an API
          const bookMakerDataArray = await this.props.handleFetchAndFilterH2hOddsData_customApi();
          console.log("success component update in zoomline chart!")
          this.setState((prevState) => ({
            series: [
              {
                name: "home-team-prices",
                data: bookMakerDataArray.map(obj => obj.home_team_price)
              },
              {
                name: "away-team-prices",
                data: bookMakerDataArray.map(obj => obj.away_team_price)
              }
            ],
          options: {
            ...prevState.options,
                xaxis: {
                  categories: bookMakerDataArray.map(obj => obj.last_update),
                  title: {
                    text: "X Axis Label",
                    style: {
                      fontSize: "14px",
                      fontWeight: 600,
                      cssClass: "x-axis-label",
                    },
                  },
                  
                },
        },
          }));
        } catch (error) {
          console.error('Error:', error);
        }
      }
    }

    render() {
      return (
        <div id="chart">
          <div>
            <p>Here is loaded mounted chart</p>
          </div>
            <Chart options={this.state.options} series={this.state.series} type="area" />
        </div>
      );
    }
  }
export default ZoomLineChart;
