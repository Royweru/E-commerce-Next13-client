import getCategory from '@/actions/get-category'
import getColors from '@/actions/get-colors'
import getSizes from '@/actions/get-sizes'
import Billboard from '@/components/billboard'
import Container from '@/components/ui/container'
import getProducts from '@/actions/get-products'
import Filter from '@/components/filter'
import React from 'react'
import NoResults from '@/components/no-results'
import MobileFilters from '@/components/mobile-filters'
import ProductCard from '@/components/product-card'

export const revalidate = 0
interface CategoryPageProps{
    params:{
        categoryId:string
    },
    searchParams:{
        colorId:string,
        sizeId:string
    }
}
const CateoryPage:React.FC<CategoryPageProps> = async({
    params,
    searchParams
}) => {
    const products = await getProducts({ 
        categoryId: params.categoryId,
        colorId: searchParams.colorId,
        sizeId:searchParams.sizeId
      });
    const sizes = await getSizes()
    const colors = await getColors()
    const category = await getCategory(params.categoryId)
  return (
    <div className='bg-white'>
       <Container>
         <Billboard data={category.billboard}/>
         <div className=' px-4 sm:px-6 lg:px-8 '>
            <div className=' lg:grid lg:grid-cols-5 lg:gap-8'>
             <MobileFilters sizes={sizes} colors={colors} />
            <div className=' hidden lg:block'>
              <Filter
              valueKey="sizeId"
              name ="Sizes"
              data={sizes}
              />
                <Filter
              valueKey="colorId"
              name ="Colors"
              data={colors}
              />
          </div>
          <div className=' mt-6 lg:col-span-4 lg:mt-0'>
              {products.length===0 && <NoResults />}
              <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              {products.map(product=>(
                <ProductCard
                 key={product.id}
                 data={product}
                 />
              ))}
              </div>
              
          </div>
            </div>
          {/* Add mobile filters */}
          
         </div>
       </Container>
     </div>
  )
}

export default CateoryPage