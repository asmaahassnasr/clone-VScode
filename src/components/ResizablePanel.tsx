import type { ReactNode } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

interface IProps {
    defaultLayout?: number[] | undefined;
    leftPaanel : ReactNode;
    rightPanel : ReactNode;
}

const ResizablePanel = ({defaultLayout = [25, 75] , leftPaanel, rightPanel}: IProps) => {

    const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
  };

  return (
    <PanelGroup direction="horizontal" onLayout={onLayout}>
      <Panel defaultSize={defaultLayout[0]}>
        {leftPaanel}
      </Panel>
      <PanelResizeHandle className="border-r border-[#ffffff1f]" />
      <Panel defaultSize={defaultLayout[1]}>
        {rightPanel}
      </Panel>
    </PanelGroup>
  );
};

export default ResizablePanel;
