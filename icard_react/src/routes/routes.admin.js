import { Component } from "react"
import {AdminLayout} from "../layouts"
import { HomeAdmin } from "../pages/Admin"

const routesAdmin = [
    {
        path: "/admin",
        layout: AdminLayout,
        Component: HomeAdmin,
        exact: true,
    },
];

export default routesAdmin;