import React from 'react'

type Props = {
  children: React.ReactNode;
}

const FormTag = ({children, ...props}: Props & React.FormHTMLAttributes<HTMLFormElement>) => {
  return (
    <form className = "flex flex-col gap-4" {...props}>
      {children}
    </form>
  )
}

export default FormTag;