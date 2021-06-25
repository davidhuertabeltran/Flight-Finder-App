import { useState } from "react";

function SearchBar(props){
    //const [test,setTest] = useState('') 
    const [query,setQuery] = useState({
        from:'',
        to:''
    })
    // const [flights, setFlights] = useState(null);

    //  async function fetchFlights(value) {
    //     const url = `https://api.skypicker.com/flights?fly_from=${encodeURIComponent(query.from)}_to=${encodeURIComponent(query.to)}&date_from=26/06/2021&date_to=27/06/2021&return_from=26/06/2021&return_to=27/06/2021&locale=en&partner=data4youcbp202106&v=3&curr=EUR&price_from=1&price_to=10000&limit=5"`

    //     const response = await fetch(url);
    //     const data = await response.json();


    //     return setFlights(data);

    // }

    const changeFrom = (event) => {
        setQuery({from: event.target.value, to: query.to})
    }
    const changeTo = (event) => {
        setQuery({from: query.from, to: event.target.value})
    }
    return (
        <div className="search">
            <label htmlFor="from">FROM:</label>
            <input type="text" name="from" value={query.from} onChange={changeFrom}/>
            <label htmlFor="to">TO:</label>
            <input type="text" name="to" value={query.to} onChange={changeTo} />
            <button onClick={()=>{props.search(query)}}>Find</button>
        </div>
    )
}

export default SearchBar