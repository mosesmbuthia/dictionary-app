
import { useState } from 'react'
import './App.css'
import { Button, Heading, Pane, TextInput } from "evergreen-ui"


function App() {
  const [word, setWord] = useState("")
  const [loading, setLoading] = useState(false)
  const [wordDetails, setWordDetails] = useState(null)
  const searchWord = async () => {
    if (!word?.length) return
    setLoading(true)
    try {
      const response = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)

      const data = await response?.json();
      console.log(data);
      setWordDetails(data[0]);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false)
    }


  }

  return (
    <div className='dictionary'>
      <div className="home-page">
        <h1> free online Dictionary App </h1>
        <p> developed by &copy; <a href="www.linkedin.com/in/mosesmbuthia">Moses Mbuthia</a></p>
        <p>Type a word to find its meaning</p>
        <TextInput onChange={e => setWord(e.target.value)} value={word} placeholder='Enter a word to search' />

        <Button
          backgroundColor='red'
          fontSize='12px'
          fontWeight='600'

          appearance='primary'
          onClick={searchWord}
          isLoading={loading}
          disabled={loading} >Search</Button>
      </div>



      {wordDetails?.meanings && (
        <Pane 
        backgroundColor="rgb(255, 237, 250)"
        fontSize="20px"
        width='100vh'
        fontWeight="500"
        >
          <Heading>Meanings:</Heading>
          {wordDetails.meanings.map((meaning, index) => (
            <Pane key={index}>
              <Heading>{meaning.partOfSpeech}</Heading>
              <ul>
                {meaning.definitions.map((def, i) => (
                  <li key={i}>{def.definition}</li>
                ))}
              </ul>

            </Pane>
          ))}
        </Pane>

      )}


    </div>

  )
}

export default App
