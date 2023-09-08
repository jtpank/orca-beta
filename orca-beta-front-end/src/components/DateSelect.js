import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
class DateSelect extends React.Component {
    constructor(props) {
        super(props);
      }
    
      handleDateChange = (newDate) => {
        this.props.handleSetDate(newDate);
      };
    render() {
        return (
            <div className="container mt-4">
                <DatePicker
                onChange={this.handleDateChange}
                selected={this.props.selectedDate}
                format="YYYY-MM-DD HH:mm:ss"
                placeholderText="Please select date"
                />
                {this.props.selectedDate && <p>Selected Date: {this.props.selectedDate.toString()}</p>}
            </div>
            );
        }
}
export default DateSelect;