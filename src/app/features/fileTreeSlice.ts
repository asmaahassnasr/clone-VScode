import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IFile } from "../../interfaces";

interface IClickedFiles{
    fileName:string;
    fileContent:string | undefined;
}

interface IInitialState{
    activeTabId: string | null;
    opendFiles:IFile[],
    clickedFiles: IClickedFiles
}

const initialState:IInitialState = {
    activeTabId:"",
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
    setOpendFilesAction: (state,action:PayloadAction<IFile[]>) =>{
        state.opendFiles = action.payload
    },
    setClickeFilesAction : (state, action:PayloadAction<IClickedFiles>) => {
        state.clickedFiles = action.payload;
    },
    setActiveTabIdAction : (state, action:PayloadAction<string>) => {
        state.activeTabId = action.payload;
    }
  }
});

export const {setOpendFilesAction , setClickeFilesAction, setActiveTabIdAction} = fileTreeSlice.actions

export default fileTreeSlice.reducer;