import {createSlice} from '@reduxjs/toolkit'

const initialState = [
    {id: '1', title: 'title1', content: "Content1"}
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
})

export default postSlice.reducer