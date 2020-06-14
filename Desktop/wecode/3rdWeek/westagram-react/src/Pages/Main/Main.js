import React, { Component } from 'react'
import Nav from '../../Components/Nav';
import Container from '../../Components/Container';
import More from '../../Components/More';
import './Main.css';

export default class Main extends Component {
    render() {
        return (
            <>
              <Nav />  
              <More />
              <Container />
            </>
        )
    }
}
