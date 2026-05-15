import { useState } from 'react';
import Box from "./components/Box";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='lista'>
      <Box className="tytuł" borderColor="black" />
    </div>
      
    </>
  );
}

export default App
