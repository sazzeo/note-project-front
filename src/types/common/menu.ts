import { BaseType } from "@/types/common/base";

export interface Menu extends BaseType {
  menuSeq?: number | string;
  menuName?: string;
  menuPath?: string;
  menuIcon?: string;
  menuOrder?: string;
  childrenMenu?: Array<Menu>;
}
