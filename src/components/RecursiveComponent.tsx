import { useState } from "react";
import type { IFile } from "../interfaces";
import RightArrowIcon from "./SVG/RightArrowIcon";
import BottomArrowIcon from "./SVG/BottomArrowIcon";
import RenderFileIcon from "./RenderFileIcon";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import {
  setClickeFilesAction,
  setOpendFilesAction,
} from "../app/features/fileTreeSlice";
import { doesFileObjectExist } from "../utils/functions";

interface IProps {
  fileTree: IFile;
}
const RecursiveComponent = ({ fileTree }: IProps) => {
  const { id, name, isFolder, children, content } = fileTree;
  const [isOPen, setIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { opendFiles } = useSelector((state: RootState) => state.tree);

  // *** Handlers *****
  const toggle = () => setIsOpen((prev) => !prev);

  const onFileClicked = () => {
    const exists = doesFileObjectExist(opendFiles, id);
    dispatch(
      setClickeFilesAction({
        fileName: name,
        fileContent: content,
        activeTabId: id,
      })
    );

    if (exists) return;
    dispatch(setOpendFilesAction([...opendFiles, fileTree]));
  };

  return (
    <div className="ml-2 mb-2 cursor-pointer">
      <div className="flex items-center mb-2">
        {isFolder ? (
          <div className="flex items-center" onClick={toggle}>
            {isOPen ? <BottomArrowIcon /> : <RightArrowIcon />}
            <RenderFileIcon
              fileName={name}
              isFolder={isFolder}
              isOpen={isOPen}
            />
            <span>{name}</span>
          </div>
        ) : (
          <div className="flex items-center mr-2" onClick={onFileClicked}>
            <RenderFileIcon fileName={name} />
            <span className="ml-2">{name}</span>
          </div>
        )}
      </div>
      {isOPen &&
        children?.map((itm, idx) => (
          <RecursiveComponent fileTree={itm} key={idx} />
        ))}
    </div>
  );
};

export default RecursiveComponent;
