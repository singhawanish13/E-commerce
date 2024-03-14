import React from 'react'

const Category = ({finalCategory, setCatname}) => {

    const cat = finalCategory.map((v,i)=>{
        return(
            <li onClick={()=>setCatname(v)} key={i} className='p-[7px] cursor-pointer text-[20px] font-serif font-[500] mb-2 hover:bg-[#ccc] '>{v}</li>
        )

    })

  return (
    <div>
        <h3 className='text-[25px] font-[500] p[10px]'>Product Category</h3>

        <ul>
            {cat}
        </ul>
    </div>
  )
}


export default Category;
