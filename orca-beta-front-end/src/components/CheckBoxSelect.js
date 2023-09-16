import React from 'react';
class CheckBoxSelect extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
          <h1>CheckBox Select Example</h1>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="apple"
              id="apple"
            />
            <label className="form-check-label" htmlFor="apple">
              Apple
            </label>
        </div>
        </div>
      );
    }
  }
  
  export default CheckBoxSelect;