


const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

const getProduct =async (id:string):Promise<Product> => {
  const res = await fetch(`${URL}/${id}`)
  if(!res.ok){
    throw new Error("There was a problem fetching your product")
  }

  return res.json()
}


export default getProduct