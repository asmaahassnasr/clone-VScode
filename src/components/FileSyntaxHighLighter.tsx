import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface IProps {
  content: string;
}
const FileSyntaxHighLighter = ({ content }: IProps) => {
  return (
    <div>
      <SyntaxHighlighter 
      language="javascript"
       style={atomOneDark} 
       customStyle={{
        background:"transparent",
        width:"100%",
        maxHeight:"100vh",
        overflowX:"auto",
        fontSize:"1.5rem"
       }}
       showLineNumbers
        wrapLongLines>
        {content}
      </SyntaxHighlighter>
    </div>
  );
};

export default FileSyntaxHighLighter;
