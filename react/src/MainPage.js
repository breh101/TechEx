import { useState, useEffect } from "react";

import HistoricalChart from "./components/HistoricalChart"
import Dropdown from "./components/Dropdown";

const MainPage = () => {
  const base = 'USD',
    target = 'EUR',
    data = [
      ['2022-09-01','1.005815'],
      ['2022-09-02','1.002895'],
      ['2022-09-03','1.00425'],
      ['2022-09-04','1.00425'],
      ['2022-09-05','1.006995'],
      ['2022-09-06','1.009255'],
      ['2022-09-07','1.002975'],
      ['2022-09-08','1.003245'],
      ['2022-09-09','0.995025'],
      ['2022-09-10','0.98485'],
      ['2022-09-11','0.98485'],
      ['2022-09-12','0.98615'],
      ['2022-09-13','1.000355'],
      ['2022-09-14','0.999825'],
      ['2022-09-15','0.999635'],
      ['2022-09-16','0.999625'],
      ['2022-09-17','0.99847'],
      ['2022-09-18','0.99847'],
      ['2022-09-19','0.998735'],
      ['2022-09-20','1.002405'],
      ['2022-09-21','1.013345'],
      ['2022-09-22','1.015995'],
      ['2022-09-23','1.02915'],
      ['2022-09-24','1.03203'],
      ['2022-09-25','1.03203'],
      ['2022-09-26','1.03968'],
      ['2022-09-27','1.04388'],
      ['2022-09-28','1.030585'],
      ['2022-09-29','1.022185'],
      ['2022-09-30','1.02205'],
      ['2022-10-01','1.01991'],
      ['2022-10-02','1.01991'],
      ['2022-10-03','1.020375'],
      ['2022-10-04','1.002845'],
      ['2022-10-05','1.013895'],
      ['2022-10-06','1.020305'],
      ['2022-10-07','1.024475'],
      ['2022-10-08','1.02668'],
      ['2022-10-09','1.02668'],
      ['2022-10-10','1.031865'],
      ['2022-10-11','1.023605'],
      ['2022-10-12','1.032895'],
      ['2022-10-13','1.022445'],
      ['2022-10-14','1.028675'],
      ['2022-10-15','1.02845'],
      ['2022-10-16','1.02845'],
      ['2022-10-17','1.016265'],
      ['2022-10-18','1.014595'],
      ['2022-10-19','1.023625'],
      ['2022-10-20','1.020125'],
      ['2022-10-21','1.015785'],
      ['2022-10-22','1.01405'],
      ['2022-10-23','1.01405'],
      ['2022-10-24','1.013075'],
      ['2022-10-25','1.005075'],
      ['2022-10-26','0.992605'],
      ['2022-10-27','1.00245'],
      ['2022-10-28','1.006385'],
      ['2022-10-29','1.00355'],
      ['2022-10-30','1.00355']
    ];

  const [dimensions, setDimensions] = useState(getDimensions())

  useEffect(() => {
    function handleWindowResize() {
      setDimensions(getDimensions());
    }

    window.addEventListener('resize', handleWindowResize);
  
    return () => {
      window.addEventListener('resize', handleWindowResize);
    }
  }, [])
  

  return (
    <>
      <div className='dropdown'>
        <Dropdown.baseDropdown/>
        <Dropdown.baseValue/>
        <Dropdown.targetDropdown/>
        <Dropdown.targetValue/>
      </div>
      <div className='container'>
        <p style={ { textAlign: 'right' } }>
          Welcome to <strong>TechEX</strong>, your go-to currency exchange website.
        </p>
      </div>
      <div className='container'>
        <HistoricalChart base={ base } target={ target } allData={ data } dimensions={ dimensions } />
      </div>
    </>
  )
}

export default MainPage

const getDimensions = () => {
  const { innerWidth } = window;
  return {
    width: innerWidth - 200 - 200,
    height: (innerWidth - 200 - 200) / 2
  }
}