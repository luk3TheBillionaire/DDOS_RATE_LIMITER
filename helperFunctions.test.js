const {checkRateLimit,resetLimiterState,RATE_LIMIT_MAX,TIME_WINDOW_MS} = require('./helperFunctions.js');

describe('Rate Limiter Logic',()=>{
    const testUser = 'user_123';
    beforeEach(()=>{
        //1. Take over the system clock 
        jest.useFakeTimers();
        resetLimiterState();
    });
    afterEach(()=>{
        jest.useRealTimers();
    });
    test('Shoould allow requests under the limit', () => {
        for (let i = 0; i< RATE_LIMIT_MAX; i++){
            const isAllowed = checkRateLimit(testUser);
            expect(isAllowed).toBe(true);
        }
        })
})