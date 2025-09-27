import { useSelector } from "react-redux";
import FileSyntaxHighLighter from "./FileSyntaxHighLighter"
import OpendFilesBar from "./OpendFilesBar"
import type { RootState } from "../app/store";

const Preview = () => {

  const { clickedFiles } = useSelector((state: RootState) => state.tree);

  return (
    <>
    <OpendFilesBar />
    <FileSyntaxHighLighter content={String(clickedFiles.fileContent)} />
    </>
  )
}

export default Preview