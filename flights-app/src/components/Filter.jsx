function Filter(props) {

    const handleOption = (e) => {
        props.setFilter(e.target.value);
    }

    return (
        <>
            <div className="destination-filter">
                <select name="filter" id="" onChange={handleOption}> 
                    <option disabled value="all"> -- Select a destination city -- </option>
                    <option value="vlc">Valencia</option>
                    <option value="bcn">Barcelona</option>
                    <option value="mad">Madrid</option>
                    <option value="mxp">Milano</option>
                    <option value="ath">Athenas</option>
                </select>
            </div>
            

            <div className="origin-filter">
                <select name="filter" id="" onChange={handleOption}> 
                    <option disabled value="all"> -- Select an origin city -- </option>
                    <option value="prg">Prague</option>
                    <option value="ber">Berlin</option>
                    <option value="waw">Warsaw</option>
                    <option value="ped">Pardubice</option>
                </select>
            </div>
        </>
        
    )
}

export default Filter;