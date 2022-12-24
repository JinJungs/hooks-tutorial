import { useState } from 'react';
import Counter from './Counter';
import Average from './Average';
import Info from './Info';

const App = () => {
  const [visible, setVisible] = useState(false)

  return (
    // <div>
    //   <button onClick={() => setVisible(!visible)}>
    //     {visible ? '숨기기' : '보이기'}
    //   </button>
    //   <br/>
    //  {visible && <Info /> }
    // </div>
    <Average/>
  )
}

export default App;