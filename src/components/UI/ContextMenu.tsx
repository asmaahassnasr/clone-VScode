import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setClickeFilesAction, setOpendFilesAction } from "../../app/features/fileTreeSlice";
import type { RootState } from "../../app/store";

interface IProps {
  setShowMenu: (val: boolean) => void;
  positions: {
    posX: number;
    posY: number;
  };
}
const ContextMenu = ({ positions, setShowMenu }: IProps) => {
  const { idToBeRemoved, opendFiles } = useSelector(
    (state: RootState) => state.tree
  );

  const menuRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleClickOutSide = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event?.target as Node))
        setShowMenu(false);
    };
    window.addEventListener("click", handleClickOutSide);
    return () => {
      window.removeEventListener("click", handleClickOutSide);
    };
  }, [setShowMenu]);

  // **** Handlers
  const onCloseAllHandler = () => {
    dispatch(setOpendFilesAction([]));
    setShowMenu(false);
  };

  const onCloseHandler = () => {
    setShowMenu(false);
    const filtered = opendFiles.filter((file) => file.id !== idToBeRemoved);
    const lastTab = filtered[filtered.length - 1];
    if (!lastTab) {
      dispatch(setOpendFilesAction([]));
      dispatch(
        setClickeFilesAction({
          activeTabId: null,
          fileContent: "",
          fileName: "",
        })
      );
      return;
    }

    const { id, content, name } = lastTab;
    dispatch(setOpendFilesAction(filtered));
    dispatch(
      setClickeFilesAction({
        activeTabId: id,
        fileContent: content,
        fileName: name,
      })
    );
  };

  return (
    <div ref={menuRef}>
      <ul
        className="bg-gray-600 text-gray-300 w-fit px-7 py-3 rounded-md"
        style={{
          position: "absolute",
          left: positions.posX,
          top: positions.posY,
        }}
      >
        <li
          onClick={onCloseHandler}
          className="cursor-pointer mt-2 hover:text-gray-400"
        >
          Close{" "}
        </li>
        <li
          onClick={onCloseAllHandler}
          className="cursor-pointer mt-2 hover:text-gray-400"
        >
          {" "}
          Close All{" "}
        </li>
      </ul>
    </div>
  );
};

export default ContextMenu;
