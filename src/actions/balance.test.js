import * as constants from './constants';
import * as actions from './balance';

describe ('balance action', ()=> {
    it('creates an action to set balance', () => {
        const balance = 0;
        const expectedAction = {type: constants.SET_BALANCE, balance};
        const action = actions.setBalance(balance);

        expect(action).toEqual(expectedAction);
    });

    it('creates action to deposit to balance', () => {
        const deposit = 10;
        const expectedAction = {type: constants.DEPOSIT, deposit};

        expect(actions.deposit(deposit)).toEqual(expectedAction);
    });

    it('creates action to withdraw from balance', () => {
        const withdraw = 10;
        const expectedAction = {type: constants.WITHDRAW, withdraw};

        expect(actions.withdraw(withdraw)).toEqual(expectedAction);
    })
});