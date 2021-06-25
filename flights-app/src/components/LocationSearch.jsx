import { useState } from "react";
import SearchBar from "./SearchBar";

function LocationSearch(props){

    const [query, setQuery] = useState("");
    const [loaded, setLoaded] = useState(false);


    async function fetchCity(city) {
            setLoaded(false)
            console.log(city);
            const url = new URL('https://api.skypicker.com/locations')
            url.search = new URLSearchParams({
                term:city,
                locale:"en-US",
                location_types:"airport",
                limit:10,
                active_only:true,
                sort:"name",
                }).toString()
            const response = await fetch(url.toJSON());
            const data = await response.json();
            
            if(data.locations.length > 0) {
                console.log(data.locations[0].code)
                props.onChange(data.locations[0].code)
            }
            setLoaded(true)
    }  
        
    const handleCity = (e) => {
        fetchCity(e.target.value);
        
    }

    return (
        <input type="text" name="city"  onChange={handleCity}/>
    )

}


export default LocationSearch;