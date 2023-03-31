import React, { useState } from 'react'

function MultipleChecks() {
    const[friutsArr , setFriutsArr] = useState([])

    const handleChange = (e)=>{

        const value = e.target.value
        const checked = e.target.checked
        //console.log(value, checked);
        if(checked){

            setFriutsArr([

                ...friutsArr,value
            ]
            )


        }
        else{
            setFriutsArr(friutsArr.filter((ele)=>(console.log(`value:${value}  element:${ele}`))))
         

        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(friutsArr);

    }


    return (
        <>
            <div>MultipleChecks</div>
            <form onSubmit={handleSubmit}>
                <label> Select Friuits: &nbsp;</label>
                
                <input type='checkbox' name='friuts' value='Apple' onChange={handleChange}/>
                <label>&nbsp;Apple</label>
                &nbsp;

                <input type='checkbox' name='friuts' value='Mango' onChange={handleChange}/>
                <label>&nbsp;Mango</label>
                &nbsp;

                <input type='checkbox' name='friuts' value='Grapes' onChange={handleChange}/>
                <label>&nbsp;Grapes</label>
                &nbsp;

                <input type='checkbox' name='friuts' value='Banana' onChange={handleChange}/>
                <label>&nbsp;Banana</label>
                <br/> <br/>

                <input type='submit' value='submit' />

            </form>
        </>
    )
}

export default MultipleChecks