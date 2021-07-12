// import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
// import Header from './components/Header';
import About from './components/About';

function App() {
  const [currentTab, setCurrentTab] = useState("about");

  // This function checks to see which tab is selected and then generates the appropriate tab.
  const renderTab = () => {
    switch (currentTab) {
      case "about":
      return <About />;
    }
  
  };
        
}       
        
        
        
export default App;
