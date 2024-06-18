import React, { ReactNode } from 'react'

function IconCont({ children, ClassName }: { children?: ReactNode, ClassName?: string }) {
    return (
        <div className={`p-1 flex justify-center items-baseline  ${ClassName} `}>{children}</div>
    )
}

export default IconCont