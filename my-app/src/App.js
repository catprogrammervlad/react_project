import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {
        code: 'ff44g43',
        name: 'rick',
        surname: 'vilson',
        residence: 'new-york',
        rank: 'sergeant'
      },
      {
        code: 'ag55j32',
        name: 'Gaybos',
        surname: 'Stashon',
        residence: 'Florida',
        rank: 'marshal'
      }
    ]
  }

  ChangeTheme = () => {
    this.setState({
      persons: [
        {
          code: 'ff4',
          name: this.state.persons[0].name,
          surname: this.state.persons[0].surname,
          residence: this.state.persons[0].residence,
          rank: this.state.persons[0].rank
        },
        {
          code: 'ag5',
          name: this.state.persons[1].name,
          surname: this.state.persons[1].surname,
          residence: this.state.persons[1].residence,
          rank: this.state.persons[1].rank
        }
      ]
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.ChangeTheme}>Short code</button>
        <Person
          code={this.state.persons[0].code}
          name={this.state.persons[0].name}
          surname={this.state.persons[0].surname}
          residence={this.state.persons[0].residence}
          rank={this.state.persons[0].rank}></Person>

        <Person
          code={this.state.persons[1].code}
          name={this.state.persons[1].name}
          surname={this.state.persons[1].surname}
          residence={this.state.persons[1].residence}
          rank={this.state.persons[1].rank}></Person>
      </div>
    )
  }
}

export default App
