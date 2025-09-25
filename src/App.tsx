import { useSelector } from "react-redux";
import "./App.css";
import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data/fileTree";
import type { RootState } from "./app/store";
function App() {
  
  const { opendFiles } = useSelector((state: RootState) => state.tree);
  
  return (
    <>
        <RecursiveComponent fileTree={fileTree}/>
       {opendFiles.map((itm,idx) => <li key={idx}> {itm.name} </li>)} 
    </>
  );
}

export default App;
