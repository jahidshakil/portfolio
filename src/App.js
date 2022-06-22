
import Spline from '@splinetool/react-spline';

import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';

function App() {
  return (
    < div className="flex w-screen min-h-screen flex-col  items-center justify-center relative bg-primary pb-20">
      {/* <div className='relative' id='home'>
      <Spline scene="https://prod.spline.design/oo6IxFu8UDjFUmjD/scene.spline"/>
      </div> */}
      <Nav/>
    
      <Spline scene="https://prod.spline.design/oo6IxFu8UDjFUmjD/scene.spline"/>
      <Main/>
    </div>
  );
}

export default App;
