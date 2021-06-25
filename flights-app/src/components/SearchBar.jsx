import { useState } from "react";

function SearchBar(props){

    const [query,setQuery] = useState({
        from:'',
        to:''
    })


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

export default SearchBar;