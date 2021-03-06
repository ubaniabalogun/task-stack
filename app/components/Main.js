import React, { Component } from 'react'
import Radium from 'radium'
import { baseStyles } from '../styles/baseStyles'


const styles = {
  main: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: '72px',
    WebkitAppRegion: 'drag'
  }
}


function Main({children}) {
  return (
    <div style={[baseStyles.base, styles.main]}>
      {children}
    </div>
  )
}


Main = Radium(Main)

export default Main
