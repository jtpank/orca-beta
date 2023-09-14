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
            <option value="bovada">Bovada</option>
            <option value="draftkings">Draftkings</option>
            <option value="fanduel">Fanduel</option>
            <option value="betmgm">BetMGM</option>
          </select>
          <p>Selected book: {this.props.selectedBook}</p>
        </div>
      );
    }
  }
  
  export default DropDownSelect;