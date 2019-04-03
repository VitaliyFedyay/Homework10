import React, { Component } from 'react';
import ToDo, { TASK_STATUSES } from './Props';
import Emoji from 'react-emoji-render';

const Container = {
  margin: '0 auto',
  width: '700px',
  heiht: '100%'
}
const Title = {
  margin: '0 auto',
  fontSize: '25px',
  color: '#FFF',
  marginTop: '0px!important',
  marginBottom: '30px'
}

const Input = {
  'margin': '0 auto',
  "backgroundColor": "#fff",
  "border": "solid 1.5px #4D1366",
  "height": "50px",
  "borderRadius": "15px",
  "width": "600px",
  "padding": "0px",
  "color": "black",
  "textIndent": "30px",
  "marginBottom": "20px",
  "outline": "none"
}

const Button = {
  "outline": "none",
  "cursor": "pointer",
  "position": "absolute",
  "fontSize": "20px",
  "height": "50px",
  "width": "50px",
  "borderRadius": "15px",
  "border": "solid 1.5px #4D1366",
  "backgroundColor": "#4D1366",
  "padding": "0px",
  "margin": "0px",
  "color": "#FFF",
  "transition": "all .3s cubic-bezier(.8,.03,.25,1)"
}

export default class ToDoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      list: [''],
      done: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
  }
  componentWillMount() {
    const todo = localStorage.getItem('todo');
    const done = localStorage.getItem('done');
    if (todo !== null) {
      this.setState({ list: JSON.parse(todo) });
    }
    if (done !== null) {
      this.setState({ done: JSON.parse(done) });
    }
  }
  onChange = (event) => {
    this.setState({ task: event.target.value });
  }
  removeTodo(name, type) {
    let array, index;
    switch (type) {
      case TASK_STATUSES.TO_DO: {
        array = this.state.list;
        index = array.indexOf(name);
        array.splice(index, 1);
        this.setState({ list: array });
        localStorage.setItem('todo', JSON.stringify(array));
      } break;
      case TASK_STATUSES.DONE: {
        array = this.state.done;
        index = array.indexOf(name);
        array.splice(index, 1);
        this.setState({ done: array });
        localStorage.setItem('done', JSON.stringify(array));
      } break;
      default: {
        // nothing
      } break;
    }
  }
  completeTodo(name) {
    this.removeTodo(name, TASK_STATUSES.TO_DO);
    var join = this.state.done.slice();
    join.push(name);
    this.setState({ done: join });
    localStorage.setItem('done', JSON.stringify(join));
  }
  handleClick() {
    if (this.state.task !== '') {
      this.setState({
        task: '',
        list: [...this.state.list, this.state.task]
      }, () => {
        localStorage.setItem('todo', JSON.stringify(this.state.list));
        localStorage.setItem('done', JSON.stringify(this.state.done));
      });
    }
  }
  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.handleClick();
    }
  }
  render() {
    return (
      <div style={Container}>
        <h1 style={Title}>My tasks<Emoji text="✍" /></h1>
        <input style={Input} placeholder="Write a new post..." maxLength={200} value={this.state.task} type='text' onKeyPress={this.handleKey} task={this.state.task} onChange={this.onChange} />
        <button style={Button} onClick={this.handleClick}>+</button>
        <ToDo tasks={this.state.list} done={this.state.done} remove={this.removeTodo} complete={this.completeTodo} />
      </div>
    );
  }
}
