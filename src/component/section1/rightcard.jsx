import React from 'react'
import Rightcardcontent from './rightcardcontent.jsx';

export const rightcard = (props) => {
     console.log(props.color);
  return (
    <div className='h-full w-80 shrink-0 relative overflow-hidden rounded-4xl'>
      <img className='h-full w-full object-cover'  src={props.img}></img>

  <Rightcardcontent  color={props.color} id={props.id} intro={props.intro} tag={props.tag}/>
    

    </div>
  
  )
}
export default rightcard;