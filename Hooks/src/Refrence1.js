import React,{useState,useRef,useEffect} from 'react';

function Refrence(props)
{   
    const inputNameRef = useRef("");
    const inputCityRef = useRef("");
    const name="";
    const city="";
    // const [name,setName] =useState("");
    // const [city,setCity] =useState("");

    function handleSubmit()
    {
        alert(`${inputNameRef.current.value} - ${inputCityRef.current.value}`)
    }
    return(
        <>
            <h1>{`${name}${city}`}</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' ref={inputNameRef}/>
                <input type="text" name='city' ref={inputCityRef}/>
                <button type="submit">Submit</button>
            </form>
        </>
    );
    
}


export default Refrence;
