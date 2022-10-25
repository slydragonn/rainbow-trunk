/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'

const RandomColor = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = Math.floor(Math.random() * 5)
      setIndex(() => (newIndex < 4 ? newIndex : 0))
    }, 900)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const COLORS = ['#9ADCFF', '#FF8AAE', '#FFB2A6', '#FFF89A']

  return (
    <div
      style={{ backgroundColor: COLORS[index] }}
      className="w-full h-full transition-all duration-300"
    ></div>
  )
}

const RandomColorLogo = () => {
  return (
    <section className="relative w-[350px] h-[350px] rounded-3xl overflow-hidden shadow-lg">
      <div className="w-full h-1/4">
        <RandomColor />
      </div>
      <div className="w-full h-1/4">
        <RandomColor />
      </div>
      <div className="w-full h-1/4">
        <RandomColor />
      </div>
      <div className="w-full h-1/4">
        <RandomColor />
      </div>
      <img
        src="/face.png"
        alt="rainbow trunk logo"
        className="absolute left-0 right-0 bottom-4 m-auto w-[250px]"
      />
    </section>
  )
}

export const LogoSvg = (props: any) => (
  <svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 2.92A2.92 2.92 0 0 1 2.92 0h34.16A2.92 2.92 0 0 1 40 2.92V10H0V2.92Z"
      fill="#9ADCFF"
    />
    <path d="M0 20h40v10H0V20Z" fill="#FFB2A6" />
    <path
      d="M0 30h40v7.08A2.92 2.92 0 0 1 37.08 40H2.92A2.92 2.92 0 0 1 0 37.08V30Z"
      fill="#FF8AAE"
    />
    <path d="M0 10h40v10H0V10Z" fill="#FFF89A" />
    <path
      d="M17.467 18.133a5.333 5.333 0 1 1-10.667 0 5.333 5.333 0 0 1 10.667 0ZM33.067 18.133a5.333 5.333 0 1 1-10.667 0 5.333 5.333 0 0 1 10.667 0ZM10.85 29.94c-.495-1.535.857-2.873 2.47-2.873h13.227c1.613 0 2.964 1.338 2.47 2.873a9.562 9.562 0 0 1-9.084 6.593 9.562 9.562 0 0 1-9.083-6.593Z"
      fill="#fff"
    />
  </svg>
)

export default RandomColorLogo
