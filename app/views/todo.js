import React from 'react';
import TodoItem from './todoitem';
class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listItems: ['Sample'],
            newItem:""
        };
        this.addtodo = (event) => this._addtodo(event);
        this.newItemChange = (event) => this._newItemChange(event);
    }
    _newItemChange(event) {
        this.setState({
            newItem: event.target.value
        });
    }
    _addtodo(event) {
        console.log(event);
        this.setState(
            {
                listItems: [...this.state.listItems, this.state.newItem],
                newItem: ""
            }
        );
    }
    render() {
        var listDisplay = [];
        this.state.listItems.map(val => {
            listDisplay.push(<TodoItem value={val} />);
        });
        return(
            <div>
                {listDisplay} 
                <input type="text" name="additem" id="additem" value={this.state.newItem} onChange={this.newItemChange} />
                <button onClick={this.addtodo}> Add</button>
           </div>
        );
    }
}

export default Todo;