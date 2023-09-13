import React from 'react';
class DropDownSelect extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
          <h1>Dropdown Select Example</h1>
          <select
            value={this.props.selectedBook}
            onChange={this.props.handleSetBook}
          >
            <option value="Bovada">Bovada</option>
            <option value="BetMGM">BetMGM</option>
            <option value="PointUSA">PointUSA</option>
            <option value="NewBook">NewBook</option>
            <option value="SuperUSA">SuperUSA</option>
          </select>
          <p>Selected book: {this.props.selectedBook}</p>
        </div>
      );
    }
  }
  
  export default DropDownSelect;