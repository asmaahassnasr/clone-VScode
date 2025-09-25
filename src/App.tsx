import "./App.css";
import OpendFilesBar from "./components/OpendFilesBar";
import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data/fileTree";
function App() {
  
  
  return (
    <>
        <div>
          <div className="flex h-screen">
            <div className="w-65 border-r p-2 border-b-[1px] border-[#ffffff1f]">
              <RecursiveComponent fileTree={fileTree}/>
              </div>
              <OpendFilesBar />
          </div>
        </div>
    </>
  );
}

export default App;
