import { useState } from "react";
import type { IFile } from "../interfaces";
import FileIcon from "./SVG/FileIcon";
import FolderIcon from "./SVG/FolderIcon";
import RightArrowIcon from "./SVG/RightArrowIcon";
import BottomArrowIcon from "./SVG/BottomArrowIcon";

interface IProps {
  fileTree: IFile;
}
const RecursiveComponent = ({
  fileTree: { name, isFolder, children },
}: IProps) => {
  const [isOPen, setIsOpen] = useState<boolean>(false);

  // *** Handlers *****
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="ml-3 mb-2 cursor-pointer">
      <div className="flex items-center mb-2">
        {isFolder ? (
          <div className="flex items-center" onClick={toggle}>
            {isOPen ? <BottomArrowIcon /> : <RightArrowIcon />}
            <FolderIcon />
            <span>{name}</span>
          </div>
        ) : (
          <div className="flex items-center mr-2">
            <FileIcon />
            <span className="ml-2">{name}</span>
          </div>
        )}
      </div>
      {isOPen && children?.map((itm, idx) => (
        <RecursiveComponent fileTree={itm} key={idx} />
      ))}
    </div>
  );
};

export default RecursiveComponent;
