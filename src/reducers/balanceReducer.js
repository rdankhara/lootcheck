import * as constants from '../actions/constants';
import { deposit, withdraw } from '../actions/balance';

const balanceReducer = (state = 0, action) => {
    switch(action.type){
        case constants.SET_BALANCE:
            return action.balance;
        case constants.DEPOSIT:
            return state + action.deposit;
        case constants.WITHDRAW:
            return state - action.withdraw;
        default:
            return state;
    }
};

export default balanceReducer;