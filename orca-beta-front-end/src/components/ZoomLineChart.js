
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
                    return (val / 1).toFixed(3)
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
                  align: 'right',
                  minWidth: 0,
                  maxWidth: 160,
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

      this.fetchDataAndUpdateState = this.fetchDataAndUpdateState.bind(this);
      this.fetchAllSelectedCheckBoxBookLinesDataAndUpdateState = this.fetchAllSelectedCheckBoxBookLinesDataAndUpdateState.bind(this);
    }

    async fetchAllSelectedCheckBoxBookLinesDataAndUpdateState() {
      try {
        let home_team_data_array = [];
        let away_team_data_array = [];
        let categories_array = [];
        let home_team = "";
        let away_team = "";
        const bookMakerDataArrayOfItems = await this.props.handleFetchAllH2hOddsDataFromBookArray_customApi();
        //data can be of different sizes* so bovada data is 200 elements, dk data is 190 elements for example
        console.log("line 131 zoomlinechart.js ");
        console.log(bookMakerDataArrayOfItems)
        if(Array.isArray(bookMakerDataArrayOfItems) && bookMakerDataArrayOfItems.length > 0)
        {
          for(const bookArrayItem of bookMakerDataArrayOfItems)
          {
            let home_team_price_array = bookArrayItem.bookmaker_data.map(obj => obj.home_team_price);
            let away_team_price_array = bookArrayItem.bookmaker_data.map(obj => obj.away_team_price);
            //Multiplier array; if negative then multiplier is -1.0 * x / 100
            // other wise multipler is x / 100
            // so +200 ==> 2x multipler
            // and -125 ==> 0.8 multipler
            let home_team_multiplier_array = home_team_price_array.map(price => {
              if (price >= 0) {
                return (price / 100.00).toFixed(3);
              } else {
                return (-1.0 * price / 100.00).toFixed(3);
              }
            });
            let away_team_multiplier_array = away_team_price_array.map(price => {
              if (price >= 0) {
                return (price / 100.00).toFixed(3);
              } else {
                return (-1.0 * price / 100.00).toFixed(3);
              }
            });
            let dataItemHome = {
              "bookmaker_key": bookArrayItem.bookmaker_key,
              "home_team_price_array": home_team_price_array,
              "home_multiplier_array": home_team_multiplier_array,
            }
            let dataItemAway = {
              "bookmaker_key": bookArrayItem.bookmaker_key,
              "away_team_price_array": away_team_price_array,
              "away_multiplier_array": away_team_multiplier_array, 
            }
            home_team_data_array.push(dataItemHome);
            away_team_data_array.push(dataItemAway)
          }
          home_team = bookMakerDataArrayOfItems[0].bookmaker_data[0]["home_team"];
          away_team = bookMakerDataArrayOfItems[0].bookmaker_data[0]["away_team"];
          categories_array = bookMakerDataArrayOfItems[0].bookmaker_data.map(obj => obj.last_update.substring(5,9));
          console.log(home_team_data_array);
          console.log(away_team_data_array);
          
          let newSeries = [];
          home_team_data_array.forEach((item) => {
            const homeSeries = {
              name: `${home_team} / Home / ${item.bookmaker_key}`,
              data: item.home_multiplier_array,
            };
            newSeries.push(homeSeries);
          });
          away_team_data_array.forEach((item) => {
            const awaySeries = {
              name: `${away_team} / Home / ${item.bookmaker_key}`,
              data: item.away_multiplier_array,
            };
            newSeries.push(awaySeries);
          });


          this.setState((prevState) => ({
            series: newSeries,
          options: {
            ...prevState.options,
                xaxis: {
                  categories: categories_array,
                  title: {
                    text: "X Axis Label",
                    style: {
                      fontSize: "14px",
                      fontWeight: 600,
                      cssClass: "x-axis-label",
                    },
                  },
                  
                },
                yaxis: {
                  min: 0,
                  max: 2,
                }
        },
          }));
        }
      } catch (error) {
        console.error('Error in fetchAllSelectedCheckBoxBookLinesDataAndUpdateState:', error);
      }
      
    }
    async fetchDataAndUpdateState() {
      try {
        // Perform an asynchronous task, e.g., fetch data from an API
        const bookMakerDataArray = await this.props.handleFetchAndFilterH2hOddsData_customApi();
        let home_team_price_array = [];
        let away_team_price_array = [];
        let home_team_multiplier_array = [];
        let away_team_multiplier_array = [];
        let categories_array = [];
        let min_of_both_arrays = -200;
        let max_of_both_arrays = 200;
        let home_team = "";
        let away_team = "";
        if(Array.isArray(bookMakerDataArray) && bookMakerDataArray.length > 0)
        {
          home_team_price_array = bookMakerDataArray.map(obj => obj.home_team_price);
          away_team_price_array = bookMakerDataArray.map(obj => obj.away_team_price);
          //Multiplier array; if negative then multiplier is -1.0 * x / 100
          // other wise multipler is x / 100
          // so +200 ==> 2x multipler
          // and -125 ==> 0.8 multipler
          home_team_multiplier_array = home_team_price_array.map(price => {
            if (price >= 0) {
              return (price / 100.00).toFixed(3);
            } else {
              return (-1.0 * price / 100.00).toFixed(3);
            }
          });
          away_team_multiplier_array = away_team_price_array.map(price => {
            if (price >= 0) {
              return (price / 100.00).toFixed(3);
            } else {
              return (-1.0 * price / 100.00).toFixed(3);
            }
          });

          console.log(away_team_multiplier_array)
          categories_array = bookMakerDataArray.map(obj => obj.last_update);
          let both_arrays = home_team_price_array.concat(away_team_price_array);
          let both_multiplier_arrays = home_team_multiplier_array.concat(away_team_multiplier_array);
          min_of_both_arrays = 0;//Math.floor(Math.min(...both_arrays)*1.5);
          max_of_both_arrays = Math.ceil(Math.max(...both_multiplier_arrays)*1.5);//Math.floor(Math.max(...both_arrays)*1.5);
          home_team = bookMakerDataArray[0]["home_team"];
          away_team = bookMakerDataArray[0]["away_team"];
        }
        console.log("success mount")
        this.setState((prevState) => ({
          series: [
            {
              name: `${home_team} / Home`,
              data:  home_team_multiplier_array,
            },
            {
              name: `${away_team} / Away`,
              data: away_team_multiplier_array,
            }
          ],
        options: {
          ...prevState.options,
              xaxis: {
                categories: categories_array,
                title: {
                  text: "X Axis Label",
                  style: {
                    fontSize: "14px",
                    fontWeight: 600,
                    cssClass: "x-axis-label",
                  },
                },
                
              },
              yaxis: {
                min: min_of_both_arrays,
                max: max_of_both_arrays,
              }
      },
        }));
      } catch (error) {
        console.error('Error in fetchDataAndUpdateState:', error);
      }
    }

    async componentDidMount() {
      await this.fetchAllSelectedCheckBoxBookLinesDataAndUpdateState();
      console.log("success mount");
    }
    async componentDidUpdate(prevProps) {
      if (this.props.selectedBookArray !== prevProps.selectedBookArray) {
        await this.fetchAllSelectedCheckBoxBookLinesDataAndUpdateState();
        console.log("success component update in zoomline chart!");
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
