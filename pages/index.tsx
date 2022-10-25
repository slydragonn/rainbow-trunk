import type { NextPage } from 'next'
import Head from 'next/head'
import { Button, LinkItem, Navbar, RandomColorLogo } from '../components'

const Home: NextPage = () => {
  return (
    <div className="flex justify-center">
      <Head>
        <title>Rainbow Trunk - Home</title>
        <meta
          name="description"
          content="Rainbow Trunk - Simple color palette editor and storage"
        />
      </Head>
      <Navbar />
      <main className="flex flex-col md:flex-row justify-around md:justify-between items-center w-full md:w-[768px] min-h-[90vh] mt-14">
        <article className="flex flex-col items-center md:items-start">
          <h1 className="text-4xl font-thin text-dark">
            <span className="font-semibold">Rainbow</span>Trunk
          </h1>
          <p className="text-lg font-thin my-4">
            simple color palette editor and storage
          </p>
          <Button
            size={{ w: '150px', h: '50px' }}
            theme="dark"
            styles="font-semibold text-lg"
          >
            <LinkItem href="/editor" isExternal={false}>
              CREATE
            </LinkItem>
          </Button>
        </article>
        <section>
          <RandomColorLogo />
        </section>
      </main>
    </div>
  )
}

export default Home
