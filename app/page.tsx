import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
   <main className='pd-5'>
      <h3 className="text-3xl font-bold underline">Hello world</h3>
      <Link href="/users">New Users</Link>
      <ProductCard />
   </main>
  )
}
