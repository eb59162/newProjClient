import React from "react";
import { createSlice } from '@reduxjs/toolkit'
import UsePut from "../Hooks/Put";
import UsePost from '../Hooks/Post'
import UseDelete from "../Hooks/Delete";
import UseGet from "../Hooks/Get";
const initValStory = {
    ArrayStory: []
}
console.log("arr:", initValStory.ArrayStory);
const StorySlice = createSlice({
    name: "managerStory",
    initialState: initValStory,
    reducers: {
        update: (state, actions) => {
            console.log("update");
            const put = UsePut();
            put("http://localhost:8000/stories" + actions.payload.item)
        },
        Add: (state, actions) => {
            console.log("Add", state.ArrayStory);
            console.log("item", actions.payload.item);
            const post = UsePost()
            post("http://localhost:8000/stories", actions.payload.item)
            console.log(" after", state.ArrayStory);
        },
        Delete: (state, actions) => {
            console.log("arr", state.ArrayStory);
            const deleteItem = UseDelete()
            deleteItem("http://localhost:8000/stories/" + actions.payload.email)
            console.log(actions.payload.email, "email");
            console.log("arr after delete", state.ArrayStory);
        },
        Get: (state) => {
            const [get, data] = UseGet()
            get('http://localhost:8000/stories')
            console.log("data", data);
            state.ArrayStory = data;
        }
    }
})
export const { update, Delete, Add, Get } = StorySlice.actions
export default StorySlice.reducer