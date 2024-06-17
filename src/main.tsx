import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./layout";
import Home from "./pages/home";
import P404 from "./pages/404";

import "./index.scss";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<Layout>
				<Outlet />
			</Layout>
		),
		children: [
			{
				path: "/",
				element: <Home />
			},
			{
				path: "*",
				element: <P404 />
			}
		]
	}
]);

ReactDOM.createRoot(document.querySelector("#root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
