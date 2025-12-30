import React from 'react'

export const rightcardcontent = (props) => {
    console.log(props.color);
  return (
      <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between '>
        <h2 className='bg-white text-2xl  font-semibold rounded-full h-14 w-14 flex justify-center items-center'>{props.id+1}</h2>
        <div>
          <p className='text-lg  text-white mb-14 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quisquam at fugit, quod ad qui repudiandae, aperiam officia quam pariatur autem a modi dolor unde molestias quae illum voluptatem. Quibusdam!</p>
      
          <div>
            <button style={{backgroundColor:props.color}} className='bg-blue-600 text-white font-medium px-8 py-3 rounded-full '>{props.tag}</button>
            <button className='bg-blue-600 text-white font-medium px-3 py-2 rounded-full '><i className="ri-arrow-right-line"></i></button>
          </div>
          </div>
      </div>
  )
}
export default rightcardcontent;