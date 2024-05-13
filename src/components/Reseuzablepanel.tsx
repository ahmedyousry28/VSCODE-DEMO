import { ReactNode } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
interface Iprops {
  defaultLayout?: number[] | undefined;
  leftPanel: ReactNode;
  rightPanel: ReactNode;
  showleftpanel: boolean;
}

const Reseuzablepanel = ({
  defaultLayout = [20, 80],
  leftPanel,
  rightPanel,
  showleftpanel,
}: Iprops) => {
  const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
  };
  return (
    <PanelGroup
      direction="horizontal"
      onLayout={onLayout}
      autoSaveId={"condition"}
    >
      {showleftpanel && (
        <>
          {" "}
          <Panel defaultSize={defaultLayout[0]} collapsible>
            {leftPanel}
          </Panel>
          <PanelResizeHandle className="border-r-2 border-[#ffffff1f]" />
        </>
      )}

      <Panel defaultSize={defaultLayout[1]}>{rightPanel}</Panel>
      {/* <PanelResizeHandle /> */}
    </PanelGroup>
  );
};

export default Reseuzablepanel;
