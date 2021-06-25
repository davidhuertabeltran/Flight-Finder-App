import DisplayFlight from "./DisplayFlight";

function Flight(props) {
    
    // const {flyFrom, flyTo, cityFrom, cityTo, price, airlines, flight_no} = props.flights;
        
    return (
        <table className="table Flights ">
            <thead>
                <tr>
                    <th>Fly From</th>
                    <th>Fly To</th>
                    <th>City From</th>
                    <th>City To</th>
                    <th>Price</th>
                    <th>Airlines</th>
                    <th>Flight No.</th>
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