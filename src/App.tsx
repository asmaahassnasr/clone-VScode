import "./App.css";
import Preview from "./components/Preview";
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
          rightPanel={<Preview />}
        />
      </div>
    </>
  );
}

export default App;
