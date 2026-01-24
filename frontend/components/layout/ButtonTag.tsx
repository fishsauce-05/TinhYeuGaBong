import React from 'react'

type Props = {
    type?: "button" | "submit" | "reset" | undefined
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    children: React.ReactNode
}

const ButtonTag = (props: Props) => {
  return (
    <button 
        type = {props.type}
        className = "w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition-colors"
        onClick = {props.onClick}
    >{props.children}</button>
  )
}

export default ButtonTag;