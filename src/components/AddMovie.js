import React, { useState, useContext } from 'react';
import { MovieContext } from "../context/MovieContext"

const AddMovie = (props) => {

    const [movieName, setMovieName] = useState("");
    const [moviePrice, setMoviePrice] = useState("");
    const [movies, SetMovies] = useContext(MovieContext)

    const addMovie = (e) => {
        e.preventDefault();
        SetMovies(prevMovies => [...prevMovies, { name: movieName, price: moviePrice }]);
    }

    return (
        <div>
            <form >
                <input type="text" name="movieName" value={movieName} onChange={(e) => setMovieName(e.target.value)} />
                <input type="text" name="moviePrice" value={moviePrice} onChange={(e) => setMoviePrice(e.target.value)} />
                <button type="button" onClick={addMovie}>Add Movie</button>
            </form>
        </div>
    );
}

export default AddMovie;