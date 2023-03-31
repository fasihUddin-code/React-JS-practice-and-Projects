function Option(props) {
    console.log(props);

    const getSelectedItem = (e)=>{
        
        
        let isChecked = e.target.value
        props.setSelectedOption(isChecked)
    }
        





    return (
        <>
            {
                props.data.map((item, index) => {

                    return (
                        <>  
                            
                            <label>
                                <input type="radio" name="option" 
                                value={item}
                                onClick={(e)=>{getSelectedItem(e)}}
                                />
                                {item}
                            </label>

                        </>

                    )

                })
            }



        </>


    )


}

export default Option