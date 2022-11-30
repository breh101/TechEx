import predictIcon1 from '../media/predict-icon-1.png'
import predictIcon2 from '../media/predict-icon-2.png'

const RangeOption = ({ range, option, handleOptionClick }) => {
  return (
    <button className={ 'rangeOption' + (range === option ? ' current' : '') } onClick={ handleOptionClick }>
      { option }
    </button>
  )
}

const PredictButton = ({current, handleOptionClick }) => {
  return (
    <button className={ 'predictButton' + (current ? ' current' : '') } onClick={ handleOptionClick }>
      <img height='25px' width='25px' style={ { marginLeft: '-2px', marginTop: '1px' } } src={ current ? predictIcon1 : predictIcon2 } alt='Predict Icon' />
    </button>
  )
}

export {RangeOption, PredictButton}