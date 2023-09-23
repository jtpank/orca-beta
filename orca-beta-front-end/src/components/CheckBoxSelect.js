import React from 'react';
class CheckBoxSelect extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        _bookmaker_array: []
      }
    }
    async componentDidMount() {
      const bookmakerArray = await this.props.handleFetchBooksForContestId_customApi(this.props.selectedContest.id);
      if(Array.isArray(bookmakerArray))
      {
        this.setState({
          _bookmaker_array: bookmakerArray,
        });
      }

    }
    async componentDidUpdate(prevProps) {
      const bookmakerArray = await this.props.handleFetchBooksForContestId_customApi(this.props.selectedContest.id);
      if (this.props.selectedContest !== prevProps.selectedContest) {
        if(Array.isArray(bookmakerArray))
        {
          this.setState({
            _bookmaker_array: bookmakerArray,
          });
        }
      }
    }

    render() {
      return (
        <div>
          <h1>CheckBox Select Example</h1>
          {this.state._bookmaker_array.map((book, index) => (
            <div className="form-check form-check-inline" key={index}>
              <input
                className="form-check-input"
                type="checkbox"
                name={book}
                id={book}
                checked={this.props.selectedBookArray.includes(book)}
                onChange={(event) => this.props.handleCheckBoxSelect(event, book)}
              />
              <label className="form-check-label" htmlFor={book}>
                {book}
              </label>
            </div>
          ))}
        </div>
      );
    }
  }
  
  export default CheckBoxSelect;