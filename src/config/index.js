export let hotelInitialState = [
    {
        "id": 1,
        "room": "Room 1",
        "disabled": false,
        "adults": 1,
        "children": 0
    },
    {
        "id": 2,
        "room": "Room 2",
        "disabled": true,
        "adults": 1,
        "children": 0

    },
    {
        "id": 3,
        "room": "Room 3",
        "disabled": true,
        "adults": 1,
        "children": 0

    },
    {
        "id": 4,
        "room": "Room 4",
        "disabled": true,
        "adults": 1,
        "children": 0
    }
];

export const getState = () =>{
    try{
        const serializedState = localStorage.getItem('state');
        if(serializedState === null){
            return hotelInitialState
        }
        return JSON.parse(serializedState);

    } catch (error) {
        return hotelInitialState
    }
};

export const setState = (state) =>{
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);

    } catch (error) {
        localStorage.setItem('state', null);
    }
};
