import React from 'react'
import styles from './styles.css'

const Ripple = () => (
  <>
    <style>{styles.toString()}</style>
    <div className="lds-ripple">
      <div />
      <div />
    </div>
  </>
)

export default Ripple
