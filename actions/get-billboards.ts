import { error } from "console"


const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`

const getBillboard =async (id:string) => {
  const res = await fetch(`${URL}/${id}`)
  if(!res.ok){
    throw new Error("There was a problem fetching your billboard")
  }

  return res.json()
}


export default getBillboard