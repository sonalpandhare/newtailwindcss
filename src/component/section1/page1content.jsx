import React from 'react'
import Rightcontent from './rightcontent.jsx';
import Leftcontent from './leftcontent.jsx';

export const page1content = (props) => {

  
  
  return (
    <div className='py-10 flex item-center gap-10 h-[90vh] px-18'>
        <Leftcontent />
        <Rightcontent user={props.user}/>
       
    </div>
  )
}
export default page1content;