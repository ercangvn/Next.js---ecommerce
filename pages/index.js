import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={"home-page"}>
      home page
      <Image
          src="/img/vercel.svg"
          alt="Picture of the author"
          width={500}
          height={500}
      />
    </div>
  )
}
