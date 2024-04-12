function Table(props)
{
    return(
        <>
        <style>
            {
                `
                .relative
                {
                    width: 60px;
                    height: 75px;
                    border-radius: 5px;
                    margin-top: 20px;
                    position: relative;
                    
                }
                .absolute
                {
                    width: 45px;
                    height: 60px;
                    position: absolute; 
                    top:7px;
                    left:7px;
                    
                }
                p{
                    font-size: 10px;
                    margin-top:-15px;
                    
                }
                h3
                {
                    margin-top:-10px;
                }
                h6
                {
                    margin-top:-10px;
                }
                `
            }
        </style>
       
        <div className="relative"  style={{backgroundColor:`${props.color}`}}>
            <div className="absolute" >
            <h6>{props.count}</h6>
            <h3>{props.alpha}</h3>
            <p>{props.name}</p>
            <p>{props.value}</p>
            </div>
        </div>
        {/* <div className=" " style={{backgroundColor:`${props.color}`}}>
            <h6>{props.count}</h6>
            <h3>{props.alpha}</h3>
            <p>{props.name}</p>
            <p>{props.value}</p>
        </div> */}

        </>
    );
}
export default Table;