import React from "react";

import { Outlet } from "react-router-dom";

import  Layout  from "../components/layout";


const AppRoutes: React.FC = () => {
    return (
        <div>
            <Layout>
                <Outlet/>
            </Layout>
        </div>
    );
};

export default AppRoutes;