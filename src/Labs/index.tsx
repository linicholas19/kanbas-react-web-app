import Nav from "../Nav";
import Assignment3 from "./a3";
import Assignment4 from "./a4";
import { Routes, Route, Navigate }
   from "react-router";
import store from "./store";
import { Provider } from "react-redux";

function Labs() {
   return (
      <div>
         <Provider store={store}>
            <div className="container-fluid">
               <Nav />
               <Routes>
                  <Route path="/"
                     element={<Navigate
                        to="a4" />} />
                  <Route path="a3"
                     element={<Assignment3 />} />
                  <Route path="a4"
                     element={<Assignment4 />} />
               </Routes>
               <h1>Labs</h1>
               ...
            </div>
         </Provider>
      </div>
   );
}
export default Labs;