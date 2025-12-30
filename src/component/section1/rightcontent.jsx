import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Rightcard from './rightcard.jsx';



export const rightcontent = (props) => {
  console.log(props.user.color);
  return (

    <div id="right" className='w-2/3 p-6 h-full flex flex-nowrap gap-10 overflow-x-auto rounded-4xl'>
    
    {/* <Rightcard/>
     <Rightcard/>
      <Rightcard/>  */}
      {props.user.map(function(elem,idx){
        return <Rightcard key={idx} color={elem.color} id={idx} img={elem.img} intro={elem.intro} tag={elem.tag}/>
      })}

     
    </div>
  )
}
export default rightcontent;
