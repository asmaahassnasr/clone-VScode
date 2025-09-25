import "./App.css";
import OpendFilesBar from "./components/opendFilesBar";
import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data/fileTree";
function App() {
  
  
  return (
    <>
        <div>
          <div className="flex h-screen">
            <div className="w-65 border-r border-white">
              <RecursiveComponent fileTree={fileTree}/>
              </div>
              <OpendFilesBar />
          </div>
        </div>
    </>
  );
}

export default App;
