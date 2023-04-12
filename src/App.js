import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [
        {
          name: 'Christopher',
          id: '1'
        },
        {
          name: 'Felix',
          id: '2'
        },
        {
          name: 'Hyunjin',
          id: '3'
        },
        {
          name: 'Changbin',
          id: '4'
        },
        {
          name: 'Minho',
          id: '5'
        },
        {
          name: 'Jeongin',
          id: '6'
        },
      ]
    };
  }

  render(){
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;
