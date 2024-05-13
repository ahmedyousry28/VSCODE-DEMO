export interface Ifile {
  id: string;
  name: string;
  isFolder: boolean;
  children?: Ifile[];
  content?: string;
}
