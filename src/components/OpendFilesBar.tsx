import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import OpendFilesBarTab from "./OpendFilesBarTab";

const OpendFilesBar = () => {
    
  const { opendFiles } = useSelector((state: RootState) => state.tree);

  return (
    <div>
       <div className="flex items-center">
        {opendFiles.map((itm) => <OpendFilesBarTab file={itm} key={itm.id}/>)} 
       </div>
    </div>
  )
}

export default OpendFilesBar