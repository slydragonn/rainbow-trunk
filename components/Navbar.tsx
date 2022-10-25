import { useState } from 'react'
import { CgMenu as MenuIcon } from 'react-icons/cg'
import { LogoSvg } from './Logo'
import LinkItem from './LinkItem'
import Button from './Button'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<'hidden' | 'visible'>('hidden')

  const toggleMenuVisibility = () => {
    if (showMenu === 'hidden') {
      return setShowMenu(() => 'visible')
    }
    return setShowMenu(() => 'hidden')
  }

  return (
    <nav className="z-30 fixed inset-0 flex justify-center items-center w-full h-16 text-dark font-thin bg-white/80 backdrop-blur-sm px-5">
      <div className="flex w-full md:w-[768px] justify-between">
        <LinkItem href="/" isExternal={false}>
          <LogoSvg className='hover:rotate-12 transition-all duration-200' />
        </LinkItem>
        <ul className="hidden md:flex w-[200px] justify-between items-center text-lg">
          <li className="hover:underline font-normal">
            <LinkItem href="/editor" isExternal={false}>
              Editor
            </LinkItem>
          </li>
          <li>
            <LinkItem href="/login" isExternal={false}>
              <Button size={{w: '100px', h: '40px'}} theme='dark' styles='font-semibold'>Login</Button>
            </LinkItem>
          </li>
        </ul>
        <section className="relative flex md:hidden">
          <LinkItem href="/login" isExternal={false}>
              <Button size={{w: '100px', h: '40px'}} theme='dark' styles='font-semibold mr-4'>Login</Button>
          </LinkItem>
          <button
            onClick={toggleMenuVisibility}
            className="hover:-translate-y-1 transition-all duration-300"
          >
            <MenuIcon className="w-7 h-7 text-dark" />
          </button>
          <ul
            style={{ visibility: showMenu }}
            className="absolute top-11 right-0 flex flex-col items-center justify-around w-36 h-28 bg-dark text-white text-lg rounded p-5 shadow-lg"
          >
            <li className="hover:underline">
              <LinkItem href="/editor" isExternal={false}>
                Editor
              </LinkItem>
            </li>
            <li className="hover:underline">
              <LinkItem href="/trunk" isExternal={false}>
                Trunk
              </LinkItem>
            </li>
          </ul>
        </section>
      </div>
    </nav>
  )
}

export default Navbar
