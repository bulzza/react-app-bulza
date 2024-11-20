import AppLayout from "./AppLayout";
import AddTravel from "./pages/AddTravel";
import DestinationDetail from "./pages/DestinationDetail";
import DestinationList from "./pages/DestinationList";
import EditTravel from "./pages/EditTravel";
import HomePage from "./pages/HomePage";
import TravelList from "./pages/TravelList";

const { createBrowserRouter, RouterProvider } = require("react-router-dom");


const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>, 
        children: [
        { 
            path: "/",
            element: <HomePage/> 
        },
        { 
            path: "/travelList",
            element: <TravelList/> 
        },
        { 
            path: "/destinationList",
            element: <DestinationList/> 
        },
        { 
            path: "/destinationDetail/:name",
            element: <DestinationDetail/> 
        },
        { 
            path: "/addTravel",
            element: <AddTravel/> 
        },
        { 
            path: "/editTravel/:destination",
            element: <EditTravel/> 
        },
        ],
    },

    
]);

export function AppRouter(){
    return <RouterProvider router={router}/>
}