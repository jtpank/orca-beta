function isLessThan1DaysFromNow(isoDateString, dateString) {
    const date = new Date(isoDateString);
    const currentDate = new Date(dateString);
  
    // Calculate the time difference in milliseconds
    const timeDifference = date.getTime() - currentDate.getTime();
  
    // Calculate the number of days
    const daysDifference = timeDifference / (1000 * 3600 * 24);
  
    // Check if the difference is less than 2 days
    return daysDifference < 1;
  }
function isSameDay(isoDateString1, isoDateString2) {
    const date1 = new Date(isoDateString1);
    const date2 = new Date(isoDateString2);
  
    // Compare year, month, and day
    const isSameYear = date1.getFullYear() === date2.getFullYear();
    const isSameMonth = date1.getMonth() === date2.getMonth();
    const isSameDayOfMonth = date1.getDate() === date2.getDate();
  
    return isSameYear && isSameMonth && isSameDayOfMonth;
  }
export default function parseCustomApiUpcomingGames_returnCurrentGames(isoCurrentDateTime, arrayOfGames) {
    //data is an array [obj1,obj2,...] where each obj is as follows:
    //{"id":"0e7b3192b263a571917d8996f42c5024",
    // "sport_key":"americanfootball_nfl",
    // "sport_title":"NFL",
    // "commence_time":"2023-09-08T00:20:00Z",
    // "completed":false,
    // "home_team":"Kansas City Chiefs",
    // "away_team":"Detroit Lions",
    // "scores":null,
    // "last_update":null}
    //

    let returnArrayOfParsedGames = [];
    if(arrayOfGames.length > 0)
    {
        //This only works for parsed data already via python
        for(let i = 0; i < arrayOfGames.length; i++)
        {
            let game = arrayOfGames[i];
            // console.log("data")
            // console.log(game)
            let tempObj = {
                "id": game["odds_api_game_id"],
                "commence_time": game["commence_time"],
                "home_team": game["home_team"],
                "away_team": game["away_team"],
                "home_team_score": game["home_team_score"],
                "away_team_score": game["away_team_score"],
                "completed": game["completed"],
            }
            //compare dateTimes
            const currentDate = new Date(isoCurrentDateTime);
            const gameDate = new Date(game.commence_time);
            if(isSameDay(currentDate, gameDate))
            {
                returnArrayOfParsedGames.push(tempObj);
            }
        }
    }
    return returnArrayOfParsedGames;

}