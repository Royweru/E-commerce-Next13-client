
const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`



const getCategory = async(id:string):Promise<Category> => {
  const res = await fetch(`${URL}/${id}`,{next:{revalidate:10}})
  if(!res.ok){
    throw new Error("There was a problem fetching your category")
  }
  return res.json()
}

export default getCategory