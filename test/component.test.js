import React from 'react'
import { shallow } from 'enzyme';

import {Index} from '../pages/index.js';
import {Room} from '../src/components/room';
import * as actions from '../src/action/index';
import * as data from '../src/config/data';

describe('component', () => {

    it('renders all the rooms', () => {
        const props = {
            start: actions.start,
            save: actions.save,
            hotel: data.startData
        };
        const wrapper = shallow(<Index {...props}/>);
        expect(wrapper.hasClass('layout')).toBe(true);
    });

    it('renders a room', () => {
        const props = {
            status: actions.status,
            adult: actions.adult,
            children: actions.children,
            data: data.childrenData
        };
        const wrapper = shallow(<Room {...props}/>);
        expect(wrapper.hasClass('roomLayout')).toBe(true);
    })
});
