import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const movieList = [{
        name: "Inception",
        price: "$10",
        id: 123
    },
    {
        name: "Jungle Book",
        price: "$10",
        id: 233
    },
    {
        name: "Grudge",
        price: "$10",
        id: 98
    }
    ];

    const [movies, setMovies] = useState(movieList);

    return (
        <MovieContext.Provider value={[movies,setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}