
const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`



const getCategories = async():Promise<Category[]> => {
  const res = await fetch(URL,{next:{revalidate:30}})
  if(!res.ok){
    throw new Error("There was a problem fetching your categories")
  }
  return res.json()
}

export default getCategories