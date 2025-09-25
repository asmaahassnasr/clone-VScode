import { createSlice } from "@reduxjs/toolkit";
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
  reducers:{}
});

export default fileTreeSlice.reducer;