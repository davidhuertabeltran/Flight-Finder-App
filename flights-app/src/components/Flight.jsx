import DisplayFlight from "./DisplayFlight";

function Flight(props) {
    
    if(props.flights.length === 0 ){
        return (
            <span>No flights for this route! </span>
        )
    }
        
    return (
        <table className="table_flights ">
            <thead>
                <tr>
                    <th>Fly From</th>
                    <th>Fly To</th>
                    <th>City From</th>
                    <th>City To</th>
                    <th>Price</th>
                    <th>Airlines</th>
                    <th>Flight No.</th>
                    <th>Stopover</th>
                    <th>Departure</th>
                    <th>Arrival</th>
                </tr>
            </thead>
            <tbody>
                {props.flights.map((flight,index)=>(
                        <DisplayFlight key={index} flight={flight}/>
                ))}
            </tbody>
        </table>
    )
    
}

export default Flight;