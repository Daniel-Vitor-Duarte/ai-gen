import React from 'react'
import { Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import LinkedIn from "@/public/icons/linkdIn.png"
import Facebook from "@/public/icons/facebook.png"
import X from "@/public/icons/x.svg"
import Image from 'next/image'


export default function Share() {
    return (
        <main>
            <div className="">
                <h4 className="text-lg font-bold mb-4">Compartilhe este artigo</h4>
                <div className="flex gap-3">
                    <button className="rounded-full w-[2.5rem] h-[2.5rem] bg-white p-1">
                        <Image src={Facebook} alt='facebook' className='w-full' />
                        <span className="sr-only">Compartilhar no Twitter</span>
                    </button>
                    <button  className="rounded-full w-[2.5rem] h-[2.5rem] bg-white p-1">
                        <Image src={X} alt='x' className='w-[70%] mx-auto' />
                        <span className="sr-only">Compartilhar no Facebook</span>
                    </button>
                    <button  className="rounded-full w-[2.5rem] h-[2.5rem] bg-white p-1">
                        <Image src={LinkedIn} alt='linkedIn' className='w-full rounded-full' />
                        <span className="sr-only">Compartilhar no LinkedIn</span>
                    </button>
                    <Button variant="secondary" size="icon" className="rounded-full w-[2.5rem] h-[2.5rem]">
                        <Share2 size={18} />
                        <span className="sr-only">Compartilhar via link</span>
                    </Button>
                </div>
            </div>
        </main>
    )
}
