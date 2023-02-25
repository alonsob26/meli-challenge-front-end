import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { getItems } from "../services/items";
import { Layout } from "../components/Layout/index";
import { Dashboard, ItemDetail, SearchResults } from "../pages/index";

/* componente de ruteo para la app */

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index loader={getItems} element={<Dashboard />} />
      <Route path="items" element={<SearchResults />} />
      <Route path="items/:id" element={<ItemDetail />} />
    </Route>
  )
);
