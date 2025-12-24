import { useRouteError } from "react-router-dom"
const Error = ()=>{

    const err = useRouteError()
    console.log(err)
    return(

        <div className="error">
        <h1>Oops !!!!!!</h1>
        <h2>Something Went Wrong</h2>
        <h4>Yaha error show karunga ye dikhane k liye ki mujhe aata hai </h4>

           </div>
    )
 
}

export default Error

