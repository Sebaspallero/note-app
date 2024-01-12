import Image from "next/image"
import { Poppins } from "next/font/google"

import { cn } from "@/lib/utils"

const fonts = Poppins({
    subsets: ["latin"],
    weight: ["400", "600"]
})

const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2 ">
        <Image
            src="/logo.svg"
            height="40"
            width="40"
            className="dark:hidden"
            alt="Logo"
        />
        <Image
            src="/logo-dark.svg"
            height="40"
            width="40"
            className="hidden dark:block"
            alt="Logo"
        />
        <p className={cn("font-semibold", fonts.className)}>
            Jotion
        </p>
    </div>
  )
}

export default Logo