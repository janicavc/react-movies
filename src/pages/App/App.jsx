import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { movies } from '../../data.js';
import './App.css';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import LoginPage from '../LoginPage/LoginPage';
import ActorListPage from '../ActorListPage/ActorListPage';
import NavBar from '../../components/NavBar/NavBar.jsx';

export default function App() {
  const [user, setUser] = useState(null);

  function handleSignUp(name){
    setUser(name)
  }

  return (
    <main className="App">
      <h1>React Movies</h1>
      { user ?
        <>
          <NavBar user={user} />
          <Routes>
            <Route path='/' element={<MoviesListPage movies={movies} />} />
            <Route path='/movies/:movieName' element={<MovieDetailPage movies={movies} />} />
            <Route path='/actors' element={<ActorListPage movies={movies} />} />
          </Routes>
        </>
        :
        <LoginPage handleSignUp={handleSignUp} />
      }
    </main>
  );
}

