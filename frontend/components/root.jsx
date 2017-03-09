import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import { Router, Route, hashHistory } from 'react-router';
import PokemonIndexItem from './pokemon/pokemon_index_item';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={ hashHistory }>
      <Route path="/" component={ PokemonIndexContainer } >
        <Route path="/:pokemonId" component={ PokemonIndexItem } />
      </Route>
    </Router>
  </Provider>
);

export default Root;
