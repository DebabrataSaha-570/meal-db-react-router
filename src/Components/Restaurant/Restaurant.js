import React from 'react';
import './Restaurant.css'
import { FormControl, InputGroup, Button, Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import Meal from '../Meal/Meal';

const Restaurant = () => {
    const [search, SetSearchText] = useState('')
    const [meals, setMeals] = useState([])

    // const handleSearchField = () => {
    //     const searchTextValue = document.getElementById('inputField')
    //     console.log('clicked', searchTextValue)


    // }

    const handleSearchField = (event) => {
        const searchTextValue = event.target.value;
        SetSearchText(searchTextValue)

    }
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMeals(data.meals)
            })
            .catch(err => console.log(err))
    }, [search])
    return (
        <>
            <Container>
                <nav>
                    <InputGroup onChange={handleSearchField} id="inputField" className="my-3 w-50 mx-auto">
                        <FormControl
                            placeholder="Search meals here"
                            aria-label="Search meals here"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="primary" id="button-addon2">
                            Search
                        </Button>
                        {/* <Button onClick={handleSearchField} variant="primary" id="button-addon2">
                            Search
                        </Button> */}
                    </InputGroup>
                </nav>

                <main>
                    <section>

                        {
                            meals.length === 0 ?
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                                :
                                <Row xs={1} md={4} className="g-4">

                                    {
                                        meals.map(meal => <Meal meal={meal} key={meal.idMeal}></Meal>)
                                    }

                                </Row>

                        }

                    </section>
                </main>
            </Container>
        </>
    );
};

export default Restaurant;