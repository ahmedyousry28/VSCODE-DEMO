import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Ifile } from "../../interfaces";
interface IClickedfile {
  activeTabId: string | null;
  filename: string;
  filecontent: string | undefined;
}

interface IInitialstate {
  Opentabs: Ifile[];
  clikedfile: IClickedfile;
}

const initialState: IInitialstate = {
  Opentabs: [],
  clikedfile: {
    activeTabId: null,

    filename: "",
    filecontent: "",
  },
};
const Treeslice = createSlice({
  name: "Tree",
  initialState,
  reducers: {
    //actions
    setOpentabsAction: (state, action: PayloadAction<Ifile[]>) => {
      state.Opentabs = action.payload;
    },
    setClickedFilesAction: (state, action: PayloadAction<IClickedfile>) => {
      state.clikedfile.filename = action.payload.filename;
      state.clikedfile.filecontent = action.payload.filecontent;
      state.clikedfile.activeTabId = action.payload.activeTabId;
    },
  },
});
export const { setOpentabsAction, setClickedFilesAction } = Treeslice.actions; //export actions

export default Treeslice.reducer;
