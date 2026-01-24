import React from 'react'

type Props = {
    children: React.ReactNode
}

const LabelTag = (props: Props) => {
  return (
    <div className = "block text-sm font-medium text-pink-600">{props.children}</div>
  )
}

export default LabelTag;