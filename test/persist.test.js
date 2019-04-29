import {getState, setState} from '../src/config/persist';
import * as data from '../src/config/data';

describe('persist', () => {
    it('should get persist data', () =>{
        expect(getState()).toEqual(data.startData);
    });

    it('should save persist data', () => {
        expect(setState(data.startData)).toBe(true);
    });

});
