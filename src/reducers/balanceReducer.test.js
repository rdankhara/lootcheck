import balanceReducer from './balanceReducer';
import * as constants from '../actions/constants';

describe('balance reducer', ()=> {
    it('sets balance', () => {
        const balance = 10;

        expect(balanceReducer(undefined, {type: constants.SET_BALANCE, balance})).toEqual(balance);
    });
});