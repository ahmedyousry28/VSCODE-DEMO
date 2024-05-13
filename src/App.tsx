import "./App.css";
import Recursivecomponent from "./components/Recursivecomponent";
import { Filetree } from "./data/Filetree";
import Openedfilebar from "./components/Openedfilebar";
import Reseuzablepanel from "./components/Reseuzablepanel";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import Welcometab from "./components/Welcometab";

function App() {
  const { Opentabs } = useSelector((state: RootState) => state.Tree);
  return (
    <div className="flex h-full">
      {/* <div className=" h-lvh w-60 min-w-44   border-r border-zinc-700 overflow-y-hidden ">
        <Recursivecomponent Filetree={Filetree} />
      </div>
      <nav className=" w-lvw flex flex-col h-auto justify-start items-start overflow-y-hidden ">
        {<Openedfilebar />}
      </nav> */}
      <Reseuzablepanel
        showleftpanel
        leftPanel={
          <div className=" h-lvh w-60 min-w-44  overflow-y-hidden ">
            {/* border-r border-zinc-700 */}
            <Recursivecomponent Filetree={Filetree} />
          </div>
        }
        rightPanel={
          Opentabs.length ? (
            <nav className=" w-lvw flex flex-col h-auto justify-start items-start overflow-y-hidden ">
              {<Openedfilebar />}
            </nav>
          ) : (
            <Welcometab />
          )
        }
      />
    </div>
  );
}

export default App;
