function Idcard(props)
{
return( 
<div
  style={{
    width: 400,
    textAlign: "center",
    border: "1px gray solid",
    borderRadius: 10,
    padding: 20,
    boxShadow: "4px 3px 5px gray",
    margin: "15px",
  }}
>
  <img src="atmiya.png" alt="Atmiya Logo" height="120px" />
  <h3>Atmiya University</h3>
  <img
    src="passport.jpg"
    alt=""
    height="150px;"
    style={{ border: "2px black solid" }}
  />
  <h2>{props.name}</h2>
  <p>EmployeeNo:{props.EmployeeNo}</p>
  <p>Blood Group:{props.bloodgp}</p>
  <div style={{ display: "flex" }}>
    <div style={{ backgroundColor: "red", height: 30, width: 130 }} />
    <div style={{ backgroundColor: "green", height: 30, width: 130 }} />
    <div style={{ backgroundColor: "blue", height: 30, width: 130 }} />
  </div>
</div>
    )
}


export default Idcard;
