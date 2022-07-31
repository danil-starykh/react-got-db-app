import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMassage';
import {BooksPage, CharacterPage, HousesPage, BooksItem} from '../pages';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './app.css';

export default class App extends Component {

    state = {
        showRandomChar: true,
        error: false
    };

    componentDidCatch() {
        this.setState({
            error : true
        })
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        });
    }

    render() {

        const {showRandomChar, error} = this.state;

        if (error) {
            return <ErrorMessage/>
        }

        let randomChar = showRandomChar ? <RandomChar/> : null;

        return (
            <Router>
                <div className="app"> 
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>
                                {randomChar}
                                <Button 
                                    color="secondary" 
                                    onClick={this.toggleRandomChar}
                                    className='toggle-btn'
                                    >Toggle random character...</Button>
                            </Col>
                        </Row>
                        <Route path='/' exact component={CharacterPage}/>
                        <Route path='/characters' component={CharacterPage}/>
                        <Route path='/houses' component={HousesPage}/>
                        <Route path='/books' exact component={BooksPage}/>
                        <Route path='/books/:id' render={
                            ({match}) => {
                                const {id} = match.params

                                return <BooksItem booksId={id}/>
                            }
                        }/>
                    </Container>
                </div>
            </Router>
        );
    }
};