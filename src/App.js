import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
  {
    id: 1,
    image: 'https://placeimg.com/64/64/1',
    name: 'dreamer',
    birthday: '860904',
    gender: 'man',
    job: 'dev'
  },
  {
    id: 2,
    image: 'https://placeimg.com/64/64/2',
    name: 'apple',
    birthday: '860904',
    gender: 'man',
    job: 'dev'
  },
  {
    id: 3,
    image: 'https://placeimg.com/64/64/3',
    name: 'orange',
    birthday: '860904',
    gender: 'man',
    job: 'dev'
  }
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              ></Customer>
            );
          })
        }
      </div>
    );
  }
}

export default App;
