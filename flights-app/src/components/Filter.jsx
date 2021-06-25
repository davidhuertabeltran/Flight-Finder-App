import {useState} from 'react'
import DirectFlight from './DirectFlight';
import DateFilter from './DateFilter';

function Filter(props) {

    const [from,setFrom] = useState('');
    const [to,setTo] = useState('');
    const [direct,setDirect] = useState(false);
    const [dateFrom,setDateFrom] = useState('');
    const [dateTo,setDateTo] = useState('');



    const handleFrom = (e) => {
       setFrom(e.target.value);
    }

     const handleTo = (e) => {
        setTo(e.target.value);
    }

    return (
        <div className="cities-selection">
            <div className="origin-filter">
                <h3>Select an origin city</h3>
                <select name="filter_from" id="" onChange={handleFrom}> 
                    <option selected="true" disabled="disabled"> -- Select an origin city -- </option>
                    <option value="prg">Prague</option>
                    <option value="ber">Berlin</option>
                    <option value="waw">Warsaw</option>
                    <option value="ped">Pardubice</option>
                </select>
            </div>
            <div className="destination-filter">
                <h3>Select a destination city</h3>
                <select name="filter_to" id="" onChange={handleTo}> 
                    <option selected="true" disabled="disabled"> -- Select a destination city -- </option>
                    <option value="vlc">Valencia</option>
                    <option value="bcn">Barcelona</option>
                    <option value="mad">Madrid</option>
                    <option value="mxp">Milano</option>
                    <option value="ath">Athens</option>
                </select>
            </div>

            <DateFilter setDateFrom={setDateFrom} setDateTo={setDateTo}/>

            <DirectFlight setDirect={setDirect} direct={direct}/>

            <button onClick={()=>{props.search({ from,to,direct,dateFrom, dateTo })}}>Find</button>
            
        </div>

    )
}

export default Filter;