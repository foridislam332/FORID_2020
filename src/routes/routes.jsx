import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import ProjectDetails from "../pages/ProjectDetails";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'project/:id',
                element: <ProjectDetails />
            }
        ]
    }
])

export default routes;