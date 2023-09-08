import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ZoomLineChart from '../components/ZoomLineChart';
import DateSelect from '../components/DateSelect';
import filterOddsApiData from '../logic/filterOddsApiData';
import ContestTemplate from '../components/ContestTemplate';
class LiveCharts extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            _selected_sport: 'None',
            _selected_book: 'None',
            _selected_date: null,
            _game_array: [],

        }
        this.fetchLiveAndUpcomingNflGames_theoddsapi  = this.fetchLiveAndUpcomingNflGames_theoddsapi.bind(this);
        this.handleFetchAndFilter_theoddsapi = this.handleFetchAndFilter_theoddsapi.bind(this);
        this.handleSetSport = this.handleSetSport.bind(this);
        this.handleResetSport = this.handleResetSport.bind(this);
        this.handleSetBook = this.handleSetBook.bind(this);
        this.handleResetBook = this.handleResetBook.bind(this);
        this.handleSetDate = this.handleSetDate.bind(this);
        this.handleResetDate = this.handleResetDate.bind(this);
    }
    handleSetBook(book) {
        this.setState({
            _selected_book: book,
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
    async handleSetDate(date) {
        this.setState({
            _selected_date: date,
        })
    }
    handleResetDate() {
        this.setState({
            _selected_date: null,
        })
    }

    //Fetch from the-odds-api for list of upcoming games
    async fetchLiveAndUpcomingNflGames_theoddsapi()
    {
        const oddsAPI = 'https://api.the-odds-api.com/v4/sports/americanfootball_nfl/scores';
        // let tempDateObj = new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate());
        // tempDateObj.setHours(tempDateObj.getHours()-7,30,0);
        // const formattedStartDate = dateStr.substring(0, 19) + 'Z';
        // console.log(formattedStartDate)
        //want to search in range [formattedDate, formattedDate+24 hours)
        // /odds/&regions=us&markets=h2h,spreads&oddsFormat=american&date=${formattedStartDate}`;
        //example: https://api.the-odds-api.com/v4/sports/americanfootball_nfl/scores/?apiKey=c12e854a72219eb10a45e79013747e40
        // const apiKey = process.env.REACT_APP_ODDS_API_API_KEY;
        const apiKey = "c12e854a72219eb10a45e79013747e40";
        const fullAPI = `${oddsAPI}?apiKey=${apiKey}`;
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
                sessionStorage.setItem(fullAPI, JSON.stringify(data));
                return data;
            }).catch((error) => {
                //this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
            return externResponse;
        }
    }

    async handleFetchAndFilter_theoddsapi()
    {
        let liveAndUpcomingContests = await this.fetchLiveAndUpcomingNflGames_theoddsapi();
        //TODO: only want the first set of contests, not all future contests
        let filteredGameArrayData = filterOddsApiData(liveAndUpcomingContests);
        this.setState({
            _game_array: filteredGameArrayData,
        });
        console.log(filteredGameArrayData)
        
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
        if(this.state._selected_sport != 'None')
        {
            renderedContent = <>
                <div className="col-md-3 col-sm-3">
                    <button type="button" 
                            class="btn btn-primary btn-block mb-4"
                            onClick={this.handleResetSport}
                    >Back</button>
                </div>
                <div className="row mb-4">
                <DateSelect
                handleSetDate={this.handleSetDate}
                selectedDate={this.state._selected_date}
                ></DateSelect>
                </div>
                <div className="row mb-4">
                <select class="form-select" aria-label="book-select">
                    <option selected>Select a book</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                </div>
                <div className="row mb-4">
                <ZoomLineChart></ZoomLineChart>
                </div>
            </>
        }
        if(this.state._selected_date)
        {
            renderedContent = <>
                <div className="col-md-3 col-sm-3">
                    <button type="button" 
                            class="btn btn-primary btn-block mb-4"
                            onClick={this.handleResetSport}
                    >Back</button>
                </div>
                <div className="row mb-4">
                <DateSelect
                handleSetDate={this.handleSetDate}
                selectedDate={this.state._selected_date}
                ></DateSelect>
                </div>
                <ContestTemplate
                handleFetchAndFilter_theoddsapi={this.handleFetchAndFilter_theoddsapi}
                >
                </ContestTemplate>
                <div className="row mb-4">
                <select class="form-select" aria-label="book-select">
                    <option selected>Select a book</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                </div>
                <div className="row mb-4">
                <ZoomLineChart></ZoomLineChart>
                </div>
            </>
        }
        return (
            <main class="flex-shrink-0">
                <NavBar></NavBar>
                <h1>Charts Page</h1>
                <div class="container px-5">
                    {renderedContent}
                </div>
                <Footer></Footer>
            </main>
        );
    }
}

export default LiveCharts;