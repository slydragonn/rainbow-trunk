import { NextPage } from "next";
import { Navbar } from "../components";

const Editor: NextPage = () => {
  return (
    <>
      <Navbar />
      <main className="mt-14">
        <h1>Editor</h1>
      </main>
    </>
  )
}

export default Editor