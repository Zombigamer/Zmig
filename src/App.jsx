import './App.css'

import Title from './components/Title';
import Links from './components/Links';

function App() {
  return (
    <div className='App'>
      <div className='FilterFrame'>
        {/* <div className='Runner'></div>
        <div className='Space'></div>
        <div className='Runner'></div> */}
        <div className='Runner1'></div>
        
      </div>
      <div className='Animation'></div>
      <div className='ContentFrame'>
        <div className='Content'>
          <Title/>
          <Links/>
        </div>
      </div>
      <div className='Animation'></div>
    </div>
    
  )
}



export default App