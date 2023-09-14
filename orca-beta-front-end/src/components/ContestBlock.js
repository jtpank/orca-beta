import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class ContestBlock extends Component {
    constructor(props) {
        super(props);
      this.handleClick = this.handleClick.bind(this);
      }
      handleClick()
      {
        this.props.handleSelectContest(this.props.game);
        this.props.handleSelectContestBlock(this.props.game.id);
      }
  render() {
    const { game, isSelected } = this.props;
    const highlightClass = isSelected ? '-highlighted' : '';
    return (
          <div className={`contest-block${highlightClass}`} onClick={this.handleClick}>
            <p>Commence time: {game.commence_time}</p>
            <p>ID: {game.id}</p>
            <p>Home Team: {game.home_team} | {game.home_team_score}</p>
            <p>Away Team: {game.away_team} | {game.away_team_score}</p>
          </div>
    );
  }
}

export default ContestBlock;