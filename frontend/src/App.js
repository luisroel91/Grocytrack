import React from 'react';
import { connect } from "react-redux";

import Page from './containers/Page';
import HeaderLogo from './components/HeaderLogo';
import IntroParagraph from './components/Intro';
import SignUpForm from './components/SignUpForm';

import { } from "./actions/simpleAction";

import './App.scss';

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction())
});

class App extends React.Component {

    render() {
        return (
            <HeaderLogo>
                <Page currentText={<div><IntroParagraph /><SignUpForm /></div>}>
                </Page>
            </HeaderLogo>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
