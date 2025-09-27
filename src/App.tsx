import { useSelector } from "react-redux";
import "./App.css";
import Preview from "./components/Preview";
import RecursiveComponent from "./components/RecursiveComponent";
import ResizablePanel from "./components/ResizablePanel";
import { fileTree } from "./data/fileTree";
import type { RootState } from "./app/store";
import WelcomTab from "./components/WelcomTab";
function App() {
  
  const { opendFiles} = useSelector((state: RootState) => state.tree);


  return (
    <>
      <div className="flex h-screen">
        <ResizablePanel
          leftPaanel={
            <div className="p-2">
              <RecursiveComponent fileTree={fileTree} />
            </div>
          }
          rightPanel={opendFiles.length? <Preview /> : <WelcomTab />}
        />
      </div>
    </>
  );
}

export default App;
