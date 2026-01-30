import React from 'react'

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const InputTag = (props: Props) => {
  return (
    <input 
        className = "w-full px-4 py-2 text-gray-500 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        {...props}
    />
  )
}

export default InputTag;