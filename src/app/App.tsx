import { RouterProvider } from "react-router";
import { router } from "./routes";

export default function App() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
      />
      <RouterProvider router={router} />
    </>
  );
}
