import React from 'react';
import './App.css';
import TableComponent from './components/TableComponent.js'


class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      toDoList: [],
    }

  }

  async componentDidMount() {

    let listForToDo = await fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => { return json })

    this.setState({ toDoList: listForToDo.slice(0, 10) })
  }


  render() {


    return (
      <div className='MainDiv'>

        <h1 className='H1'>Demo App</h1>

        {this.state.toDoList.length !== 0 ?

          <TableComponent toDoList={this.state.toDoList} />

          :

          <h3 className='Loading'>Loading...</h3>
        }

      </div>
    )
  }
}

export default App;
