import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root, { loader as rootLoader } from "./routes/root";
import ErrorPage from "./views/Error-Page";
import Contact from "./routes/Contact";
import Landing from "./views/Landing";
import Nav from "./components/Nav";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <ErrorPage />,
    children: [

    ],
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
