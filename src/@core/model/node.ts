export interface Node {
  data: {
    id: number;
    label: string;
  };
  children?: Node[];
}
