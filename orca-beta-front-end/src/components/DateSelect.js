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
                minDate={new Date()}
                format="yyyy-MM-dd'T'HH:mm:ss'Z'"
                placeholderText="Please select date"
                />
                {this.props.selectedDate && <p>Selected Date: {this.props.selectedDate.toISOString()}</p>}
            </div>
            );
        }
}
export default DateSelect;