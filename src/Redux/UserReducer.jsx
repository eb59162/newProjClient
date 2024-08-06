import React from "react";
import { createSlice } from '@reduxjs/toolkit'
import UsePut from "../Hooks/Put";
import UsePost from '../Hooks/Post'
import UseDelete from "../Hooks/Delete";
import UseGet from "../Hooks/Get";
const initValUser = {
    ArrayUser: []
}
console.log("arr:", initValUser.ArrayUser);
const UserSlice = createSlice({
    name: "managerUser",
    initialState: initValUser,
    reducers: {
        update: (state, actions) => {
           console.log("update", actions.payload.item);
           console.log(" email to update", actions.payload.email);
            const put = UsePut();
            put(`http://localhost:8000/users${actions.payload.email}`, actions.payload.item)

        //   const p=  put("http://localhost:8000/users" + actions.payload.item)
                    // state.ArrayUser = p;

        },
        Add: (state, actions) => {
            const post = UsePost()
            post("http://localhost:8000/users", actions.payload.item)
        },
        Delete: (state, actions) => {
            const deleteItem = UseDelete()

            deleteItem("http://localhost:8000/users/" + actions.payload.email)
        },
        Get: (state) => {
            const [get, data] = UseGet()
            get('http://localhost:8000/users')
            console.log("data",data);
            state.ArrayUser = data;
        }
    }
})
export const { update, Delete, Add, Get } = UserSlice.actions
export default UserSlice.reducer