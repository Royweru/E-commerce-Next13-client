import { create } from "zustand"

interface PreviewModalStore{
    isOpen:boolean,
    onOpen:(data:Product)=>void,
    onClose:()=>void,
    data?:Product
}
const usePreviewModal = create<PreviewModalStore>((set)=>({
    isOpen:false,
    data:undefined,
    onOpen:(data:Product)=>set({data,isOpen:true}),
    onClose:()=>set({isOpen:false})
}))

export default usePreviewModal