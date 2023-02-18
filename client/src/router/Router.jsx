import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Layout } from "../components/Layout/Layout";
import { Dashboard } from "../pages/Dashboard";
import { ItemDetal } from "../pages/ItemDetal";
import { SearchResults } from "../pages/SearchResults";

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Dashboard />} />
      <Route path="items" element={<SearchResults />} />
      <Route path="items/:id" element={<ItemDetal />} />
    </Route>
  )
);
