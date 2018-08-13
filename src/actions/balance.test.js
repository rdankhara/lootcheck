import * as constants from './constants';
import * as actions from './balance';

describe ('balance action', ()=> {
    it('creates an action to set balance', () => {
        const balance = 0;
        const expectedAction = {type: constants.SET_BALANCE, balance};
        const action = actions.setBalance(balance);

        expect(action).toEqual(expectedAction);
    });
});