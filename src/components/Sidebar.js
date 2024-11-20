import { NavLink } from "react-router-dom";

function Sidebar() {

    return (
        <div className="w-1/4 bg-gray-800 text-white h-screen p-4">
            <h2 className="text-2xl font-bold mb-6">
                Travel Planner
            </h2>
            <ul>
                <li className="mb-4">
                    <NavLink to="/">Home Page</NavLink>
                </li>
                <li className="mb-4">
                    <NavLink to="/travelList">Travel List</NavLink>
                </li>
                <li className="mb-4">
                    <NavLink to="/destinationList">Destination List</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;