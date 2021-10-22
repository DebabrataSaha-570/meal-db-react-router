import React from 'react';
import './Meal.css'
import { Card, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
const Meal = (props) => {
    const { strMealThumb, strMeal, idMeal } = props.meal;

    let history = useHistory()

    const handleMealClick = (id) => {
        history.push(`/mealDetail/${id}`)
    }
    return (
        <>
            <Col>

                <Card>
                    <Card.Img variant="top" src={strMealThumb} />
                    <Card.Body className="text-center">
                        <Card.Title>Meal Name: {strMeal}</Card.Title>
                        <Button onClick={() => handleMealClick(idMeal)}>See Details</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default Meal;