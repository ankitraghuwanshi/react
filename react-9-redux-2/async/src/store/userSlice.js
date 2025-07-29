import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        loading: true,
        error: null
    },
    reducers: {
        setLoading: (state) => {
            state.error = null
            state.loading = true
        },
        setError: (state) => {
            state.error = true
            state.loading = false
            state.user = null
        },
        setUser: (state, { payload }) => {
            state.user = payload
            state.loading = false
            state.error = false
        },
        notFound: (state) => {
            state.user = null
            state.loading = false
            state.error = true
        }
    }
})

export default userSlice
