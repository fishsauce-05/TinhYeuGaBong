import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonTag = (props: Props) => {
  return (
    <button 
        className = "w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition-colors"
        {...props}
    >{props.children}</button>
  )
}

export default ButtonTag;