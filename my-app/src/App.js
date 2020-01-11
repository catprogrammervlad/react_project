import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    Persons: [
      {
        code: 'ff44g43',
        name: 'rick',
        surname: 'vilson',
        residence: 'new-york',
        rank: 'sergeant'
      },
      {
        code: 'ff44g43',
        name: 'rick',
        surname: 'vilson',
        residence: 'new-york',
        rank: 'sergeant'
      },
      {
        code: 'ff44g43',
        name: 'rick',
        surname: 'vilson',
        residence: 'new-york',
        rank: 'sergeant'
      },
      {
        code: 'ff44g43',
        name: 'rick',
        surname: 'vilson',
        residence: 'new-york',
        rank: 'sergeant'
      },
      {
        code: 'ff44g43',
        name: 'rick',
        surname: 'vilson',
        residence: 'new-york',
        rank: 'sergeant'
      },
      {
        code: 'ff44g43',
        name: 'rick',
        surname: 'vilson',
        residence: 'new-york',
        rank: 'sergeant'
      },
      {
        code: 'ff44g43',
        name: 'rick',
        surname: 'vilson',
        residence: 'new-york',
        rank: 'sergeant'
      },
      {
        code: 'ff44g43',
        name: 'rick',
        surname: 'vilson',
        residence: 'new-york',
        rank: 'sergeant'
      }
    ]
  }
  render() {
    return (
      <div>
        <Person
          code={this.state.Persons[0].code}
          name={this.state.Persons[0].name}
          surname={this.state.Persons[0].surname}
          residence={this.state.Persons[0].residence}
          rank={this.state.Persons[0].rank}></Person>
        <Person
          code={this.state.Persons[0].code}
          name={this.state.Persons[0].name}
          surname={this.state.Persons[0].surname}
          residence={this.state.Persons[0].residence}
          rank={this.state.Persons[0].rank}></Person>

        <Person
          code={this.state.Persons[0].code}
          name={this.state.Persons[0].name}
          surname={this.state.Persons[0].surname}
          residence={this.state.Persons[0].residence}
          rank={this.state.Persons[0].rank}></Person>

        <Person
          code={this.state.Persons[0].code}
          name={this.state.Persons[0].name}
          surname={this.state.Persons[0].surname}
          residence={this.state.Persons[0].residence}
          rank={this.state.Persons[0].rank}></Person>
      </div>
    )
  }
}

export default App
