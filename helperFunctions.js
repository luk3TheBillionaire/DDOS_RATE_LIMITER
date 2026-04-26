const userRequests={};
const RATE_LIMIT_MAX = 5;
const TIME_WINDOW_MS = 10000;

function checkRateLimit(userID){
    const now = Date.now();
    if(!userRequests[userID]){
        userRequests[userID]=[];
    }

    const history = userRequests[userID];

    //Remove old requests outside the time window
    while (history.length>0 && history[0]<= now - TIME_WINDOW_MS){
        history.shift()
    }

    //CHeck agains the limit
    if (history.length >= RATE_LIMIT_MAX){
        return false; //blocked
    }

    history.push(now);
    return true //Allowed

}

function resetLimiterState(){
    for (const key in userRequests){
        delete userRequests[key];
    }
}

module.exports={checkRateLimit,resetLimiterState,RATE_LIMIT_MAX,TIME_WINDOW_MS}