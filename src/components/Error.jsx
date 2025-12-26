import { Link, useRouteError } from "react-router-dom"
const Error = ()=>{

    const err = useRouteError()
    console.log(err)
    return(

        <div className="error">
        <h1>Oops! Something Went Wrong.</h1>
           <Link to="/">
        <button>Close</button>
      </Link>

           </div>
    )
 
}

export default Error

