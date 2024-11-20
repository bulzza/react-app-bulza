import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DestinationContext } from "../contex/DestinationContext";


function DestinationDetails(){

    const { name } = useParams();
    const {destinations}  = useContext(DestinationContext);
    const [selectedDes, setSelectedDes] = useState();

    useEffect(() =>{
        const selectedDestination = destinations?.filter(d=>d.name.common == name)[0];
        setSelectedDes(selectedDestination);
    })
    
    return (
        <>
        <div class="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
            <table class="w-full text-left table-auto min-w-max">
                <thead>
                <tr>
                    <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                    <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                        Name
                    </p>
                    </th>
                    <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                    <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                        Official
                    </p>
                    </th>
                    <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                    <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                        Region 
                    </p>
                    </th>
                    <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                    <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                        Popullation 
                    </p>
                    </th>
                    <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                    <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td class="p-4 border-b border-blue-gray-50">
                    <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        {selectedDes?.name.common}
                    </p>
                    </td>
                    <td class="p-4 border-b border-blue-gray-50">
                    <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                       {selectedDes?.name.official}
                    </p>
                    </td>
                    <td class="p-4 border-b border-blue-gray-50">
                    <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        {selectedDes?.region}
                    </p>
                    </td>
                    <td class="p-4 border-b border-blue-gray-50">
                    <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        {selectedDes?.population}
                    </p>
                    </td>
                    <td class="p-4 border-b border-blue-gray-50">
                    <a href="#" class="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                        Edit
                    </a>
                    </td>
                </tr>
                
                </tbody>
            </table>
            </div>
        </>
    )
}

export default DestinationDetails;