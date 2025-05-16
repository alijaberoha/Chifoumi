import { useState } from 'react'
import './App.css'
import Score from './assets/components/score'
import triangle from '../rock-paper-scissors-master/images/bg-triangle.svg'
import feuille from '../rock-paper-scissors-master/images/icon-scissors.svg'
import papier from '../rock-paper-scissors-master/images/icon-paper.svg'
import pierre from '../rock-paper-scissors-master/images/icon-rock.svg'

function App() {
  const [clicked, setClicked] = useState(false)
  const [selected, setSelected] = useState('')
  const [randomChoice, setRandomChoice] = useState('')
  const [score, setScore] = useState(0)
  const [resultMessage, setResultMessage] = useState('')

  const choices = ['feuille', 'papier', 'pierre']

  const handleClick = (choix) => {
    const alea = choices[Math.floor(Math.random() * choices.length)]
    setSelected(choix)
    setRandomChoice(alea)
    setClicked(true)

    const result = getWinner(choix, alea)
    if (result === 'win') {
      setScore(prev => prev + 1)
      setResultMessage('YOU WIN')
    } else if (result === 'lose') {
      setScore(prev => prev - 1)
      setResultMessage('YOU LOSE')
    } else {
      setResultMessage('SAME SAME')
    }
  }

  const resetGame = () => {
    setClicked(false)
    setSelected('')
    setRandomChoice('')
    setResultMessage('')
  }

  const getWinner = (joueur, ordi) => {
    if (joueur === ordi) return 'draw'
    if (
      (joueur === 'feuille' && ordi === 'pierre') ||
      (joueur === 'papier' && ordi === 'feuille') ||
      (joueur === 'pierre' && ordi === 'papier')
    ) return 'win'
    return 'lose'
  }

  const getClass = (choix) => {
    if (choix === 'pierre') return 'pierre'
    if (choix === 'papier') return 'papier'
    if (choix === 'feuille') return 'feuille'
    return ''
  }

  const getImage = (choix) => {
    if (choix === 'pierre') return pierre
    if (choix === 'papier') return papier
    if (choix === 'feuille') return feuille
    return ''
  }

  return (
    <div>
      <Score score={score} />
      <div className="cont">
        <div className={`jeu ${clicked ? 'no-bg' : ''}`}>
          <div className="ligne1">
            {clicked ? (
              <>
                <button className={getClass(selected)}>
                  <img src={getImage(selected)} alt={selected} />
                </button>
                <button className={getClass(randomChoice)}>
                  <img src={getImage(randomChoice)} alt={randomChoice} />
                </button>
              </>
            ) : (
              <>
                <button className="feuille" onClick={() => handleClick('feuille')}>
                  <img src={feuille} alt="feuille" />
                </button>
                <button className="papier" onClick={() => handleClick('papier')}>
                  <img src={papier} alt="papier" />
                </button>
              </>
            )}
          </div>
                {clicked && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold',color: 'white' }}>{resultMessage}</h2>
        </div>
      )}
      {clicked && (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <button
            onClick={resetGame}
            style={{
              backgroundColor: '#fff',
              border: '2px solid #000',
              padding: '10px 20px',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            PLAY AGAIN
          </button>
        </div>
      )}
          {!clicked && (
            
            <div className="ligne2">
              <button className="pierre" onClick={() => handleClick('pierre')}>
                <img src={pierre} alt="pierre" />
              </button>
            </div>
          )}
        </div>
      </div>




    </div>
  )
}

export default App
