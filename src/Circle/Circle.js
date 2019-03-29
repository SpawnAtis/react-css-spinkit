import React from 'react'
import styles from './styles.css'

const Circle = () => {
  return (
    <>
      <style type="text/css">{`${styles}`}</style>
      <div className="lds-circle">
        <div />
      </div>
    </>
  )
}

export default Circle
