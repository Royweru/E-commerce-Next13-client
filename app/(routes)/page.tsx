import Container from '@/components/ui/container'
import Image from 'next/image'
import Billboard from '@/components/billboard'
import getBillboard from '@/actions/get-billboards'
import ProductList from '@/components/product-list'
import getProducts from '@/actions/get-products'
export default async function Home() {
  const products = await getProducts({isFeatured:true})
  const billboard = await getBillboard("1132e424-1630-4a73-81c0-71181d1aa176")
 
  return (
    <main className="flex min-h-screen flex-col justify-between w-full ">
      <Container>
        <div className=' space-y-10 pb-10 '>
          <Billboard data={billboard} />
        </div>
        <hr />
        <div className=' flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
           <ProductList title="Featured Products" items={products}/>
        </div>

      </Container>
    </main>
  )
}
