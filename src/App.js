import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import STORE from './STORE';
import List from './List'

class App extends Component {
  state = {
    store: STORE
  }

  handleAdd = (idList) => {
    const newCard = newRandomCard()
    const newList = this.state.store.lists.map(list => {
      if(idList === list.id) {
        return { 
          ...list,
          cardIds: [...list.cardIds, newCard.id]
        };
      }
      return list;  
    })

    this.setState({
      store: {
        lists: newList,
        allCards: {
          ...this.state.store.allCards,
          [newCard.id]: newCard
        }
      }
    })
  }

  handleDelete = (id) => {
    const lists = this.state.store.lists
    const cards = this.state.store.allCards
    const changedList = lists.map(list => ({
      ...list,
      cardIds: list.cardIds.filter(cardId => cardId !== id)
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
              handleAdd={this.handleAdd}
            />

          ))}
        </div>
      </main>
    );
  }
};

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
      key === keyToOmit ? newObj : { ...newObj, [key]: value },
    {}
  );
}
export default App;
