
import React from 'react'
import { render } from 'react-testing-library'

import Room from '../pages/index.js'

describe.skip('With React Testing Library', () => {
    it('Shows "Hello world!"', () => {
        const { getByText } = render(<Room />);
        expect(getByText('Hello World!')).not.toBeNull()
    })
});

describe.skip('With React Testing Library Snapshot', () => {
    it('Should match Snapshot', () => {
        const { asFragment } = render(<Room/>);
        expect(asFragment()).toMatchSnapshot()
    })
});
