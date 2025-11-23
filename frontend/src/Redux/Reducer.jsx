import { createSlice } from "@reduxjs/toolkit"
import { Status } from "../status/status";
const users = createSlice({
    name: "user",
    initialState: {
        token: "",
        status: Status?.inactive,
        detail: {

        }
    },
    reducers: {
        userInfo: (state, action) => {
            return {
                ...state,
                detail: action.payload
            }
        },
        AddToken: (state, action) => {

            state.token = action.payload;

        },
        userStatus: (state, action) => {
            state.status = action.payload
        }
    }


})
export const { AddToken, userStatus, userInfo } = users.actions;
export default users.reducer;