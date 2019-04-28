// Libraries
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

// Modules
import {start, save} from '../src/action';
import Room from '../src/components/room';
import {getState} from "../src/config";


class Index extends Component {
    constructor(props){
        super(props);
    }

    saveRoom = () => {
        const {save} = this.props;
        save();
    };

    componentDidMount() {
        const {start} = this.props;
        start(getState());
    }

    render() {
        const {hotel} = this.props;
         return (
            <div className='layout'>
                <div className='pageLayout'>
                    {hotel.length !== 0 ? hotel.map((room) => <Room key={JSON.stringify(room)} data={room} />): null}
                </div>

                <input type="submit" value="Submit" className='submitLayout' onClick={this.saveRoom}/>
                <style jsx>{`

                    .layout {
                        display: flex;
                        flex-direction: column;
                        align-items: start;
                    }

                    .pageLayout {
                        display: flex;
                        flex-wrap: wrap;
                     }

                     .submitLayout {
                        margin: 10px;
                     }
                `}</style>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        hotel: state
    }
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({start, save}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index);
