import { createContext, useState } from "react";


const DestinationContext = createContext();

function DestinationProvider({children}){
    const [destinations, setDestinations] = useState([]);

    return(
        <DestinationContext.Provider value={{ destinations, setDestinations}}>
            {children}
        </DestinationContext.Provider>
    )

}
export {DestinationProvider, DestinationContext};