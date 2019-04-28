import * as actions from '../src/action/index';
import * as data from '../src/config/data';
import {actionTypes} from '../src/config/types';



describe('actions', () => {
    it('should create an action to start rooms', () => {
        const expectedAction = {
            type: actionTypes.START,
            payload:data.startData
        };
        console.log(actions.start(data.startData), expectedAction);
        expect(actions.start(data.startData)).toEqual(expectedAction);
    });

    it('should create an action to save rooms', () => {
        const expectedAction = {
            type: actionTypes.SAVE
        };
        console.log(actions.save(), expectedAction);
        expect(actions.save()).toEqual(expectedAction);
    });

    it('should create an action to update the adults', () => {
        const expectedAction = {
            type: actionTypes.PEOPLE,
            payload:data.adultData
        };
        console.log(actions.adult(data.adultData), expectedAction);
        expect(actions.adult(data.adultData)).toEqual(expectedAction);
    });

    it('should create an action to update the children', () => {
        const expectedAction = {
            type: actionTypes.PEOPLE,
            payload:data.childernData
        };
        console.log(actions.children(data.childernData), expectedAction);
        expect(actions.children(data.childernData)).toEqual(expectedAction);
    });

    it('should create an action to update rooms', () => {
        const expectedAction = {
            type: actionTypes.STATUS,
            payload:data.statusData
        };
        console.log(actions.status(data.statusData), expectedAction);
        expect(actions.status(data.statusData)).toEqual(expectedAction);
    });
});
