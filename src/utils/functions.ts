import { Ifile } from "../interfaces";

export const doesFileObjectExists = (arr: Ifile[], id: string) => {
  return arr.some((obj) => obj.id == id);
};
