import userSlice from "../store/userSlice"

const userActions = userSlice.actions
// I need to fetch the data 
// If data is correct, I need to dispatch

const fetchUserMiddleware = (param) => {
    return async (dispatch) => {
        try {
            // Attempt to make the network request
            dispatch(userActions.setLoading())

            const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${param}`);
            const user = await resp.json();

            dispatch(userActions.setUser(user))

        } catch(err) {
            console.log(err)
            dispatch(userActions.setError())
        }
    }
}

export default fetchUserMiddleware