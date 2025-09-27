import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IFile } from "../../interfaces";

interface IClickedFiles{
    activeTabId: string | null;
    fileName:string;
    fileContent:string | undefined;
}

interface IInitialState{
    opendFiles:IFile[];
    clickedFiles: IClickedFiles;
    idToBeRemoved:string | null;
}

const initialState:IInitialState = {
    opendFiles: [],
    clickedFiles: {
    activeTabId:"",
        fileName: "",
        fileContent:""
    },
    idToBeRemoved:null
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
    setIdToBeRemovedAction: (state, action:PayloadAction<string>) =>{
        state.idToBeRemoved = action.payload
    }
  }
});

export const {setOpendFilesAction , setClickeFilesAction,setIdToBeRemovedAction} = fileTreeSlice.actions

export default fileTreeSlice.reducer;