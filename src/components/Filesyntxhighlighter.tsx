import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
interface Iprops {
  content: string | undefined;
}

const Filesyntxhighlighter = ({ content }: Iprops) => {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={atomOneDark}
      customStyle={{
        backgroundColor: "transparent",
        width: "100%",
        maxHeight: "100vh",
        fontSize: "1.5rem",
        overflowX: "auto",
      }}
      showLineNumbers
    >
      {String(content)}
      {/* {content} */}
    </SyntaxHighlighter>
  );
};

export default Filesyntxhighlighter;
