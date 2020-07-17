import React, {useContext} from 'react';
import { MovieContext } from "../context/MovieContext"

function Nav(props) {
    const [movies,SetMovies] = useContext(MovieContext)
    return (
        <div>
            Number of movies:{movies.length}
        </div>
    );
}

export default Nav;