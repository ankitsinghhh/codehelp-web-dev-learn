
import React from 'react';
import Random from './components/Random'
import Tag from './components/Tag'


export default function App() {
  return (
    <div className='w-full h-min-screen flex flex-col background relative items-center pb-10'>

      <h1 className="bg-white rounded-md   text-center mt-[40px] w-11/12 px-10 py-2 text-4xl font-bold">Random GIF</h1>

      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">

        <Random/>

        <Tag/>

      </div>


    </div>
  )

}
