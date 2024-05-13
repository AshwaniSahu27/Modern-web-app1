import React from 'react'

function Project({data,style}) {
  return (
    <div className=' relative w-1/2 text-white py-5 px-2 flex gap-2 flex-col'>

         <h1 className={`absolute top-1/2 ${style} text-yellow-700 z-10 text-[5vw] -translate-x-1/2 -translate-y-1/2`}>
            {data.name.split("").map((key)=><span>{key}</span>)}
         </h1>

        <div className='flex gap-2  items-center '>
            <div className=' w-3 h-3 bg-slate-100 rounded-full'></div>
            {data.name}
        </div>
        <div >
            <img src={data.image} alt="" className=' rounded-lg ' />
        </div>
        <div className='flex gap-2'>
            {data.array.map((data)=>{

                return <button className='py-1 px-4 bg-slate-100 rounded-3xl text-zinc-900'>{data} </button>
            })}
            
        </div>

    </div>
  )
}

export default Project