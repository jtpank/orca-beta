export default function parseCustomApiBookmakerDataGivenSpecifiedContest(startDateIsoString, endDateIsoString, contestId, gameArray) {
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
    // if(arrayOfGames.length > 0)
    // {
    //     //This only works for parsed data already via python
    //     for(let i = 0; i < arrayOfGames.length; i++)
    //     {
    //         let game = arrayOfGames[i];
    //         let tempObj = {
    //             "id": game["id"],
    //             "commence_time": game["commence_time"],
    //             "home_team": game["home_team"],
    //             "away_team": game["away_team"],
    //             "home_team_score": game["home_team_score"],
    //             "away_team_score": game["away_team_score"],
    //             "completed": game["completed"],
    //         }
    //         //compare dateTimes
    //         const currentDate = new Date(startDateIsoString);
    //         const gameDate = new Date(game.commence_time);
    //         // if(isSameDay(currentDate, gameDate))
    //         // {
    //         //     returnArrayOfParsedGames.push(tempObj);
    //         // }
    //     }
    // }
    return returnArrayOfParsedGames;

}