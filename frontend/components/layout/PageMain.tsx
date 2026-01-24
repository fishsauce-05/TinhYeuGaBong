import React from 'react'

type Props = {
    children: React.ReactNode
}

const PageMain = (props: Props) => {
  return (
    <div className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center">{props.children}</div>
  )
}

export default PageMain;