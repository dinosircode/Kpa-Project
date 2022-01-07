import  React, { useState , useEffect } from 'react'

export const DateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(

           <font size="4.5"><span id="whitetext"> &nbsp; &nbsp;{date.toLocaleTimeString()} &nbsp;{date.toLocaleDateString()}</span></font>

        
    )
}

export default DateTime