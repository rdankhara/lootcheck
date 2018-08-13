import React, {Component} from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Wallet} from './wallet';

configure({adapter: new Adapter()});

describe("Wallet", ()=> {
    const mockDeposit = jest.fn();
    const props = {balance : 20, deposit: mockDeposit};
    const wallet = shallow(<Wallet {...props} />);

    it('renders correctly', ()=> {
        expect(wallet).toMatchSnapshot();
    });

    it('displays balance from props', ()=> {
        expect(wallet.find('.balance').text()).toEqual('Wallet balance: 20');
    });

    it('creates an input to deposit into or withdraw from balance', ()=> {
        expect(wallet.find('.input-wallet').exists()).toBe(true);
    })

    describe('when the user types into the wallet input', ()=>{
        const userBalance = '25';

        beforeEach(() => {
            wallet.find('.input-wallet').simulate('change', {target: {value: userBalance}});
        });

        it('updates the local balance in `state` and convertes it to number',()=>{
            expect(wallet.state().balance).toEqual(parseInt(userBalance, 10));
        });

        describe('and the user wants to make a deposit', ()=> {
            beforeEach(() => wallet.find('.btn-deposit').simulate('click'));

            it('despatches the `deposit()` it receives from props with local balance', ()=> {
                expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance, 10));
            })
        });
    });
});