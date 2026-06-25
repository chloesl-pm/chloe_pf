import { createBrowserRouter } from "react-router";
import { WorkflowPortfolio } from "./components/WorkflowPortfolio";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: WorkflowPortfolio,
  },
]);
