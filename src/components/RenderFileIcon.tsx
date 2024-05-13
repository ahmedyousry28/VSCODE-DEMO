import RenderImageIcon from "./RenderImageIcon";
import Fileicon from "./SVG/Fileicon";
import { fileExtension } from "../constants";

interface Iprops {
  filename: string;
  isfolder?: boolean;
  isopen?: boolean;
}

const RenderFileIcon = ({ filename, isfolder, isopen }: Iprops) => {
  //handles files
  const extenstion = filename.split(".").pop();
  if (
    extenstion &&
    Object.prototype.hasOwnProperty.call(fileExtension, extenstion)
  ) {
    const Icon = isfolder
      ? isopen
        ? `${fileExtension[extenstion]}-open`
        : `${fileExtension[extenstion]}`
      : `${fileExtension[extenstion]}`;
    return <RenderImageIcon src={`${Icon}.svg`} />;
  }

  if (isfolder && isopen)
    return <RenderImageIcon src={`assets/icons/folder-default-open.svg`} />;
  if (isfolder && !isopen)
    return <RenderImageIcon src={`assets/icons/folder-default.svg`} />;

  return <Fileicon />;
};

export default RenderFileIcon;
