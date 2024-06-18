import { ReactElement } from 'react'

function ResponsiveBox({ children }: { children: ReactElement[] }) {
    return (
        <div className='flex gap-10 sm:gap-2 flex-col items-center md:flex-row   w-full'>
            {children}
        </div>
    )
}

export default ResponsiveBox