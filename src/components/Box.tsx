import { Ifile } from "../interfaces";
import Closeicon from "./SVG/Closeicon";
import RenderFileIcon from "./RenderFileIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  setClickedFilesAction,
  setOpentabsAction,
} from "../app/features/Treeslice";
import { RootState } from "../app/store";

interface IBox {
  file: Ifile;
}

const Box = ({ file }: IBox) => {
  const {
    Opentabs,
    clikedfile: { activeTabId },
  } = useSelector((state: RootState) => state.Tree);

  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(
      setClickedFilesAction({
        filename: file.name,
        filecontent: file.content,
        activeTabId: file.id,
      })
    );
  };
  const onRemove = (id: string) => {
    const filterd = Opentabs.filter((item) => item.id != id);
    const lastTab = filterd[filterd.length - 1];
    if (!lastTab) {
      dispatch(setOpentabsAction([]));
      dispatch(
        setClickedFilesAction({
          activeTabId: null,
          filecontent: "",
          filename: "",
        })
      );
      return;
    }
    dispatch(setOpentabsAction(filterd));
    dispatch(
      setClickedFilesAction({
        activeTabId: lastTab.id,
        filecontent: lastTab.content,
        filename: lastTab.name,
      })
    );
  };
  return (
    <li
      className={`flex items-center ml-5 cursor-pointer hover:bg-neutral-700 border-t-4 ${
        file.id == activeTabId ? "border-[#6b73e3]" : "border-transparent"
      }`}
      onClick={onClickHandler}
    >
      <RenderFileIcon filename={file.name} />
      <span className="p-1">{file.name}</span>
      <span
        onClick={(e) => {
          e.stopPropagation();
          onRemove(file.id);
        }}
      >
        <Closeicon />
      </span>
    </li>
  );
};

export default Box;
