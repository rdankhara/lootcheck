import balanceReducer from './balanceReducer';
import * as constants from '../actions/constants';

describe('balance reducer', ()=> {
    it('sets balance', () => {
        const balance = 10;

        expect(balanceReducer(undefined, {type: constants.SET_BALANCE, balance})).toEqual(balance);
    });

    it('deposits into the balance', ()=> {
        const deposit = 10;
        const initialState = 5;

        expect(balanceReducer(initialState, {type: constants.DEPOSIT, deposit})).toEqual(initialState + deposit);
    })

    it('withdraws from the balance', ()=> {
        const initialState = 20;
        const withdraw = 10;

        expect(balanceReducer(initialState, {type: constants.WITHDRAW, withdraw}))
            .toEqual(initialState - withdraw);
    });
});