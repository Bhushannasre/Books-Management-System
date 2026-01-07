import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Search from "./components/Search";
import BookDetails from "./components/BookDetails";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Demo from "./components/Demo";

import "./index.css";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Search /> },
      { path: "book/:id", element: <BookDetails /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "demo", element: <Demo/> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
