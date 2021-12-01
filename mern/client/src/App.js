import React from "react";

// We use Route in order to define the different routes of our application
import { Routes ,Route } from 'react-router-dom';

// We import all the components we need in our app
import Navbar from "./components/navbar";
import Edit from "./components/edit";
import Create from "./components/create";
import RecordList from "./components/recordList";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={ <RecordList />}/>
      <Route path="/create" element={ <Create />}/>
      <Route path="/edit/:id" element={ <Edit />}/>
      </Routes>
    </div>
  );
};

export default App;
