import { useState } from "react";
import { Ifile } from "../interfaces";
// import Foldericon from "./SVG/Foldericon";
import Rightarrowicon from "./SVG/Rightarrowicon";
import Bottomarrowicon from "./SVG/Bottomarrowicon";
import RenderFileIcon from "./RenderFileIcon";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import {
  setClickedFilesAction,
  setOpentabsAction,
} from "../app/features/Treeslice";
import { doesFileObjectExists } from "../utils/functions";

interface Iprops {
  Filetree: Ifile;
}

const Recursivecomponent = ({ Filetree }: Iprops) => {
  const dispatch = useDispatch();
  const { Opentabs } = useSelector((state: RootState) => state.Tree);
  const [isOpen, setIsOpen] = useState(false);

  // handlers
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };
  // const tabsHandler = () => {
  //   if (!Opentabs.includes(Filetree))
  //     dispatch(setOpentabs([...Opentabs, Filetree]));
  // };
  //more efficient code
  const onClickFile = () => {
    const fileExist = doesFileObjectExists(Opentabs, Filetree.id);
    dispatch(
      setClickedFilesAction({
        filename: Filetree.name,
        filecontent: Filetree.content,
        activeTabId: Filetree.id,
      })
    );
    if (fileExist) return;
    dispatch(setOpentabsAction([...Opentabs, Filetree]));
  };

  return (
    <div className="ml-3 mb-2">
      <div className="flex items-center cursor-pointer">
        {Filetree.isFolder ? (
          <div onClick={toggle} className="flex items-center ">
            {isOpen ? <Bottomarrowicon /> : <Rightarrowicon />}
            <RenderFileIcon
              filename={Filetree.name}
              isfolder={Filetree.isFolder}
              isopen={isOpen}
            />
            <span> {Filetree.name}</span>
          </div>
        ) : (
          <div className="flex items-center " onClick={onClickFile}>
            {<RenderFileIcon filename={Filetree.name} />}
            <span> {Filetree.name}</span>
          </div>
        )}
      </div>

      {isOpen &&
        Filetree.children &&
        Filetree.children.map((el, index) => (
          <Recursivecomponent Filetree={el} key={index} />
        ))}
    </div>
  );
};

export default Recursivecomponent;
