import {useState} from 'react'
import DirectFlight from './DirectFlight';
import DateFilter from './DateFilter';
import LocationSearch from './LocationSearch';

function FilterWithLocation(props) {

    const [from,setFrom] = useState('');
    const [to,setTo] = useState('');
    const [direct,setDirect] = useState(false);
    const [dateFrom,setDateFrom] = useState('');
    const [dateTo,setDateTo] = useState('');

    return (
        <>
            
            <div className="cities-selection">
                <h1>With Location</h1>
                <div className="origin-filter">
                    <h3>Origin</h3>
                    <LocationSearch onChange={setFrom} />
                </div>
                <div className="destination-filter">
                    <h3>Destination</h3>
                    <LocationSearch onChange={setTo} />
                </div>

                <DateFilter setDateFrom={setDateFrom} setDateTo={setDateTo}/>

                <DirectFlight setDirect={setDirect} direct={direct}/>

                <button onClick={()=>{props.search({ from,to,direct,dateFrom, dateTo })}}>Find</button>
            </div>
        </>
    )
}

export default FilterWithLocation;