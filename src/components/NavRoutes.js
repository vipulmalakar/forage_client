import React from "react";
import { Route, Routes } from "react-router-dom";

import Dashboard from "../pages/Dashboard/Dashboard";
import History from "../pages/History/History";
import Support from "../pages/Support/Support";
function NavRoutes(){
  return (<>
<Routes>
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/history"  component={History} /> 
      <Route path="/support" component={Support} />
     </Routes>
</>
  );
};

export default NavRoutes;
