import React from 'react'

type Props = {
    children: React.ReactNode
}

const PageCard = (props: Props) => {
  return (
    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">{props.children}</div>
  )
}

export default PageCard;