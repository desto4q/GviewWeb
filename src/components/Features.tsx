import React from 'react'
import ResponsiveBox from './ResponsiveBox'
import BoxChild from './BoxChild'
import { data } from '@/SiteData/data'
import { Element } from "react-scroll"
function Features() {
    return (
        <Element name='features'>
            <div className='flex flex-col gap-10 md:gap-0 '>
                <h1 className='mx-auto w-max  text-4xl mb-6 underline underline-offset-8 '> Features</h1>
                {/* <ResponsiveBox>
                <BoxChild className='flex flex-col justify-center gap-4'>
                    <h1>Search</h1>
                    <p>Effortlessly find your favorite anime titles or discover new ones by searching through our extensive database.</p>

                </BoxChild>
                <BoxChild />
            </ResponsiveBox> */}
                {data.features.map(({ title, description, icon, image }) => {
                    return (
                        <ResponsiveBox key={title}>

                            <BoxChild className=' flex items-center justify-center' >
                                <img src={image} className='h-4/5' alt="" />
                            </BoxChild>
                            <BoxChild className='flex flex-col justify-center gap-4'>
                                <h1 className='text-2xl'>{title}</h1>
                                <p className='text-lg text-neutral-400'>{description} {" "}{icon}</p>
                            </BoxChild>
                        </ResponsiveBox>
                    );
                })}
            </div>
        </Element>
    )
}

export default Features