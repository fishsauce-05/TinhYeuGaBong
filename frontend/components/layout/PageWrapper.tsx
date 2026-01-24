import React from 'react'

type Props = {
    children: React.ReactNode
}

const PageWrapper = (props: Props) => {
  return (
    <div className='flex min-h-screen items-center justify-center bg-custom font-roboto'>{props.children}</div>
  )
}

export default PageWrapper;