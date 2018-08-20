import React from 'react'
function Step (props) {
  return (
    <input
      type='number'
      onChange={(e) => {props.onChange(props.id, e.target.value)}}
    />
  )
}
export default Step;
