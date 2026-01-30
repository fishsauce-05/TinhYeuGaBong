import React from 'react'

type Props = {
    icon?: React.ReactNode,
    title?: string,
    subtitle?: string[]
}

const TitleHeading = (props: Props) => {
  return (
    <div className = "text-center mb-4 text-pink-600">
        <span className = "text-6xl">{props.icon}</span>

        <h2 className = "font-bold text-2xl mt-2 mb-4">{props.title}</h2>

        {props.subtitle?.map((line, index) => (
            <p key={index} className = "text-base">{line}</p>
        ))}
    </div>
  )
}

export default TitleHeading;