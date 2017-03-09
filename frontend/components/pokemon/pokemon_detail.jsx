import React from  'react';

class PokemonDetail extends React.Component {
  constructor({ pokemon }) {
    super(pokemon);
  }

  render() {
    return (
      <section className="pokemon-detail">
        <img src={this.pokemon.image_url} />
        <h3>
          {this.pokemon.name}
        </h3>
        <p>Type: {this.pokemon.type}</p>
        <p>Attack: {this.pokemon.attack}</p>
        <p>Defense: {this.pokemon.defense}</p>
        <p>Moves: {this.pokemon.moves}</p>
        <section className="pokemon-items">
          <h4>Items</h4>
          <p>Pokemon Items</p>
        </section>
      </section>
    );
  }
}

export default PokemonDetail;
