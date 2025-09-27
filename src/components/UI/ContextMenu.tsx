import { useEffect, useRef } from "react";

interface IProps {
  setShowMenu:(val:boolean) => void;
  positions: {
    posX: number;
    posY: number;
  };
}
const ContextMenu = ({ positions,setShowMenu }: IProps) => {

    const menuRef = useRef<HTMLDivElement>(null);

    useEffect( () => {
        const handleClickOutSide = (event:MouseEvent) =>{
            if(menuRef.current && !menuRef.current.contains(event?.target as Node))
                setShowMenu(false);
        }
        window.addEventListener("click",handleClickOutSide);
        return () =>{
            window.removeEventListener("click",handleClickOutSide);
        }
    }, [setShowMenu])

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
        <li>Close </li>
        <li> Close All </li>
      </ul>
    </div>
  );
};

export default ContextMenu;
