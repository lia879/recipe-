import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ul>
                {ingredients.map(ingredients => (
                    <li>{ingredients.text}</li>

                ))}
            </ul>
            <p> {calories}</p>
                <img className={style.image} src={image} alt='' />
        </div>
                

    );
};
export default Recipe; 
