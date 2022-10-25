import NextLink from 'next/link'
import { ReactNode } from 'react'

interface LinkItemProps {
  children: ReactNode
  href: string
  isExternal: boolean
}

const LinkItem = ({ children, href, isExternal }: LinkItemProps) => {
  if (!isExternal) {
    return (
      <NextLink href={href}>
        <a>{children}</a>
      </NextLink>
    )
  }
  return (
    <NextLink href={href} passHref>
      <a target="_blank">{children}</a>
    </NextLink>
  )
}

export default LinkItem
