interface Iprops {
  src: string;
  className?: string;
}

const RenderImageIcon = ({ src, className = "w-5 h-5 mr-0" }: Iprops) => {
  return <img src={src} className={className} />;
};

export default RenderImageIcon;
