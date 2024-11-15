import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page from "./components/Page";
import { TranslationProvider } from "./components/TranslationContext";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Navbar from "./components/Navbar";
import Page4 from "./components/Page4";

// Define routes with createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/navbar",
    element: <Navbar />,
  },
  {
    path: "/",
    element: <Page />,
  },
  {
    path: "/page1",
    element: <Page1 />,
  },
  {
    path: "/page2",
    element: <Page2 />,
  },
  {
    path: "/page3",
    element: <Page3 />,
  },
  {
    path: "/page4",
    element: <Page4 />,
  },
]);

function App() {
  return (
    <TranslationProvider>
      <RouterProvider router={router} />
    </TranslationProvider>
  );
}

export default App;
