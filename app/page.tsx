import { Button } from '@/components/ui/button'
import BaseLayout from '@/sections/layout'
import Resources from '@/sections/resources'
import ClientTestimony from '@/sections/testimony'
import { Icon } from '@iconify/react'
import { ArrowRight, Dot } from 'lucide-react'

export default function Page () {

  return (
    <BaseLayout>
      <div className='w-full flex flex-col'>
        <div className=' bg-beige flex items-center justify-center '>
          <div className='w-full max-w-7xl flex  items-center relative h-[80vh] overflow-hidden'>
            <div className='w-full flex flex-col justify-between gap-4 max-w-md pl-10'>
                <h2 className="font-playfair scroll-m-20 text-left text-5xl text-primary font-semibold tracking-tight text-balance">Love Can Be Reset. <br /> <span className='text-neutral-700'>Connection Can <br /> Be Rebuilt.</span></h2>

                <p className="text-md font-medium text-primary">with Christie Ossai</p>
                <p className="text-sm text-neutral-600">
                  At The ResetLove™, we give couples and individuals the tools to prepare wisely, repair faithfully, and reignite love that lasts.
                </p>

                <div className='flex items-center gap-4'>
                   <Button size='lg' className='bg-white text-primary hover:bg-white'>
                      Explore Courses
                  </Button>
                  <Button size='lg' className='border-gold bg-transparent text-primary hover:bg-transparent hover:text-primary' variant='outline' >
                      Subscribe For Updates
                  </Button>
                </div>
            </div>
            
            <img src="/annie.png" alt="annie" className='w-full max-w-3xl top-5 absolute right-0' />
          </div>
        </div>

        <div className='w-full flex items-center justify-center bg-white px-2 py-15'>
            <div className='w-full max-w-7xl flex h-[430px]  gap-10'>
              <div className='w-full max-w-[430px] relative'>
                <img src="/resource_1.svg" alt="" className="w-full h-full object-cover rounded-4xl object-top" />
                <div className='size-14 rounded-full bg-gold/90 absolute -left-3 -bottom-4' />
              </div>

              <div className='w-full flex flex-col justify-between gap-4'>
                <h2 className="font-playfair scroll-m-20 text-center text-4xl font-semibold tracking-tight text-balance">Why The ResetLove™ <span className='text-primary'>Exists</span></h2>
                <p className="text-sm font-medium">"The Reset Love™: At every stage—prepare, repair, and reignite—giving you the tools to build love that lasts for generations."</p>
                <p className="text-sm text-neutral-600">
                  Too many couples spend months planning a wedding, but almost no time preparing for marriage itself. Others silently endure disconnection, mistrust, or loneliness behind closed doors.
                </p>
                <p className="text-sm text-neutral-600">
                    The ResetLove™ was created to change that story. We help couples move from conflict to clarity, from distance to connection, and from doubt to lasting love.
                </p>
                <p className="text-sm text-neutral-600">
                  Our evidence-based frameworks provide practical tools for every stage of love—whether you're preparing for marriage, rebuilding after crisis, or reigniting passion that's faded over time.
                </p>
                <Button size='lg' className='w-fit'>
                  Discover Our Story
                  <ArrowRight className="w-4 text-white " />
                </Button>
              </div>
            </div>
        </div>

        <Resources />

        <ClientTestimony />

        <div className='w-full flex items-center justify-center px-2 py-15 bg-beige'>
          <div className='bg-slate-900 flex flex-col items-center p-15 gap-8 rounded-4xl w-full max-w-4xl'>
            <div className='w-full flex flex-col justify-center items-center gap-4'>
              <h2 className="font-playfair scroll-m-20 text-center text-white text-5xl font-semibold tracking-tight text-balance">Join the <span className='text-pink'>ResetLove™ Community</span></h2>
              <p className="text-md max-w-[680px]  text-gray-300 text-center">Get exclusive insights, relationship tips, and healing resources delivered to your inbox. Plus, receive my free guide: "The 5 Pillars of Relationship Reset"</p>
            </div>

            <div className='w-full flex flex-col gap-4 items-center'>
              <div className="relative bg-white py-4 max-w-sm rounded-md flex items-center w-full ">
                <Icon icon="system-uicons:mail" className="size-6 text-primary absolute left-2" />
                <input type="email" placeholder="Enter your email here" className="outline-none font-medium text-xs border-none text-muted-foreground px-9 "/>
                <Button className="absolute right-1 aspect-square">
                  Join Now
                  <Icon icon="formkit:arrowright" className="text-xl text-white " />
                </Button>
              </div>

              <div className='w-full flex items-center justify-center gap-4'>
                  <span className='text-xs flex items-center gap-2 text-white'><span className='bg-pink size-2 rounded-full'/> Weekly insights</span>
                  <span className='text-xs flex items-center gap-2 text-white'><span className='bg-pink size-2 rounded-full'/> Exclusive content</span>
                  <span className='text-xs flex items-center gap-2 text-white'><span className='bg-pink size-2 rounded-full'/> No spam, ever</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  )
}