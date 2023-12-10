import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Error from "./components/Error";
import AppLayout from "./components/AppLayout";
import ThemeProvider from "./context/Theme";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
