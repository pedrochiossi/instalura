import React from 'react'; 
import { SwitchControl, SwitchWrapper } from './styles/switch'


export default function Switch({ checked, onChange, name }) {

  return (
    <SwitchWrapper>
      <input type="checkbox" checked={checked} name={name} onChange={onChange} />
      <SwitchControl checked={checked} />
    </SwitchWrapper>
  )

}