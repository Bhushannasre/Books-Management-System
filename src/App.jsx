import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    
  <Provider store={appStore}>

   <UserContext.Provider value={{loggedInUser:"Bhushan Nasre"}}>
    <Header />
    <Outlet />
    <Footer />
   </UserContext.Provider>
  </Provider>
  
    
  );
}

export default App;
