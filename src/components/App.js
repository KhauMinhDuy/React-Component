import {data} from '../../SpeakerData'
import Header from './Header'
import { useState } from 'react'
import Speakers from './Speakers';

const App = (props) => {

  const [theme, setTheme] = useState('light');

  return (
    <div className={theme === 'light' ? 'container-fluid light' : 'container-fluid dark'}>
      <Header theme={theme}/>
      <Speakers 
        theme={theme} setTheme={setTheme} 
        data={data}
      />
    </div>
  )
}

export default App;