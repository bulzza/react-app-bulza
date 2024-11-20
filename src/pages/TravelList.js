import { useContext } from "react";
import { Link } from "react-router-dom";
import { TravelContext } from "../contex/TravelContext";

function TravelList(){

    const{travels, setTravels}=useContext(TravelContext)

    const onDelete = (destination) => {
        const filteredValue = travels.filter(t=> t.destination !== destination);
        setTravels(filteredValue);
    }

    return (
        <>

            <h1>Travel List</h1>

            {
                travels?.map( t=> {
                    return (
                        <div>
                            <div>Destination: {t.destination}</div>
                            <div>Date: {t.date}</div>
                            <div>Group: {t.group}</div>
                            <Link to={`/editTravel/${t.destination}`}><button>Edit</button></Link>
                            <br/>
                            <button onClick={() => onDelete(t.destination)}>Delete</button>
                        </div>
                    )
                })
            }

            <button class="mt-4 rounded-md bg-slate-800 py-2 px-4 border border-black text-center text-sm text-black transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button"><Link to="/addTravel">Add Travel</Link></button>
           
        </>
        
    )
}

export default TravelList;