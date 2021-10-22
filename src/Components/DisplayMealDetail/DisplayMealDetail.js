import React from 'react';
import { Card, Button, Container, Table } from 'react-bootstrap';

const DisplayMealDetail = (props) => {
    const { strMeal, strMealThumb, strInstructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strYoutube } = props.meal
    return (
        <>
            <Container>
                <Card className=" w-50 mx-auto my-5">
                    <Card.Header className="text-center"> <h3>{strMeal}</h3> </Card.Header>
                    <Card.Img className="w-75 mx-auto" variant="top" src={strMealThumb} />
                    <Card.Body>
                        <Card.Text >
                            <span >Recepie: {strInstructions}</span>
                            <br />
                            <Table bordered >
                                <thead>
                                    <tr>
                                        <th>Ingredients</th>
                                        <th>Measurement</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>

                                        <td>{strIngredient1}</td>
                                        <td>{strMeasure1}</td>
                                    </tr>
                                    <tr>
                                        <td>{strIngredient2}</td>
                                        <td>{strMeasure2}</td>
                                    </tr>
                                    <tr>
                                        <td>{strIngredient3}</td>
                                        <td>{strMeasure3}</td>
                                    </tr>
                                    <tr>
                                        <td>{strIngredient4}</td>
                                        <td>{strMeasure4}</td>
                                    </tr>
                                    <tr>
                                        <td>{strIngredient5}</td>
                                        <td>{strMeasure5}</td>
                                    </tr>
                                    <tr>
                                        <td>{strIngredient6}</td>
                                        <td>{strMeasure6}</td>
                                    </tr>
                                    <tr>
                                        <td>{strIngredient7}</td>
                                        <td>{strMeasure7}</td>
                                    </tr>
                                    <tr>
                                        <td>{strIngredient8}</td>
                                        <td>{strMeasure8}</td>
                                    </tr>
                                    <tr>
                                        <td>{strIngredient9}</td>
                                        <td>{strMeasure9}</td>
                                    </tr>

                                </tbody>
                            </Table>
                            <a href={strYoutube}>Video Tutorial </a>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};

export default DisplayMealDetail;