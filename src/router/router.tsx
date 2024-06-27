import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import { ParameterSelection } from "../components/ParameterSelection";
import { Capture } from "../components/Capture";
import { appUrl } from "./url";
import { CaptureSave } from "../components/CaptureSave";

export const App = () => {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={appUrl.home} Component={ParameterSelection} />
      <Route path={appUrl.capture} Component={Capture} />
      <Route path={appUrl.captureSave} Component={CaptureSave} />
    </Route>
  )
);
