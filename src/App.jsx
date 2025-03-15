
import { useState } from 'react'
import './App.css'
import { Button, TextInput } from "evergreen-ui"


function App() {
  const [word, setWord] = useState("")
  const [loading, setLoading] = useState("false")
  const searchWord = async () => {
    setLoading(true)
    try {

    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false)
    }

    
  }

  return (
    <div>
    <h1>This is the start</h1>

    <TextInput onChange={e => setWord(e.target.value)} value={word} placeholder='Enter a word to search'/>

      <Button appearance='primary' onClick={searchWord} isLoading={loading} disabled={loading} >Search</Button>
    </div>
      
  )
}

export default App
