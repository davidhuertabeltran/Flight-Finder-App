import {useState , useEffect} from 'react';
import Flight from './Flight';
import SearchBar from './SearchBar';
import Filter from './Filter';

function FlightDataAPI(props) {
    const [flights, setFlights] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [filter,setFilter] = useState('');

    async function fetchFlights(query) {
        setLoaded(false)
        const url = `https://api.skypicker.com/flights?cityFrom=${encodeURIComponent(query.from)}&cityTo=${encodeURIComponent(query.to)}&date_from=26/06/2021&date_to=27/06/2021&return_from=26/06/2021&return_to=27/06/2021&locale=en&partner=data4youcbp202106&v=3&curr=EUR&price_from=1&price_to=10000&limit=5`

        // const url = `https://api.skypicker.com/flights?cityFrom=${encodeURIComponent(query.from)}&cityTo=${encodeURIComponent(query.to)}&date_from=26/06/2021&date_to=27/06/2021&return_from=26/06/2021&return_to=27/06/2021&locale=en&partner=data4youcbp202106&v=3&curr=EUR&price_from=1&price_to=10000&limit=5`
        // const url = `https://api.skypicker.com/flights?cityFrom=${encodeURIComponent(query.from)}&cityTo=${encodeURIComponent(query.to)}&date_from=26/06/2021&date_to=27/06/2021&return_from=26/06/2021&return_to=27/06/2021&locale=en&partner=data4youcbp202106&v=3&curr=EUR&price_from=1&price_to=10000&limit=5`

        const response = await fetch(url);
        const data = await response.json();

        setFlights(data.data);
        setLoaded(true)
    }

    // useEffect(() => {
    //     fetchFlights();
    // }, [])



    
    return (
        <>
            <SearchBar search={fetchFlights}/>
        
            <Filter setFilter={setFilter}/>
            {loaded && <Flight flights={flights}/>}

        
        </>
    )
}


export default FlightDataAPI;