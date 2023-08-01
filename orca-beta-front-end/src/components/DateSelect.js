import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
class DateSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedDate: null,
        };
      }
    
      handleDateChange = (newDate) => {
        this.setState({
          selectedDate: newDate,
        });
      };
    render() {
        const { selectedDate } = this.state;
        return (
            <div className="container mt-4">
                <h2>Select Date Below</h2>
                <DatePicker
                onChange={this.handleDateChange}
                value={selectedDate}
                format="YYYY-MM-DD HH:mm:ss"
                />
                {selectedDate && <p>Selected Date: {selectedDate.toString()}</p>}
            </div>
            );
        }
}
export default DateSelect;