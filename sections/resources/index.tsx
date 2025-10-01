"use client"

import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {_communicationPatterns} from './_communicationPatterns'
import { cn } from "@/lib/utils";
import Rating from "@/components/Rating";
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { ArrowRight, Calendar, Clock10 } from "lucide-react";


export default function Resources () {
    const pluginRef = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    
    useEffect(() => {
      if (!api) return;
  
      api.on("select", () => {
        setCurrent(api.selectedScrollSnap());
      });
    }, [api]);
  
    useEffect(() => {
      if (api && selectedIndex !== null) {
        api.scrollTo(selectedIndex);
      }
    }, [api, selectedIndex]);

    const onTriggerOpen = useCallback((index: number) => {
      setSelectedIndex(index);
    }, []);

    return (
        <div className="w-full items-center justify-center flex bg-beige px-2 py-15">
           <div className=' flex flex-col items-center gap-10 w-full max-w-7xl'>

                <div className='flex flex-col justify-center items-center gap-4'>
                    <h2 className="font-playfair scroll-m-20 text-center text-5xl font-semibold tracking-tight text-balance">Relationship Insights<span className='text-primary'> & Resources</span></h2>
                    <p className="text-[18px] text-neutral-700 text-center">Discover practical tips, expert advice, and inspiring stories to help you on your relationship journey.</p>
                </div>

                <Carousel
                    plugins={[pluginRef.current]}
                    className="w-full relative flex items-center justify-center flex-col gap-8"
                    onMouseEnter={() => pluginRef.current.stop()}
                    onMouseLeave={() => pluginRef.current.play()}
                    setApi={setApi}
                >
                    <div className="max-w-5xl grid grid-cols-2 bg-white shadow-[-3px_0px_52px_3px_rgba(0,_0,_0,_0.1)] rounded-4xl h-[520px] overflow-hidden">
                    <img
                        src={_communicationPatterns[current]?.image}
                        alt={_communicationPatterns[current]?.title}
                        className="w-full h-full object-cover border-r rounded-l-4xl object-top"
                    />
                        <div className="w-full mx-auto">
                            <CarouselContent className="w-full -ml-1">
                                {
                                    _communicationPatterns.map((communication, index) => (
                                        <CarouselItem key={index} className=" basis-1/1 pl-6 h-full">
                                            <ResourcesComponent
                                                key={index}
                                                {...communication}
                                            />
                                        </CarouselItem>
                                    ))
                                }
                            </CarouselContent>
                        </div>
                        </div>

                         <div className="relative w-fit flex items-center justify-center mt-4">
                            {/* Prev Button */}
                            <CarouselPrevious className="bg-primary text-white" />

                            {/* Dots */}
                            <div className="flex items-center space-x-2 mx-6">
                                {_communicationPatterns.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-all ${
                                    index === current ? "bg-blue-400" : "bg-white"
                                    }`}
                                    onClick={() => api?.scrollTo(index)}
                                />
                                ))}
                            </div>

                            {/* Next Button */}
                            <CarouselNext className="bg-primary text-white" />
                        </div>

                    
                </Carousel>

                

                <Button size='lg'>View All Resources</Button>
            </div>
        </div>
    )
}


const ResourcesComponent = ({title, date, details, takeaway, image, readTime, tags}: {title: string, takeaway: string[], image: string, date: string, details: string, readTime: string, tags: string[]}) => {
    return (
        <div className={cn("w-full cursor-default rounded-r-4xl group p-9 bg-white text-neutral-700 flex items-start justify-center flex-col gap-4")}>
            <div className="w-full flex items-center gap-4">
                <div className="flex items-center gap-2 text-xs text-neutral-700">
                    <Calendar className="w-4" /> {date}
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-700">
                    <Clock10 className="w-4" /> {readTime}
                </div>
            </div>

            <div className="w-full flex items-center gap-2  flex-wrap-reverse">
                {
                    tags && tags.length > 0 && 
                    tags.map((tag, index) => (
                        <span key={index} className="rounded-xl px-3 py-1 text-white bg-[#4C7368] text-[11px] capitalize">
                            {tag}
                        </span>
                    ))
                }
            </div>

            <div className='flex flex-col justify-center items-start gap-4'>
                <h2 className="font-playfair scroll-m-20 text-left text-5xl font-semibold tracking-tight text-balance">
                    {title}
                </h2>
                <p className="text-[16px] text-neutral-700 text-left line-clamp-6">
                    {details}
                </p>
                <Button variant='ghost' size='lg' className="underline font-medium text-primary">
                    Read full Article <ArrowRight/>
                </Button>
            </div>
        </div>
    )
}
