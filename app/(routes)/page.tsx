import Container from '@/components/ui/container'
import Image from 'next/image'
import Billboard from '@/components/billboard'
import getBillboard from '@/actions/get-billboards'
export default async function Home() {
  const billboard = await getBillboard("1132e424-1630-4a73-81c0-71181d1aa176")
  console.log(billboard)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Container>
        <div className=' space-y-10 '>
          <Billboard data={billboard} />
        </div>
      </Container>
    </main>
  )
}
