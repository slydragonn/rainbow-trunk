import NextLink from 'next/link'
import { ReactNode } from 'react'

interface LinkItemProps {
  children: ReactNode
  href: string,
  isExternal: boolean
}

const LinkItem = ({children, href, isExternal}: LinkItemProps) => {
  if(!isExternal) {
    return (
      <NextLink href={href}>
        <a>{children}</a>
      </NextLink>
    )
  }
  return (
    <NextLink href={href} passHref>
      <a target='_blank'>{children}</a>
    </NextLink>
  )
}

const Navbar = () => {
  return (
    <nav className='z-30 fixed inset-0 flex justify-around items-center w-full h-14 bg-white/50 backdrop-blur-sm'>
      <ul className='flex w-[200px] justify-between'>
        <li><LinkItem href='/editor' isExternal={false}>editor</LinkItem></li>
        <li><LinkItem href='/trunk' isExternal={false}>trunk</LinkItem></li>
      </ul>
    </nav>
  )
}

export default Navbar