import './App.css'

import Title from './components/Title';
import Links from './components/Links';

function App() {
  return (
    <div className='App'>
      <div className='FilterFrame'>
        <div className='Runner'></div>
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