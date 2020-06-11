import React, { Component } from "react";
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/searchbox/searchbox.component';
import "./App.css";

class App extends Component {
  constructor() {
    super(); // gives us access to lifecycle and render methods
    this.state = {
      monsters: [],
      searchField: ''
    };

    //this.handleChange = this.handleChange.bind(this);
  }

  // one of reacts lifecycle methods brought in via extending to the Component.  Calls this block of code when React places it on the page
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users") // returns a promise
      .then((response) => response.json()) // returns another promise
      .then((users) => this.setState({monsters: users})); // set the monsters array so the users array
  }

  // arrow functions automatically set 'this' to the 'this' which was in the context when it was applied
  // involves lexicalscoping
  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }

  render() {
    const {monsters, searchField} = this.state; // destructuring
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App"> 
      <h1>Monsters Rolodex</h1>
      <SearchBox placeholder="search monsters" handleChange={this.handleChange}/>
      <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
