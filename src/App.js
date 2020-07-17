import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import allActions from "./actions";
import MovieList from "./components/MovieList";
import Nav from "./components/Nav";
import { MovieProvider } from "./context/MovieContext";

import './App.css';
import AddMovie from './components/AddMovie';

const App = () => {

  const counter = useSelector(state => state.counterReducer)
  const auth = useSelector(state => state.authReducer);

  const dispatch = useDispatch();
  const user = { name: "Wasim" }

  return (
    <div className="App">
      {auth.isLoggedIn === false ? <div>Welcome Guest!</div> : <div>Welcome, {auth.user.name}</div>}
      <h2>Counter: {counter.count}</h2>

      <button type="button" onClick={() => dispatch(allActions.counterActions.increment())}>Increment</button>
      <button type="button" onClick={() => dispatch(allActions.counterActions.decrement())}>Decrement</button>

      <button type="button" onClick={() => dispatch(allActions.userActions.setUser(user))}>Set User</button>
      <button type="button" onClick={() => dispatch(allActions.userActions.logOut())}>Logout</button>

      <MovieProvider>
        <Nav />
        <MovieList />
        <AddMovie />
      </MovieProvider>

    </div>
  );
}

export default App;
