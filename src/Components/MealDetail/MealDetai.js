import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import DisplayMealDetail from '../DisplayMealDetail/DisplayMealDetail';

const MealDetai = () => {
    let { id } = useParams();
    const [mealDetail, setMealDetail] = useState([])
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMealDetail(data.meals)

            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            {
                mealDetail.length === 0 ?
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    :
                    mealDetail.map(meal => <DisplayMealDetail meal={meal} key={meal.idMeal}></DisplayMealDetail>)
            }
        </div>
    );
};

export default MealDetai;