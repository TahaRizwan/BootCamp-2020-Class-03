import React from 'react';

function Dinner(props){
    return(
        <div>
            <h1>We are serving Free "{props.firstDishName}"</h1>
            <h1>We are serving Free "{props.secondDishName}"</h1>
        </div>
    );
}

export default Dinner;