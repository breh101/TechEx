import { useState, useEffect } from "react";
import HistoricalChart from "./components/HistoricalChart"
import Dropdown from "./components/Dropdown";

const MainPage = () => {
  const [values, setValues] = useState({
    base: '...',
    target: '...',
    histData: [],
    predData: []
  })

  const [dimensions, setDimensions] = useState(getDimensions());

  useEffect(() => {
    function handleWindowResize() {
      setDimensions(getDimensions());
    }

    window.addEventListener('resize', handleWindowResize);
  
    return () => {
      window.addEventListener('resize', handleWindowResize);
    }
  }, []);

  return (
    <>
      <div className='dropdown'>
        <Dropdown setValues={ setValues } />
      </div>
      <div className='container'>
        <p style={ { textAlign: 'right' } }>
          1 {values.base} to {values.target}
        </p>
      </div>
      <div className='container'>
        <HistoricalChart base={ values.base } target={ values.target } histData={ values.histData } predData={ values.predData } dimensions={ dimensions } />
      </div>
    </>
  )
}

export default MainPage

const getDimensions = () => {
  const { innerWidth } = window;

  let width;

  if (innerWidth <= 768) {
    width = innerWidth * (1 - 0.02 * 2)
  } else if (innerWidth <= 1024) {
    width = innerWidth * (1 - 0.08 * 2)
  } else {
    width = innerWidth * (1 - 0.12 * 2)
  }


  return {
    width: width,
    height: width / 2
  }
}