import React from 'react'

type Props = {
    type?: string
    placeholder?: string
    value?: string
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    required?: boolean
}

const InputTag = (props: Props) => {
  return (
    <input 
        type = {props.type}
        className = "w-full px-4 py-2 text-gray-500 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        placeholder = {props.placeholder}
        value = {props.value}
        onChange = {props.onChange}
        required = {props.required}
    />
  )
}

export default InputTag;