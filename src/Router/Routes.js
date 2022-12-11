import { createBrowserRouter } from "react-router-dom";
import Details from "../components/Details";
import Home from "../components/Home";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/:id",
                element: <Details></Details>
            },
        ]

    }
])