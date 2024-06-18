import React from 'react'
import { Button } from './ui/button'
import { IconBrandGithub, IconBrandGithubFilled } from '@tabler/icons-react'
import IconCont from './IconCont'

function Footer() {
    return (
        <div className='fixed bg-neutral-800 w-full bottom-0 h-full left-0 -z-10 flex flex-col'>
            <div className='mt-auto'>
                <div className='mx-auto max-w-xl flex  justify-center flex-col items-center'>
                    <h1 className='text-3xl'>Stream Your Favorite Anime</h1>
                    <p className='text-neutral-300 text-lg capitalize'>download Gview now</p>
                    <div className='flex items-center gap-6 py-6'>
                        <Button className='h-max gap-2'>
                            Get On Github
                            <IconCont ClassName="">
                                <IconBrandGithub  size={20} color='black'/>

                            </IconCont>
                        </Button>
                        <Button>
                            Download Link
                        </Button>
                        <Button>
                            Donate To Me
                        </Button>
                    </div>
                    <div className='h-20 w-full'>
                        <div className='h-px w-full bg-neutral-700 mt-4'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer