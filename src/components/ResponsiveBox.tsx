import React, { ReactElement } from 'react'

function ResponsiveBox({ children }: { children: ReactElement[] }) {
    return (
        <div className='flex  flex-col items-center md:flex-row  gap-1  w-full'>
            {children}
        </div>
    )
}

export default ResponsiveBox