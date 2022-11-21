export interface Code {
  type: string;
  name?: string;
  codes?: Array<CodeItem>;
}

export interface CodeItem {
  key: string;
  value: string;
  code: string;
}

export const codeType = {
  ADDRESS: "address",
  MEMBER: "member",
};
