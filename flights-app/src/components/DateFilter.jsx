import { DateTime } from 'luxon';

function DateFilter(props) {

  
    

    const handleFromDate = (e) => {
    
       
        props.setDateFrom(DateTime.fromISO(e.target.value).toFormat('d/M/yyyy'))
   
       
    } 


    const handleToDate = (e) => {
    
        props.setDateTo(DateTime.fromISO(e.target.value).toFormat('d/M/yyyy'))
    
    
    }


    return (


        <div className="DateFilter-selection">

            <div className="DateFilter-filter">
               
                <label htmlFor="DateFilter"> Date from: </label><br />
                <input type="date" name="date_from" min="2021-06-25"  onChange={handleFromDate}/><br />

                <label htmlFor="DateFilter"> Date to: </label><br />
                <input type="date" name="date_to" min="2021-06-25" onChange={handleToDate}/>
            </div>
        </div>
         
         
            
       

    )
}

export default DateFilter;