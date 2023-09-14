import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ZoomLineChart from '../components/ZoomLineChart';
import DateSelect from '../components/DateSelect';
import filterOddsApiData from '../logic/filterOddsApiData';
import ContestTemplate from '../components/ContestTemplate';
import parseOddsApiUpcomingGames_returnCurrentGames from '../logic/parseOddsApiUpcomingGames_returnCurrentGames';
import DropDownSelect from '../components/DropDownSelect';
class LiveCharts extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            _selected_sport: 'None',
            _selected_book: 'None',
            _selected_date: null,
            _selected_contest: {"id": null},
            _game_array: [],

        }
        this.fetchLiveAndUpcomingNflGames_theoddsapi  = this.fetchLiveAndUpcomingNflGames_theoddsapi.bind(this);
        this.fetchLiveAndUpcomingGames_customApi = this.fetchLiveAndUpcomingGames_customApi.bind(this);
        this.handleFetchAndFilter_theoddsapi = this.handleFetchAndFilter_theoddsapi.bind(this);

        this.handleSelectContest = this.handleSelectContest.bind(this);
        this.handleResetSelectContest = this.handleResetSelectContest.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleSetSport = this.handleSetSport.bind(this);
        this.handleResetSport = this.handleResetSport.bind(this);
        this.handleSetBook = this.handleSetBook.bind(this);
        this.handleResetBook = this.handleResetBook.bind(this);
        this.handleSetDate = this.handleSetDate.bind(this);
        this.handleResetDate = this.handleResetDate.bind(this);
    }

    handleReset() {
        this.handleResetDate();
        this.handleResetSport();
        this.handleResetSelectContest();
    }

    handleSetBook(event) {
        const selectedBook = event.target.value;
        this.setState({
            _selected_book: selectedBook,
        })
    }
    handleResetBook() {
        this.setState({
            _selected_book: 'None',
        })
    }
    handleSetSport(sport) {
        this.setState({
            _selected_sport: sport,
        })
    }
    handleResetSport() {
        this.setState({
            _selected_sport: 'None',
        })
    }
    handleSetDate(date) {
        console.log("handleSetDate line 62 in LiveChart.js fired")
        this.handleResetSelectContest();
        this.setState((prevState) => ({
            _selected_date: date,
          }), () => {
            // This callback is called after the state has been updated.
            // console.log("State has been updated:", this.state._selected_date);
          });
    }
    handleResetDate() {
        this.setState({
            _selected_date: null,
        })
    }

    handleSelectContest(game) {
        console.log("handleselectcontest: ")
        console.log(game)
        this.setState({
            _selected_contest: {
                "id": game.id,
                "home_team": game.home_team,
            }
        })
    }

    handleResetSelectContest() {
        this.setState({
            _selected_contest: {
                "id": null,
                "home_team": null,
            }
        })
    }
    //Fetch from custom server
    async fetchLiveAndUpcomingGames_customApi(sport_name, sport, dateIsoString)
    {
        //endpoint should be 'scores'
        let additionalParams = {};
        const fullAPI = `http://localhost:5000/api/get/live-${sport_name}-scores-data?sport=${sport}&date=${dateIsoString}`;
        //Check cache first
        const cachedResponse = sessionStorage.getItem(fullAPI);
        if (cachedResponse) {
          const data = JSON.parse(cachedResponse);
          return data;
        }
        else
        {
            const externResponse = await fetch(fullAPI)
            .then(async (response) => {
                const data = await response.json();
                // check for error response
                if (!response.ok) {
                // get error message from body or default to response statusText
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
                };
                //Store in the cache
                let parsedTimeData = parseOddsApiUpcomingGames_returnCurrentGames(dateIsoString, data.data);
                sessionStorage.setItem(fullAPI, JSON.stringify(parsedTimeData));
                return parsedTimeData;
            }).catch((error) => {
                //this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
            return externResponse;
        }
    }



    //Fetch from the-odds-api for list of upcoming games
    async fetchLiveAndUpcomingNflGames_theoddsapi()
    {
        let isoCurrentDateTime = null;
        if(this.state._selected_date)
        {
            isoCurrentDateTime = this.state._selected_date.toISOString().substring(0, 19) + 'Z';
        }
        // let tempDateObj = new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate());
        // tempDateObj.setHours(tempDateObj.getHours()-7,30,0);
        // const formattedStartDate = isoCurrentDateTime.substring(0, 19) + 'Z';
        // console.log(formattedStartDate)
        //want to search in range [formattedDate, formattedDate+24 hours)
        // /odds/&regions=us&markets=h2h,spreads&oddsFormat=american&date=${formattedStartDate}`;
        //example: https://api.the-odds-api.com/v4/sports/americanfootball_nfl/scores/?apiKey=c12e854a72219eb10a45e79013747e40
        // const apiKey = process.env.REACT_APP_ODDS_API_API_KEY;
        const oddsAPI = 'https://api.the-odds-api.com/v4/sports/americanfootball_nfl/scores';
        const apiKey = "c12e854a72219eb10a45e79013747e40";
        const fullAPI = `${oddsAPI}?apiKey=${apiKey}&date=${isoCurrentDateTime}`;
        //Check cache first
        const cachedResponse = sessionStorage.getItem(fullAPI);
        if (cachedResponse) {
          const data = JSON.parse(cachedResponse);
          return data;
        }
        else
        {
            const externResponse = await fetch(fullAPI)
            .then(async (response) => {
                const data = await response.json();
                // check for error response
                if (!response.ok) {
                // get error message from body or default to response statusText
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
                };
                //Store in the cache
                let parsedTimeData = parseOddsApiUpcomingGames_returnCurrentGames(isoCurrentDateTime, data);
                sessionStorage.setItem(fullAPI, JSON.stringify(parsedTimeData));
                return parsedTimeData;
            }).catch((error) => {
                //this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
            return externResponse;
        }
    }

    async handleFetchAndFilter_customApi()
    {
        let isoCurrentDateTime = null;
        if(this.state._selected_date)
        {
            isoCurrentDateTime = this.state._selected_date.toISOString().substring(0, 19) + 'Z';
        }
        let liveAndUpcomingContests_arrayData = await this.fetchLiveAndUpcomingGames_customApi("nfl", "americanfootball_nfl", isoCurrentDateTime);
        this.setState({
            _game_array: liveAndUpcomingContests_arrayData,
        });
    }

    render() {
        let renderedContent = <>
                    <div class="col-md-3 col-sm-3">
                        <button type="button" 
                        class="btn btn-primary btn-block mb-4"
                        onClick={() => this.handleSetSport('NFL')}
                        >NFL</button>
                        </div>
                        <div class="col-md-3 col-sm-3">
                        <button type="button" 
                        class="btn btn-primary btn-block mb-4"
                        onClick={() => this.handleSetSport('NBA')}
                        >NBA</button>
                    </div>
                    </>
        
        let renderedContests = <></>
        
        let renderedChart = <></>

        let renderedSelectBook = <></>
        
        
        if(this.state._selected_sport !== 'None')
        {
            renderedContent = <>
                <div className="col-md-3 col-sm-3">
                    <button type="button" 
                            class="btn btn-primary btn-block mb-4"
                            onClick={this.handleReset}
                    >Back</button>
                </div>
                <div className="row mb-4">
                <DateSelect
                handleSetDate={this.handleSetDate}
                selectedDate={this.state._selected_date}
                ></DateSelect>
                </div>
                <div className="row mb-4">
                </div>
                <div className="row mb-4">
                </div>
            </>
        }
        if(this.state._selected_sport !== 'None' && this.state._selected_date)
        {
            renderedContests = <>
                <ContestTemplate
                handleFetchAndFilter_customApi={this.handleFetchAndFilter_customApi}
                game_array={this.state._game_array}
                handleSelectContest={this.handleSelectContest}
                selectedDate={this.state._selected_date}
                >
                </ContestTemplate>
            </>

        }
        if(this.state._selected_sport != 'None' && this.state._selected_date && this.state._selected_book && Object.values(this.state._selected_contest).every(value => value !== null))
        {
            renderedSelectBook = <>
                <DropDownSelect
                handleSetBook = {this.handleSetBook}
                selectedBook = {this.state._selected_book}
                ></DropDownSelect>
            </>

            renderedChart = <>
                <ZoomLineChart></ZoomLineChart>
            </>
        }

        return (
            <main class="flex-shrink-0">
                <NavBar></NavBar>
                <h1>Charts Page</h1>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <h2>Sidebar</h2>
                            <p>This is the sidebar content.</p>
                                {renderedContent}
                        </div>
                        <div className="col-md-9">
                            <div className="row">
                                <div className="col-md-12">
                                    <h2>Contest Row</h2>
                                    <p>Contest content</p>
                                    {renderedContests}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <h2>Select Book</h2>
                                    {renderedSelectBook}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <h2>Chart Row</h2>
                                    <p>Chart content</p>
                                    {renderedChart}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </main>
        );
    }
}

export default LiveCharts;