import { extensionIconPaths } from "../constants";
import IconImg from "./IconImg";
import FileIcon from "./SVG/FileIcon";

interface IProps {
  fileName: string;
  isFolder?: boolean;
  isOpen?: boolean;
}
const RenderFileIcon = ({ fileName, isFolder, isOpen }: IProps) => {
  const extension = fileName.split(".").pop();

  if (
    extension &&
    Object.prototype.hasOwnProperty.call(extensionIconPaths, extension)
  ) {
    const iconPath = isFolder
      ? isOpen
        ? `${extensionIconPaths[extension]}-open.svg`
        : `${extensionIconPaths[extension]}.svg`
      : `${extensionIconPaths[extension]}.svg`;

    return <IconImg src={iconPath} />;
  } else if (isFolder)
    return isOpen ? (
      <IconImg src="/icons/folder-default-open.svg" />
    ) : (
      <IconImg src="/icons/folder-default.svg" />
    );
  return <FileIcon />;
};

export default RenderFileIcon;
