import {startData} from './data';

export const getState = () =>{
    try{
        const serializedState = localStorage.getItem('state');
        if(serializedState === null){
            return startData
        }
        return JSON.parse(serializedState);

    } catch (error) {
        return startData;
    }
};

export const setState = (state) =>{
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
        return true;

    } catch (error) {
        localStorage.setItem('state', null);
        return false;
    }
};
