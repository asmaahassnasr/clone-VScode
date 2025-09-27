import { useDispatch, useSelector } from "react-redux";
import type { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import {
  setClickeFilesAction,
  setIdToBeRemovedAction,
  setOpendFilesAction,
} from "../app/features/fileTreeSlice";
import type { RootState } from "../app/store";

interface IProps {
  file: IFile;
}

const OpendFilesBarTab = ({ file }: IProps) => {

  const dispatch = useDispatch();
  const {opendFiles, clickedFiles:{activeTabId} } = useSelector((state: RootState) => state.tree);

  // **** Handlers
  
  const onClickHandler = () => {
    const { id, name, content } = file;
    dispatch(setClickeFilesAction({ fileName: name, fileContent: content,activeTabId:id }));
  };

  const onCloseTab = (selectedId:string)=>{
    const filtered = opendFiles.filter(file => file.id !== selectedId);
    const lastTab = filtered[filtered.length -1];
    if(!lastTab)
    {
    dispatch(setOpendFilesAction([]));
    dispatch(setClickeFilesAction({activeTabId:null, fileContent:"",fileName:""}))
    return;
    }

    const {id,content,name} =  lastTab;
    dispatch(setOpendFilesAction(filtered));
    dispatch(setClickeFilesAction({activeTabId:id, fileContent:content,fileName:name}))

  }

  
  return (
    <div
      className={`max-w-screen-md flex items-center p-2 border-t-3 ${
        file.id === activeTabId ? "border-[#cf6ccf]" : "border-transparent"
      }`}
      onClick={onClickHandler}
      onContextMenu={(e) => {
        e.preventDefault();
        dispatch(setIdToBeRemovedAction(file.id))
      }}
    >
      <RenderFileIcon fileName={file.name} />
      <span className="cursor-pointer duration-300 flex justify-center items-center w-fit mx-2 p-1 rounded-md">
        {file.name}
      </span>

      <span 
      className="cursor-pointer hover:bg-[#64646473] duration-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md"
      onClick={(e) => {
        e.stopPropagation();
        onCloseTab(file.id)
      }}
      >
        <CloseIcon />
      </span>
    </div>
  );
};

export default OpendFilesBarTab;
