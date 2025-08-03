// 1 . In all components, fetch the data in ComponentDidMount
// 2: An utility/higher order Component that fetches the data and provides the component with the data
import React from 'react'

const withTodos = (WrappedComponent) => {
    return class NewComponent extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                todos: []
            }
        }

        componentDidMount() {
            //MAke the api Call
            this.setState({
                todos: ["New Todo"]
            })
        }

        render() {
            return (
                <WrappedComponent todos={this.state.todos} />
            )
        }
    }
}

// class TodoList extends React.Component {
//     ..React........
// }
// export default withTodos(TodoList)


//for React functional component we don't use HOC(higher order component)
// we use hook and custom hook