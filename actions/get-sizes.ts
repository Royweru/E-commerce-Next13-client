
const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`



const getSizes = async():Promise<Size[]> => {
  const res = await fetch(URL,{next:{revalidate:30}})
  if(!res.ok){
    throw new Error("There was a problem fetching your sizes")
  }
  return res.json()
}

export default getSizes