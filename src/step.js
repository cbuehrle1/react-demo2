import React from 'react'
function step (props) {
  return (
    <input
      type='number'
      onChange={(e) => {props.onChange(props.id, e.target.value)}}
    />
  )
}
export default step;
