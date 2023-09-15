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
                holidays={[
                  { date: "2023-08-15", holidayName: "India's Independence Day" },
                  { date: "2023-12-31", holidayName: "New Year's Eve" },
                  { date: "2023-12-25", holidayName: "Christmas" },
                  { date: "2024-01-01", holidayName: "New Year's Day" },
                  { date: "2023-11-23", holidayName: "Thanksgiving Day" }
                ]}
                />
                {this.props.selectedDate && <p>Selected Date: {this.props.selectedDate.toISOString()}</p>}
            </div>
            );
        }
}
export default DateSelect;