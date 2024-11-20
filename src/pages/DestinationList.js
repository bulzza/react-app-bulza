import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DestinationContext } from "../contex/DestinationContext";

function DestinationList(){

    const {destinations, setDestinations} = useContext(DestinationContext);


    useEffect(()=> {
        const fetchData = async() => {
            const response = await axios.get("https://restcountries.com/v3.1/all");
            console.log("response", response);
            setDestinations(response.data.slice(1, 13));

        }
        fetchData();
    }, []);

    return(
        <>
          <div className="grid grid-cols-3">
          {
                destinations?.map(d => {
                    const path = "/destinationDetail/" + d.name.common;
                    return (
                        <div class="flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
                            <div class="p-4">
                                <h5 class="mb-2 text-slate-800 text-xl font-semibold">
                                    {d.name.common}
                                </h5>
                                <p class="text-slate-600 leading-normal font-light">
                                     {d.subregion}
                                </p>
                            
                                <button class="rounded-md bg-slate-800 py-2 px-4 mt-6 border border-grey text-center text-sm text-black transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                                    <Link to={path}>Read more</Link>
                                </button>
                            </div>
                        </div>
                    )
                }
                )}
          </div>
        </>
    )
}

export default DestinationList;