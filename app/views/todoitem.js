import React from 'react';
import Todo from './todo';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked : false
        };
        this.onChecked = (event) => this._onChecked(event);
    }
    _onChecked(event) {
        this.setState ({
            isChecked: !this.state.isChecked
        });
    }
    render() {
        return (
            <div class={this.state.isChecked ? "strike": ""}>
            <input type="checkbox" checked={this.state.isChecked} onChange={this.onChecked} name={this.props.value} value={this.props.value}/>
            <label>{this.props.value}</label>
            </div>
        )
    }
}
TodoItem.defaultProps ={
    value:""
};
export default TodoItem;