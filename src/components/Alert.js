import React from 'react'

function Alert(props) {
  return (
   <div style={{
    height: '80px'
   }}>
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show background-${props.alert.type}`} role="alert">
  {props.alert.type} <strong>{props.alert.message}</strong>
  </div>}
  </div>
  )
}

export default Alert
