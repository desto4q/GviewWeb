import { Button } from './ui/button'
import IconCont from './IconCont'
import { IconDownload } from '@tabler/icons-react'
import { data } from '@/SiteData/data'

function Hero() {
    return (
        <div className='h-dvh max-h-[620px] bg-neutral-800 flex flex-col rounded-lg items-center gap-6 relative isolate overflow-hidden'>
            <div className='flex justify-center flex-col max-w-2xl mt-auto px-4 sm:px-0'>
                <h1 className='sm:text-4xl text-center text-2xl'>Stream Your Favorite Anime Anytime, Anywhere</h1>
                {/* <p className='text-center text-md text-neutral-500'>Discover, Watch, and Enjoy the Best Anime with Gview</p> */}
                <p className='mx-auto text-sm sm:text-md capitalize mt-2 text-neutral-300'>version 1.2.0</p>
                <Button className='mx-auto w-fit capitalize mt-4 h-max ' onClick={() => {
                    const link = document.createElement('a');
                    link.href = data.downloadLink;
                    link.download = ''; // You can specify a default file name here if desired
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }}>
                    download now
                    <IconCont>
                        <IconDownload color='black' size={16} />
                    </IconCont>
                </Button>
            </div>
            <img src="https://wallpapers.com/images/featured/anime-characters-pictures-f746oqd5lwyzfati.jpg" className='absolute -z-10 top-0 w-full h-full object-cover opacity-50' alt="" />
            <div className='absolute -z-10 top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-black opacity-90'></div>
            <div className=' h-[60%] w-2/3 md:w-full max-w-sm p-2 overflow-hidden'>
                <img src="https://github.com/desto4q/Gview/blob/main/assets/Home.png?raw=true" alt="" className='w-lg mx-auto rounded-md' />
            </div>
        </div>
    )
}

export default Hero
2