interface Billboard{
    id:string,
    label:string,
    imageUrl:string
}

interface Category{
    id:string,
    name:string,
    billboard:Billboard
}


interface Product{
    id:string,
    category:Category,
    name:string,
    price:string,
    isFeatured:boolean,
    size:Size,
    color:Color,
    images:Image[]
}

interface ImageType{
    id:string,
    url:string
}
interface Size{
    id:string,
    name:string,
    value:string
}
interface Color{
    id:string,
    name:string,
    value:string
}