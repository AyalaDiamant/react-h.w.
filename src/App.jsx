
import { useState } from 'react';
import { workers as Workers } from "./data/workers";
import { customers as Customers } from "./data/customers";
import { ListPepole } from './components/listPepole.component';
import { Timer } from './components/timer.component';
import './App.css';
import { Outlet, Link } from "react-router-dom";


function App() {
  
  // const [showWorkers, setShowWorkers] = useState(false);
  // const [showCustomers, setShowCustomers] = useState(false);

  // const toggleShowWorkers = () => {
  //   setShowWorkers(!showWorkers);
  //   setShowCustomers(false);
  // };

  // const toggleShowCustomers = () => {
  //   setShowCustomers(!showCustomers);
  //   setShowWorkers(false);
  // };

  return (
    <>
      <Timer />
      {/* <h1>Workers and Customers</h1>
      <div>
        <button onClick={toggleShowWorkers}>Show Workers</button>
        <button onClick={toggleShowCustomers}>Show Customers</button>
      </div>
      {showWorkers && <ListPepole list={Workers} />}
      {showCustomers && <ListPepole list={Customers} />} */}
        <p><Link to="Workers">Workers</Link></p>
        <p><Link to="Customers">Customers</Link></p>
      <Outlet />

    </>
  )
}

export default App;

