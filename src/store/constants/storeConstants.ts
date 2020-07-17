import { ALL } from "./filterConstants";
import { Task } from "../appState";

export const BASE_FILTER: string = ALL;
export const INITIAL_TASKS: Task[] = [
  {
    id: 1,
    text: "Learn ReactJS",
    isCompleted: false,
  },
  {
    id: 2,
    text: "Learn Redux",
    isCompleted: false,
  },
  {
    id: 3,
    text: "Add Ant Design",
    isCompleted: false,
  },
  {
    id: 4,
    text: "Learn Type Script",
    isCompleted: false,
  },
];
