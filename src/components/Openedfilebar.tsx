import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import Box from "./Box";
import Filesyntxhighlighter from "./Filesyntxhighlighter";

const Openedfilebar = () => {
  const { Opentabs, clikedfile } = useSelector(
    (state: RootState) => state.Tree
  );

  const files = Opentabs.map((item) => <Box key={item.id} file={item} />);
  return (
    <>
      <ul className="list-none flex">{files}</ul>
      <div className=" ml-5 box-border">
        <Filesyntxhighlighter content={clikedfile.filecontent} />
      </div>
    </>
  );
};

export default Openedfilebar;
