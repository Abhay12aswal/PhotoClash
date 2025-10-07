import Image from "next/image"
import React from "react"

export default function HeroSection() {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <div>
                <Image src="/banner_img.svg" width={600} height={600} alt="banner_img" />

            </div>
            <div>
                <h1 className="text-6xl
                 md:text-7xl lg:text-9xl 
                font-extrabold bg-gradient-to-r from-pink-400 to-purple-500
                text-transparent bg-clip-text">PhotoClash</h1>
            </div>
        </div>
    )
}

