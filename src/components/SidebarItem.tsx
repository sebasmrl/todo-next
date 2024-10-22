'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';



interface Props{
    title:string,
    path:string,
    icon: React.ReactNode
}

export const SidebarItem = ({title, path, icon}:Props) =>{

    const pathname = usePathname();

    return (
        // Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 
        <li>
            <Link href={path} className={`relative px-4 py-3 flex items-center space-x-4  ${ pathname==path ? 'rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400':'rounded-md text-gray-600 group hover:bg-gradient-to-r  hover:from-sky-700 hover:to-cyan-700 hover:bg-opacity-10 hover:text-white'}`}>
                {icon}
                <span className="-mr-1 font-medium">{title}</span>
            </Link>
        </li>
    )
}
