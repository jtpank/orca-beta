import React, { Component } from 'react';
import ContestBlock from './ContestBlock';
class ContestTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedGameId: null,
          isCollapsed: false,
        };
        this.handleSelectContestBlock = this.handleSelectContestBlock.bind(this);
        this.toggleCollapse = this.toggleCollapse.bind(this);
    
      }
      componentDidMount() {
        this.props.handleFetchAndFilterLiveAndUpcomingGames_customApi();
      }
      componentDidUpdate(prevProps) {
          if (this.props.selectedDate !== prevProps.selectedDate) {
            this.setState({
              selectedGameId: null,
            })
            // This function will be called whenever parentState changes
            this.props.handleFetchAndFilterLiveAndUpcomingGames_customApi();
          }
        }
      handleSelectContestBlock(selectedGameId) {
        this.setState({ selectedGameId });
      };
      toggleCollapse() {
        this.setState((prevState) => ({
          isCollapsed: !prevState.isCollapsed,
        }))
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
                              isSelected={game.id === this.state.selectedGameId}
                              handleSelectContestBlock={this.handleSelectContestBlock}
                              handleSelectContest={this.props.handleSelectContest}
                              ></ContestBlock>
          arrayContestBlocks.push(contestBlock);
      }
    }
      
    return (
      <div className="container mt-4">
      <div className="row">
        <button
          className="btn btn-primary"
          type="button"
          onClick={this.toggleCollapse}
        >
        Collapse Contests
        </button>
      </div>
        <div className={`row ${this.state.isCollapsed ? 'collapse' : ''}`}>
            Sport Template
            <p>
              {this.props.selectedDate.toISOString()}
            </p>
            {arrayContestBlocks.map((block, index) => (
              <div className="col-md-6" key={block.key}>
                {block}
              </div>
            ))}
        </div>
        </div>
    );
  }
}

export default ContestTemplate;