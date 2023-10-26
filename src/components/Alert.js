import React from 'react'

function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show background-${props.alert.type}`} role="alert">
  {props.alert.type} <strong>{props.alert.message}</strong>
  </div>
  )
}

export default Alert
