import React from 'react';
import './App.css';
import TableComponent from './components/TableComponent.js'
import Fab from '@material-ui/core/Fab';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      toDoList: [],
      allToDos: [],
      count: 10
    }

  }

  async componentDidMount() {

    let listForToDo = await fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => { return json })

    this.setState({ toDoList: listForToDo.slice(0, 10), allToDos: listForToDo })
  }

  addNew() {

    this.setState({ toDoList: [...this.state.toDoList, this.state.allToDos.slice(this.state.count, this.state.count + 1)[0]], count: this.state.count + 1 })
  }

  render() {


    return (
      <div className='MainDiv'>

        <h1 className='H1'>Demo App</h1>

        <div onClick={() => this.addNew()} style={{ paddingRight: '5%', marginBottom: '1%', float: 'right' }}>
          <Fab color="secondary" aria-label="add">
            Add
        </Fab>
        </div>

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
