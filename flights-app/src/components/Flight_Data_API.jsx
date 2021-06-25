import {useState , useEffect} from 'react';
import Flight from './Flight';
import SearchBar from './SearchBar';
import Filter from './Filter';


function FlightDataAPI(props) {
    const [flights, setFlights] = useState(null);
    const [loaded, setLoaded] = useState(false);
 
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
            // return_from: '26/06/2021',
            // return_to: '27/06/2021',
            max_stopovers: query.direct ? 0 : 1000, 
            // nights_in_dst_from: 1,
            // nights_in_dst_to: 1,
            // max_fly_duration: 16,
            // flight_type: 'return',
            // adults: 2,
            // children: 3,
            // infants: 0,
            // selected_cabins: 'M',
            // mix_with_cabins: '',
            // adult_hold_bag: '1,0',
            // adult_hand_bag: '1,1',
            // child_hold_bag: '2,1,0',
            // child_hand_bag: '1,1,0',
            // fly_days: 0,
            // fly_days_type: 'departure',
            // ret_fly_days: 2,
            // ret_fly_days_type: 'departure',
            // one_for_city: 0,
            // only_working_days: 0,
            // only_weekends: 0,
            // one_per_date: 0,
            // partner_market: 'us',
            // price_from: 1,
            // price_to: 10000,
            // dtime_from: '00:00',
            // dtime_to: '00:00',
            // atime_from: '00:00',
            // atime_to: '00:00',
            // ret_dtime_from: '00:00',
            // ret_dtime_to: '00:00',
            // ret_atime_from: '00:00',
            // ret_atime_to: '00:00',
            // stopover_from: '00:00',
            // stopover_to: '00:00',
            // conn_on_diff_airport: 1,
            // ret_from_diff_airport: 1,
            // ret_to_diff_airport: 1,
            // select_airlines: 'B6, DL',
            // select_stop_airport: 'MCO',
            // select_airlines_exclude: 'False',
            //select_stop_airport_exclude: 'True',
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
        <>
            {/* <SearchBar search={fetchFlights}/> */}
            <Filter  search={fetchFlights}/>
            {loaded && <Flight flights={flights}/>}
            
        </>
    )
}


export default FlightDataAPI;