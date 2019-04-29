import {reducer} from '../src/reducer/index';
import * as data from '../src/config/data';
import {actionTypes} from '../src/config/types';

describe('reducer', () => {

    it('should return the initial state', () => {
        expect(reducer([], {type:actionTypes.START, payload:data.startData})).toEqual(data.startData);
    });

    it('should return the saved state', () => {
        expect(reducer(data.startData, {type:actionTypes.SAVE})).toEqual(data.startData);
    });

    it('should return the updated adult state', () => {
        expect(reducer(data.startData, {type:actionTypes.PEOPLE, payload:data.adultData})).toEqual(data.changedAdultData);
    });

    it('should return the updated children state', () => {
        expect(reducer(data.startData, {type:actionTypes.PEOPLE, payload:data.childrenData})).toEqual(data.changedChildrenData);
    });

    it('should return the updated rooms to active state', () => {
        expect(reducer(data.startData, {type:actionTypes.STATUS, payload:data.statusActiveData})).toEqual(data.changeStatusActiveData);
    });

    it('should return the updated rooms to disable state', () => {
        expect(reducer(data.allActiveStartData, {type:actionTypes.STATUS, payload:data.statusDisableData})).toEqual(data.changeStatusDisactiveData);
    });
});
