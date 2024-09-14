import React from 'react';
import Header from './Components/Header/header'; // Make sure the path is correct
import './App.css'; // If you have additional global styles
import ImageSlider from './Components/Slider/ImageSlider';


function App() {
  return (
    <div className="App">
    <Header/>
    <ImageSlider/>
    </div>
  );
}

export default App;
