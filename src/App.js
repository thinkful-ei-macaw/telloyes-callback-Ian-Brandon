import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import STORE from './STORE';
import List from './List'

class App extends Component {
  state = {
    store: STORE
  }




  handleDelete = (id) => {
    const lists = this.state.store.lists
    const cards = this.state.store.allCards
    const changedList = lists.map(list => ({
      ...list,
      cardIds: list.cardIds.filter(id => id !== list.cardIds)
    }))

    const changedCards = omit(cards, id)

    this.setState({
      store: {
        lists: changedList,
        allCards: changedCards
      }
    })
  };



  render() {


    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {this.state.store.lists.map(list => (
            <List
              key={list.id}
              id={list.id}
              header={list.header}
              cards={list.cardIds.map(id => this.state.store.allCards[id])}
              handleDelete={this.handleDelete}
              handleAdd={this.addCard}
            />

          ))}
        </div>
      </main>
    );
  }
};

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
      key === keyToOmit ? newObj : { ...newObj, [key]: value },
    {}
  );
}
export default App;
