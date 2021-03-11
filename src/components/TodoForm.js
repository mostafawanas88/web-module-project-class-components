import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            taskName: ''
        }
    }

    handleChanges = e => {
        this.setState({taskName: e.target.value})
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.taskName);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                onChange={this.handleChanges}
                type="text"
                name="taskName" />
            <button>Add Task</button>
            </form>
        )
    }
}

export default TodoForm;