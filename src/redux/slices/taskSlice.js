import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit"
import axios from 'axios'


export const CreateTask = createAsyncThunk('/newtask', async (data, { rejectWithValue, dispatch }) => {
    try {
        const res = await axios.post("https://backend-taskmangement.onrender.com/api/task/post", data, {
            headers: {
                token: localStorage.getItem('token')
            }
        })
        dispatch(GetTasks())
        return res.data
    } catch (error) {
        console.log(error)
        return rejectWithValue(error.response.data.msg)
    }
})


export const DeleteTask = createAsyncThunk('/delete', async (data, { rejectWithValue, dispatch }) => {
    try {
        const res = await axios.delete(`https://backend-taskmangement.onrender.com/api/task/delete/${data}`, {
            headers: {
                token: localStorage.getItem('token')
            }
        })
        dispatch(GetTasks())
        return res.data
    } catch (error) {
        console.log(error)
        return rejectWithValue(error.response.data.msg)
    }
})
export const GetTasks = createAsyncThunk('/GetAllTasks', async (data, { rejectWithValue }) => {
    try {
        const res = await axios.get("https://backend-taskmangement.onrender.com/api/task/get", {
            headers: {
                token: localStorage.getItem('token')
            }
        })
        return res.data
    } catch (error) {
        console.log(error)
        return rejectWithValue(error.response.data.msg)
    }
})


const taskSlice = createSlice({
    name: "tasks",
    initialState: {
        taskData: [],
        error: null,
        loading: false
    },
    extraReducers: (builder) => {
        builder.addCase(CreateTask.pending, (state) => {
            state.loading = true
        })
        
    
                .addCase(CreateTask.fulfilled, (state, action) => {
            state.loading = false
            state.error = null
        })
                .addCase(CreateTask.rejected, (state, action) => {
                    state.loading = false
                    state.error = action.payload
                })
    
    
                .addCase(GetTasks.pending, (state) => {
                    state.loading = true
                })
                .addCase(GetTasks.fulfilled, (state, action) => {
                    state.loading = false
                    state.taskData = action.payload.Tasks
                })
                .addCase(GetTasks.rejected, (state, action) => {
                    state.loading = false
                    state.error = action.payload
                })
    }
})

export default taskSlice.reducer