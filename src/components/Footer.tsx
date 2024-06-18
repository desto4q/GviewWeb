import { Button } from './ui/button'
import { IconBrandGithub, IconCash, IconCashBanknote, IconDownload } from '@tabler/icons-react'
import IconCont from './IconCont'
import { Element } from "react-scroll"
import { data } from '@/SiteData/data'

function Footer() {
    return (
        <Element name='download'>
            <div className=' fixed bg-neutral-800 w-full bottom-0 h-full left-0 -z-10 flex flex-col'>
                <div className='mt-auto'>
                    <div className='mx-auto max-w-xl flex  justify-center flex-col items-center'>
                        <h1 className='text-3xl'>Stream Your Favorite Anime</h1>
                        <p className='text-neutral-300 text-lg capitalize'>download Gview now</p>
                        <div className='flex flex-col sm:flex-row items-center gap-6 py-6'>
                            <Button className='h-max gap-2'>
                                Get On Github
                                <IconCont ClassName="">
                                    <IconBrandGithub size={20} color='black' />

                                </IconCont>
                            </Button>
                            <Button className='h-max gap-2' onClick={() => {
                                const link = document.createElement('a');
                                link.href = data.downloadLink;
                                link.download = ''; // You can specify a default file name here if desired
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                            }} >
                                Download Link
                                <IconCont ClassName="">
                                    <IconDownload size={20} color='black' />
                                </IconCont>
                            </Button>
                            <Button className='h-max gap-2'>
                                Donate To Me <IconCashBanknote color='black' />
                            </Button>
                        </div>
                        <div className='h-20 w-full'>
                            <div className='h-px w-full bg-neutral-700 mt-4'></div>
                        </div>
                    </div>
                </div>
            </div></Element>
    )
}

export default Footer