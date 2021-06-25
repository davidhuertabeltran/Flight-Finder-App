function DisplayFlight(props) {
    const {flyFrom, flyTo, cityFrom, cityTo, price, airlines, dTime ,aTime,route} = props.flight;
    const{ flight_no } = route[0];
    const stopover = route.findIndex((routePart) => routePart.flyTo === flyTo)
        
    return (

                <tr>
                    <td>{flyFrom}</td>
                    <td>{flyTo}</td>
                    <td>{cityFrom}</td>
                    <td>{cityTo}</td>
                    <td>{price} EUR</td>
                    <td>{airlines}</td>
                    <td>{flight_no}</td>
                    <td>{stopover}</td>
                    <td>{new Date(dTime * 1000).toLocaleTimeString()}</td>
                    <td>{new Date(aTime * 1000).toLocaleTimeString()}</td>

                </tr>
        
    )
    
}

export default DisplayFlight;