import { useRouteError } from "react-router-dom";
import "./style.css";

function Error() {
  const error = useRouteError();

  return (
   
    <div className="error-content">
      <h1>404 Error! Page Not Found</h1>
      <h2>Something went wrong.</h2>
      <p>{error?.statusText || error?.message}</p>
      <button onClick={() => window.history.back()} className="btn">Go Back</button>
    </div>
  
  );
}

export default Error;
