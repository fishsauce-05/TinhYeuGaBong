import Link, { LinkProps } from "next/link"
import React from "react"

type Props = LinkProps & {
  children: React.ReactNode
}

const LinkTag = ({ children, ...props }: Props) => {
  return (
    <Link
      {...props}
      className="text-gray-500 hover:underline hover:text-pink-600"
    >
      {children}
    </Link>
  )
}

export default LinkTag
