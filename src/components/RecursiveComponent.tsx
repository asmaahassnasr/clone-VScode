import { useState } from "react";
import type { IFile } from "../interfaces";
import RightArrowIcon from "./SVG/RightArrowIcon";
import BottomArrowIcon from "./SVG/BottomArrowIcon";
import RenderFileIcon from "./RenderFileIcon";

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
            <RenderFileIcon fileName={name}  isFolder={isFolder} isOpen={isOPen}/>
            <span>{name}</span>
          </div>
        ) : (
          <div className="flex items-center mr-2">
            <RenderFileIcon fileName={name} />
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
