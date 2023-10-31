"use client"
import PreviewModal from '@/components/preview-modal'
import React,{useState,useEffect} from 'react'

const ModalProvider = () => {
    const[isMounted,setIsMounted] = useState(false)
   
    useEffect(()=>{
     setIsMounted(false)
    },[])
    
    if(isMounted){
        return null
    }
  return (
    <>
     <PreviewModal />
    </>
  )
}

export default ModalProvider