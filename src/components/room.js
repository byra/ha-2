// Libraries
import React, {Component} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

// Modules
import {status, adult, children} from '../action';

class Room extends Component {
    constructor(props){
        super(props);
    }

    changeRoom = () => {
        const {status, data} = this.props;
        status(data);
    };

    changeAdult = (event) => {
        const {adult,data} = this.props;
        data.adults = parseInt(event.target.value);
        adult(data);
    };

    changeChildren = (event) => {
        const {children, data} = this.props;
        data.children = parseInt(event.target.value);
        children(data);
    };

    render() {
        const {data} = this.props;
        const roomLayout = `roomLayout ${data.disabled ? 'roomLayoutInActive': ''}`;
        const roomHeader = `${data.disabled ? 'roomHeaderInActive': 'roomHeader'}`;
        return (
            <div className={roomLayout}>
                <div className={roomHeader}>
                    {data.room === 'Room 1' ? null : (
                        <input type="checkbox" name="room"  onChange={this.changeRoom} defaultChecked={!data.disabled}
                               className='headerCheckBox'/>)}
                    <header>{data.room}</header>
                </div>
                <div className='roomBody'>
                    <div className='roomBodyContent'>
                        <div>
                            Adults
                        </div>
                        <div>
                            (18+)
                        </div>
                        <select className='roomInfo' disabled={data.disabled}
                                onChange={this.changeAdult} value={data.adults}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                        </select>
                    </div>
                    <div className='roomBodyContent'>
                        <div>
                            Children
                        </div>
                        <div>
                            (0-17)
                        </div>
                        <select className='roomInfo' disabled={data.disabled}
                                onChange={this.changeChildren} value={data.children}>
                            <option value={0}>0</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                        </select>
                    </div>
                </div>
                <style jsx>{`

            .roomLayout {
                display: flex;
                flex-direction: column;
                width: 175px;
                margin: 10px;
                border: 3px solid #DDD;
                border-radius: 5px;
            }

            .roomLayoutInActive {
                background-color: #EEE;
            }

            .roomHeader {
                display: flex;
                background-color: #DDD;
                padding: 5px;
            }

            .roomHeaderInActive {
                display: flex;
                padding: 5px;
            }

            .headerCheckBox{
                background-color: #FFF;
            }

            .roomBody {
                display: flex;
                justify-content: center;
            }

            .roomBodyContent {
                display:flex;
                flex-direction: column;
                margin: 10px;
                padding: 5px;
            }

            .roomInfo {
                margin: 7px 0px;
            }

            `}</style>
           </div>
        )
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({status, adult, children}, dispatch);

export default connect(
    null,
    mapDispatchToProps
)(Room);
