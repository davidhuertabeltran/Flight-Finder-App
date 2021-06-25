function DisplayFlight(props) {
    
    const {flyFrom, flyTo, cityFrom, cityTo, price, airlines, flight_no} = props.flight;
        
    return (

                <tr>
                    <td>{flyFrom}</td>
                    <td>{flyTo}</td>
                    <td>{cityFrom}</td>
                    <td>{cityTo}</td>
                    <td>{price}</td>
                    <td>{airlines}</td>
                    <td>{flight_no}</td>
                </tr>
        
    )
    
}

export default DisplayFlight;