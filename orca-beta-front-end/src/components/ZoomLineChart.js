
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
            {
              name: "series-3",
              data: [24, 20, 5, 75, 42, 79, 72, 35]
            }
          ],
        options: {
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