
import Spline from '@splinetool/react-spline';
import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';

function App() {
  const [isActive, setisActive] = useState(false);
  return (
    <div className="flex w-screen h-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
      {/* <div className='relative' id='home'>
      <Spline scene="https://prod.spline.design/oo6IxFu8UDjFUmjD/scene.spline"/>
      </div> */}
      <Nav/>
      <Spline scene="https://prod.spline.design/oo6IxFu8UDjFUmjD/scene.spline"/>
    </div>
  );
}

export default App;
