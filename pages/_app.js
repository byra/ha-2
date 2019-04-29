// Libraries
import React from "react";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import App, {Container} from "next/app";
import withRedux from "next-redux-wrapper";
import {reducer} from "../src/reducer";

const makeStore = () => {
    return createStore(reducer, [], composeWithDevTools(applyMiddleware()));
};

class MyApp extends App {
    render() {
        const {Component, store} = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <Component/>
                </Provider>
            </Container>
        );
    }
}

export default withRedux(makeStore)(MyApp);
