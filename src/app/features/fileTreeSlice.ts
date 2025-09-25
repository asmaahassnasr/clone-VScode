import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IFile } from "../../interfaces";

interface IClickedFiles{
    fileName:string;
    fileContent:string;
}

interface IInitialState{
    opendFiles:IFile[],
    clickedFiles: IClickedFiles
}

const initialState:IInitialState = {
    opendFiles: [],
    clickedFiles: {
        fileName: "",
        fileContent:""
    }
}

const fileTreeSlice = createSlice({
  name:"fileTree",
  initialState,
  reducers:{
    setOpendFiles: (state,action:PayloadAction<IFile[]>) =>{
        state.opendFiles = action.payload
    }
  }
});

export const {setOpendFiles} = fileTreeSlice.actions

export default fileTreeSlice.reducer;