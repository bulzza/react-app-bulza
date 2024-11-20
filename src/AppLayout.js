import TravelList from "./pages/TravelList";

const { Outlet } = require("react-router-dom");
const { default: Sidebar } = require("./components/Sidebar");


function AppLayout(){
    return(
        <div className="flex">
            <Sidebar/>
                <main className="w-3/4 p-8 bg-gray-100 min-h-screen">
                    <Outlet/>
                    
                </main>
          
        </div>
    )

}

export default AppLayout;