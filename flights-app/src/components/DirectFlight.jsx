

function DirectFlight(props) {

    const handleCheckbox = (e) => {
    

    props.setDirect(e.target.checked);
       
    } 

    return (
        <div className="directFlight-selection">

            <div className="directFlight-filter">
               
            <label htmlFor="directFlight"> Direct Flight </label>
                <input type="checkbox" name="directFlight" checked={props.checked} onChange={handleCheckbox}/>
            </div>
         
            
        </div>

    )
}

export default DirectFlight;