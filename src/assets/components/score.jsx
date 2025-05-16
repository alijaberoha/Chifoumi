import './score.css'
import logo from '../../../rock-paper-scissors-master/images/logo.svg'

function Score({ score }) {
  return (
    <div className='container'>
      <div className='case'>
        <div className='logo'>
          <img src={logo} alt="" />
        </div>
        <div className='score'> 
          <p>SCORE</p>
          <h1>{score}</h1> {/* ← valeur dynamique */}
        </div>
      </div>
    </div>
  )
}

export default Score
