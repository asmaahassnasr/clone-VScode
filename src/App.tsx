import "./App.css";
import OpendFilesBar from "./components/OpendFilesBar";
import RecursiveComponent from "./components/RecursiveComponent";
import ResizablePanel from "./components/ResizablePanel";
import { fileTree } from "./data/fileTree";
function App() {
  return (
    <>
      <div className="flex h-screen">
        <ResizablePanel
          leftPaanel={
            <div className="p-2">
              <RecursiveComponent fileTree={fileTree} />
            </div>
          }
          rightPanel={<OpendFilesBar />}
        />
      </div>
    </>
  );
}

export default App;
