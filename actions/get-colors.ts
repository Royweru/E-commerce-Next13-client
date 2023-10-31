
const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`



const getColors = async():Promise<Color[]> => {
  const res = await fetch(URL,{next:{revalidate:20}})
  if(!res.ok){
    throw new Error("There was a problem fetching your colors")
  }
  return res.json()
}

export default getColors