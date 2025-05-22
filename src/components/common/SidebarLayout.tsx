import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

const SidebarLayout = () => {
    return (
        <div className="h-screen flex flex-row z-10">
            <Sidebar />
            <main className="w-screen overflow-auto">
                <Outlet />
            </main>
        </div>

        //         <div className="h-screen flex flex-row z-10">
        //     <Sidebar />
        //     <main className="w-screen overflow-auto">
        //         <Outlet />
        //     </main>
        // </div>
    );
};

export default SidebarLayout;
