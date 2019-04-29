import * as actions from '../src/action/index';
import * as data from '../src/config/data';
import {actionTypes} from '../src/config/types';



describe('actions', () => {
    it('should create an action to start rooms', () => {
        const expectedAction = {
            type: actionTypes.START,
            payload:data.startData
        };
        expect(actions.start(data.startData)).toEqual(expectedAction);
    });

    it('should create an action to save rooms', () => {
        const expectedAction = {
            type: actionTypes.SAVE
        };
        expect(actions.save()).toEqual(expectedAction);
    });

    it('should create an action to update the adults', () => {
        const expectedAction = {
            type: actionTypes.PEOPLE,
            payload:data.adultData
        };
        expect(actions.adult(data.adultData)).toEqual(expectedAction);
    });

    it('should create an action to update the children', () => {
        const expectedAction = {
            type: actionTypes.PEOPLE,
            payload:data.childernData
        };
        expect(actions.children(data.childernData)).toEqual(expectedAction);
    });

    it('should create an action to active rooms', () => {
        const expectedAction = {
            type: actionTypes.STATUS,
            payload:data.statusActiveData
        };
        expect(actions.status(data.statusActiveData)).toEqual(expectedAction);
    });

    it('should create an action to disable rooms', () => {
        const expectedAction = {
            type: actionTypes.STATUS,
            payload:data.statusDisableData
        };
        expect(actions.status(data.statusDisableData)).toEqual(expectedAction);
    });
});
