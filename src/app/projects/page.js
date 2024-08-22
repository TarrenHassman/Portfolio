"use client"
import React from 'react'
import {projectsData} from '../components/data'
import Project from './Project'
import Background from '../components/background/Background'
import HomeButton from '../components/navigation/HomeButton'
import Particles from '../components/3components/Particles'
export default function ProjectList() {
  return (
    <div
    className='w-full max-w-auto  xl:max-w-4xl px-4 mx-auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center'
    > <Background></Background>
         <Particles></Particles>
    <div>
      <HomeButton></HomeButton>
    </div>
      {projectsData.map((project, index)=>{
        return <div
        key={index}
        >
          <Project
          {...project}
          ></Project>
        </div>
      })}
           <Particles></Particles>
    </div>
  )
}
