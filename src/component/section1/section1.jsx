import React from 'react'
import Navbar from '../section1/navbar.jsx';
import Page1content from './page1content.jsx';

export const section1 = (props) => {

   console.log(props);
  return (

    <div className='h-screen w-full'>
    <Navbar/>
    <Page1content user={props.user} />
    </div>
  )
}
export default section1;