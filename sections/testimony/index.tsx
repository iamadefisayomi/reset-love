"use client"

import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import {_clientTestimony} from './_clientTestimony'
import { cn } from "@/lib/utils";
import Rating from "@/components/Rating";
import * as React from "react"
import AutoScroll from "embla-carousel-auto-scroll"


export default function ClientTestimony () {
    const scrollLeft = React.useRef(
        AutoScroll({ playOnInit: true, direction: "backward", speed: 1 })
    )
    const scrollRight = React.useRef(
        AutoScroll({ playOnInit: true, direction: "forward", speed: 1 })
    )

    return (
        <div className="w-full items-center justify-center flex bg-[#F5F7F9] px-2 py-15">
           <div className=' flex flex-col items-center gap-8 w-full max-w-7xl'>

             <div className='flex flex-col justify-center items-center gap-4'>
                <h2 className="font-playfair scroll-m-20 text-center text-5xl font-semibold tracking-tight text-balance">Love Stories & <span className='text-primary'>Transformations</span></h2>
                <p className="text-[18px] text-neutral-700 text-center">Real transformations from couples and individuals who chose to reset their love</p>
              </div>

            <div className="relative w-full flex flex-col gap-2">
                {/* Left gradient */}
                <div className="pointer-events-none hidden md:flex absolute left-0 top-0 h-full w-[10%] z-10 bg-gradient-to-r from-[#F5F7F9] via-[#F5F7F9]/2 to-transparent" />

                {/* Right gradient */}
                <div className="pointer-events-none hidden md:flex absolute right-0 top-0 h-full w-[10%] z-10 bg-gradient-to-l from-[#F5F7F9] via-[#F5F7F9]/2 to-transparent" />

                <Carousel
                    plugins={[scrollLeft.current]}
                    className="w-full"
                    opts={{ loop: true }}
                    onMouseEnter={scrollLeft.current.stop}
                    onMouseLeave={() => scrollLeft.current.play()}
                >
                    <CarouselContent className="-ml-1">
                    {_clientTestimony
                        .slice(0, _clientTestimony.length / 2)
                        .map((testimony, index) => (
                        <CarouselItem
                            key={`row1-${index}`}
                            className="pl-3 md:basis-1/3 lg:basis-1/3"
                        >
                            <div className="p-1">
                            <TestimonyComponent {...testimony} />
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>

                <Carousel
                    plugins={[scrollRight.current]}
                    className="w-full"
                    opts={{ loop: true }}
                    onMouseEnter={scrollRight.current.stop}
                    onMouseLeave={() => scrollRight.current.play()}
                >
                    <CarouselContent className="-ml-1">
                    {_clientTestimony
                        .slice(_clientTestimony.length / 2, _clientTestimony.length)
                        .map((testimony, index) => (
                        <CarouselItem
                            key={`row2-${index}`}
                            className="pl-3 md:basis-1/3 lg:basis-1/3"
                        >
                            <div className="p-1">
                            <TestimonyComponent {...testimony} />
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                </div>

                <div className='flex flex-col gap-4 items-center'>
                    <p className='text-sm text-neutral-700'>Ready to write your own transformation story?</p>
                    <div className='flex items-center gap-3'>
                    <Button size='lg'>Book Your Session</Button>
                    <Button size='lg' variant='ghost' className='bg-beige text-primary'>View More Stories</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}


const TestimonyComponent = ({jobTitle, rating, name, image, message}: {jobTitle: string, name: string, image: string, rating: number, message: string}) => {
    return (
        <div className={cn("w-full cursor-pointer duration-500 rounded-xl group p-8 bg-white hover:bg-beige text-neutral-700 flex flex-col gap-4")}>
            <p className={cn("text-xs")}>{message}</p>


            <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                    <img src={image} alt={name} className="object-top object-cover size-14 rounded-full" />
                    <div className="flex flex-col">
                        <p className=" font-bold text-xs capitalize ">{name}</p>
                        <p className={cn("text-[11px] font-medium capitalize")}>{jobTitle}</p>
                    </div>
                </div>
                <Rating length={rating} fill="currentColor" className="text-gold size-3" />
            </div>
        </div>
    )
}
