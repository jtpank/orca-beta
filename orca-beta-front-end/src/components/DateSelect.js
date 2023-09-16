import React from 'react';
import DatePicker from 'react-date-picker';
import Form from "react-bootstrap/Form";
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
class DateSelect extends React.Component {
    constructor(props) {
        super(props);
      }
    
      handleDateChange = (newDate) => {
        console.log("date: ")
        console.log(newDate)
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
                holidays={this.props.holidays || []}
                />
                {this.props.selectedDate && <p>Selected Date: {this.props.selectedDate.toISOString()}</p>}
            </div>
            );
        }
}
export default DateSelect;