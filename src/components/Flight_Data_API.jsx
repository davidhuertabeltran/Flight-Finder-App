import {useState , useEffect} from 'react';
import Flight from './Flight';
import SearchBar from './SearchBar';
import Filter from './Filter';
import FilterWithLocation from './FilterWithLocation';

function FlightDataAPI(props) {
    const [flights, setFlights] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [city, setCity] = useState("");
 
    async function fetchFlights(query) {
        setLoaded(false)
        
        const url = new URL('https://api.skypicker.com/flights')
        url.search = new URLSearchParams({
            v: 3,
            locale: 'en',
            partner: "data4youcbp202106",
            partner_market: 'us',
            curr: 'EUR',
            fly_from: query.from.toUpperCase(),
            fly_to: query.to.toUpperCase(),
            date_from: query.dateFrom,
            date_to: query.dateTo,
            max_stopovers: query.direct ? 0 : 1000, 
            limit: 5,
            sort: 'price',
            asc: 1,
        }).toString()
     
        const response = await fetch(url.toJSON());
        const data = await response.json();

        setFlights(data.data);

        setLoaded(true)
    }  

    return (
        <div className="search-block">
      
            <Filter  search={fetchFlights}/>
            <FilterWithLocation  search={fetchFlights}/>
            {loaded && <Flight flights={flights} />}

        </div>
    )
}


export default FlightDataAPI;