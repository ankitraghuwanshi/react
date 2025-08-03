import React from 'react'

class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            newTodo: ''
        };
        console.log('Constructor: Setting up initial state and bindings.');
    }

    // useEffect with an empty dependency array
    componentDidMount() {
        console.log("CDM: Calling it from did mount")

        setTimeout(() => {
            this.setState({
              todos: ['Learn React', 'Read a book']
            });
        }, 1000);
    }

    // useEffect with no dependency
    // Any time there is any change in props/state this gets triggered
    componentDidUpdate(prevProps, prevState) { 
        if( prevState.newTodo !== this.state.newTodo) {
            console.log("The value of new todo has changed")
        }
        console.log("CDU: Calling it when there is an update")
    }

    //only run at unmounting
    componentWillUnmount() {
        console.log("CDUM: Component is going  to unmount")
    }

    handleInputChange = (event) => {
        this.setState({ newTodo: event.target.value })
    }

    handleAddTodo = () => {
        this.setState((prevState) => ({
            todos: [...prevState.todos, prevState.newTodo],
            newTodo: ''
        }))
    }

    render() {
        console.log('Render: Rendering the to-do list.');

        return (
            <div>
                <h1>My To-Do List</h1>
                <ul>
                    {this.state.todos.map((todo, index) => (
                        <li key={index}>{todo}</li>
                    ))}
                </ul>
                <input
                    type="text"
                    value={this.state.newTodo}
                    onChange={this.handleInputChange}
                />
                <button onClick={this.handleAddTodo}>Add To-Do</button>
            </div>
        );
    }
}

export default TodoList