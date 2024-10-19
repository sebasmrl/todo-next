'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { CiBookmarkCheck } from 'react-icons/ci'


interface Props{
    title:string,
    url:string
}

export const SidebarItem = ({title, url}:Props) =>{

    const pathname = usePathname();

    return (
        // Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 
        <li>
            <Link href={url} className={`relative px-4 py-3 flex items-center space-x-4  ${ pathname==url ? 'rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400':'rounded-md text-gray-600 group'}`}>
                <CiBookmarkCheck size={30} />
                <span className="-mr-1 font-medium">{title}</span>
            </Link>
        </li>
    )
}
