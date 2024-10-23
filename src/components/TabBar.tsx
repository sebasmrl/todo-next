'use client';

// https://tailwindcomponents.com/component/radio-buttons-1
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { MouseEvent, useState } from "react";



interface Props{
    currentTab?:number;
    tabOptions?: number[];
}


export const TabBar = ({ currentTab=1, tabOptions=[1,2,3,4]}:Props) => {


    const [selected, setSelected] = useState(currentTab);
    const router = useRouter();

    const onTabSelected = (tab:number)=>{
        setSelected(tab);
        setCookie('selectedTab', tab.toString());
        router.refresh();
    }

    return (
        <div className={`
            grid w-full space-x-2 rounded-xl bg-gray-200 p-2 grid-flow-col
            ${'grid-cols-'+tabOptions.length}
        `}>

            {...tabOptions.map(tab => (
                <div key={tab}>
                    <input 
                        checked={ selected === tab}
                        onChange={()=>{}}
                        type="radio" 
                        id={tab.toString()} 
                        className="peer hidden"
                    />
                    <label 
                        onClick={(e:MouseEvent)=> onTabSelected(tab)}
                        className="transition-all block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">
                        {tab}
                    </label>
                </div>
            ))}

        </div>
    )
}
