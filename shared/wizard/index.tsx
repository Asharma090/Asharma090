import React from 'react'
import style from '../wizard/wizard.module.scss'

export default function Wizard({ children }: any) {
  return (
    <div className={style['wizard-sec']}>
      <h1>Vendor Registration</h1>
      {children}
    </div>
  )
}
