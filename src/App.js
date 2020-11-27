import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages';
import SignInPage from './pages/signin';
import SignUpPage from './pages/signup';
import testPage from './pages/test';
import ArtistsPage from './pages/artists';
import ArtworkInfo from './components/ArtworkInfo';
import { artwork } from './pages/artwork';
import ArtistDetails from './components/ArtistDetails';
import SignupArtist from './components/SignupArtist';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SignInPage} exact />
        <Route path='/signup/' component={SignUpPage} exact />
        <Route path='/signup/Artist' component={SignupArtist} exact/>
        <Route path='/artists' component={ArtistsPage} exact />
        <Route path='/dev' component={testPage} exact />
        <Route path='/artwork' component={artwork} exact />
        <Route path='/artworks/:id' component={ArtworkInfo} exact />
        <Route path='/artists/:id' component={ArtistDetails} exact/>
      </Switch>
    </Router>
  );
}

export default App;
