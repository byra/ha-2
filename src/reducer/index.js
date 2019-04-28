// Libraries
import {actionTypes} from "../config/types";
import {setState} from "../config";

export const reducer = (state = [], action) => {

    let temp;

    switch (action.type) {
        case actionTypes.START:
            temp = Object.assign([], action.payload);
            return temp;

        case actionTypes.SAVE:
            temp = Object.assign([], state);
            setState(temp);
            return temp;

        case actionTypes.STATUS:
            temp = Object.assign([], state);
            let count = action.payload.id;
            let active = temp[action.payload.id -1].disabled;
            while( count > 1 && active){
                temp[count-1].adults = 1;
                temp[count-1].children = 0;
                temp[count-1].disabled = !active;
                count = count -1;
            }
            while(count <= 4  && !active){
                temp[count-1].adults = 1;
                temp[count-1].children = 0;
                temp[count-1].disabled = !active;
                count = count + 1;
            }
            return temp;

        case actionTypes.PEOPLE:
            temp = Object.assign([], state);
            temp[action.payload.id -1] = action.payload;
            return temp;

        default:
            return state;
    }
};
