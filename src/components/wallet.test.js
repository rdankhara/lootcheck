import React, {Component} from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Wallet} from './wallet';

configure({adapter: new Adapter()});

describe("Wallet", ()=> {

    const props = {balance : 20};
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
});