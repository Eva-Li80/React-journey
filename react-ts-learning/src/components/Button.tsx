import React from 'react'

type Button = {
    text: string;
}

const Button = ({text}: Button) => {
  return (
    <div>
      {text}
    </div>
  )
}

export default Button
