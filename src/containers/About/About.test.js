import React from 'react';
import About from './About';
import { shallow } from 'enzyme';

describe('About', () => {
    it('should match a snapshot as expected', () => {
        const wrapper = shallow(<About />)
        
        expect(wrapper).toMatchSnapshot()
    })
})
