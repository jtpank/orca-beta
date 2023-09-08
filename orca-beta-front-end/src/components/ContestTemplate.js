import React, { Component } from 'react';
import ContestBlock from './ContestBlock';
class ContestTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        
      }
    async componentDidMount()
    {
        const sportField = this.props.oddsApiSportKey;
        const endpoint = "scores";
        const currentDateTime = new Date();
        currentDateTime.setHours(0, 0, 0, 0);
        const isoCurrentDateTime = currentDateTime.toISOString().substring(0, 19) + 'Z';
        this.props.handleFetchAndFilter_theoddsapi(isoCurrentDateTime);
    }


  render() {
    let arrayContestBlocks = [];
    if(this.props.game_array)
    {
      for(let game of this.props.game_array)
      {
          let contestBlock = <ContestBlock
                              key={game.id}
                              game={game}
                              contest_game_id={this.props.contest_game_id}
                              setContestGameId={this.props.setContestGameId}
                              handleSelectContest={this.props.handleSelectContest}
                              ></ContestBlock>
          arrayContestBlocks.push(contestBlock);
      }
    }
    return (
        <div>
            Sport Template
            <div>
                {arrayContestBlocks}
            </div>
        </div>
    );
  }
}

export default ContestTemplate;