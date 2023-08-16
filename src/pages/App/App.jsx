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

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} />
          <Routes>
            <Route path='/' element={<MoviesListPage />}></Route>
            <Route path='/movies/:movieName' element={<MovieDetailPage />}></Route>
            <Route path='/actors' element={<ActorListPage />}></Route>
          </Routes>
        </>
        :
        <LoginPage signup={signup} />
      }
    </main>
  );
}

