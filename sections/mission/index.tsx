"use client"

import { ReactNode } from "react"
import { _missionStatement } from "./_missionStatement"
import { cn } from "@/lib/utils"



export default function Mission () {
    return (
        <div className="bg-beige w-full flex items-center justify-center px-2 py-20">
            <div className="w-full max-w-7xl flex flex-col items-center gap-8">
                <div className="w-full flex flex-col items-center gap-3">
                    <h1 className="font-playfair scroll-m-20 text-center text-[46px] font-semibold tracking-tight text-balance">The ResetLove™ <span className="text-primary">Mission</span></h1>
                    <p className="text-sm max-w-lg text-gray-700 text-center">Our mission is simple yet profound: to transform how we approach relationship challenges by creating pathways for repair, renewal, and deeper connection that honor both individual growth and partnership healing.</p>
                </div>

                <div className="w-full grid grid-cols-3 gap-4">
                    {
                        _missionStatement.map((mission, index) => (
                            <SingleMission key={index} {...mission} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

const SingleMission = ({details, icon, title, bg}: {title: string, details: string, icon:  ReactNode, bg: string}) => {
    return (
        <div className="w-full flex flex-col items-center bg-white p-8 rounded-xl gap-4">
            <div className={cn("p-2 aspect-square rounded-full flex items-center justify-center", )} style={{backgroundColor: bg}}>
                {icon}
            </div>
            <h2 className="font-playfair capitalize text-lg font-semibold">{title}</h2>
            <p className="text-xs text-gray-700 text-center">{details}</p>
        </div>
    )
}