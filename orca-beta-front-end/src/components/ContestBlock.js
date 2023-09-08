import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class ContestBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isHighlighted: false,
        };
      this.handleClick = this.handleClick.bind(this);
      }
      handleClick()
      {
        this.props.handleSelectContest(this.props.game)
        this.setState((prevState) => ({
          isHighlighted: !prevState.isHighlighted,
        }));
      }
  render() {
    const { game } = this.props;
    const { isHighlighted } = this.state;
    const highlightClass = isHighlighted ? '-highlighted' : '';
    return (
          <div className={`contest-block${highlightClass}`} onClick={this.handleClick}>
            <p>Commence time: {game.commence_time}</p>
            <p>Home Team: {game.home_team} | {game.home_team_score}</p>
            <p>Away Team: {game.away_team} | {game.away_team_score}</p>
          </div>
    );
  }
}

export default ContestBlock;