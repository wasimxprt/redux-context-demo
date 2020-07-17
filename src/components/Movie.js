import React from 'react';

function Movie(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.price}</p>
        </div>
    );
}

export default Movie;