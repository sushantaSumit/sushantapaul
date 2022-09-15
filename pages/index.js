import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <div className="h-screen w-full bg-gray-100 grid place-content-center">
        <h1 className="text-center font-extrabold text-transparent cursor-pointer text-8xl bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Hello from Sushanta Paul</h1>
      </div>
    </>
  )
}
