import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import OpendFilesBarTab from "./OpendFilesBarTab";
import { useState } from "react";
import ContextMenu from "./UI/ContextMenu";

const OpendFilesBar = () => {
  const [menuPosition, setMenuPosition] = useState<{
    posX: number;
    posY: number;
  }>({ posX: 0, posY: 0 });
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const { opendFiles } = useSelector((state: RootState) => state.tree);

  return (
    <div className="w-fit">
      <div
        className="flex items-center border-b-[1px] border-[#ffffff1f]"
        onContextMenu={(e) => {
          e.preventDefault();
          setMenuPosition({ posX: e.clientX, posY: e.clientY });
          setShowMenu(true);
        }}
      >
        {opendFiles.map((itm) => (
          <OpendFilesBarTab file={itm} key={itm.id} />
        ))}
      </div>

      {showMenu && <ContextMenu positions={menuPosition} setShowMenu={setShowMenu}/>}
    </div>
  );
};

export default OpendFilesBar;
