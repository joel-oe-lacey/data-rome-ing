import React, { Component }  from 'react';
import './About.scss';
import { Link } from 'react-router-dom';
import { introText, stateMap } from '../../utils/referenceData';
import { loadRegion } from '../../actions';
import { connect } from 'react-redux';

export class About extends Component {
    constructor() {
        super();
        this.state = {
            region: 'Alabama'
        }
    }

    chooseState = e => {
        this.setState({ region: e.target.value });   
    }

    render() {
        const stateSelectOptions = Object.keys(stateMap).map((state, i) => {
            return (
                <option key={i} value={`${state}`}>{`${state}`}</option> 
            )
        })

        const introDisplay = introText.map((paragraph,i) => <p key={i}>{`${paragraph}`}</p>)
        return (
            <section className="introduction">
                <section className="intro-center">
                    <h1>
                        The American Portrait
                    </h1>
                    <article className="intro-text">
                        {introDisplay}
                    </article>
                    <select 
                        name="state" 
                        onChange={this.chooseState}
                        className="intro-selection"
                        defaultValue="">
                        <option value="" disabled>Please choose a state.</option>
                        {stateSelectOptions}
                    </select>
                    <Link 
                        to="/region"
                        className="intro-link"
                        onClick={() => this.props.loadRegionToStore(this.state.region)}
                    >Continue</Link>
                </section>
            </section>
        )
    }
}

export const mapDispatchToProps = dispatch => ({
    loadRegionToStore: (region) => { dispatch(loadRegion(region)) },
});

export default connect(null, mapDispatchToProps)(About)