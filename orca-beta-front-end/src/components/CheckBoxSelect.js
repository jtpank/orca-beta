import React from 'react';
class CheckBoxSelect extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
          <h1>CheckBox Select Example</h1>
          {/* {this.props.book_array.map((book, index) => (
            <div className="form-check" key={index}>
              <input
                className="form-check-input"
                type="checkbox"
                name={book}
                id={book}
              />
              <label className="form-check-label" htmlFor={book}>
                {book}
              </label>
            </div>
          ))} */}
        </div>
      );
    }
  }
  
  export default CheckBoxSelect;