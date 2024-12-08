'use client'
import { SignInButton, useAuth } from '@clerk/nextjs'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { navLinks } from '@/constants'
import Link from 'next/link'
import { SignOutButton } from '@clerk/nextjs'
import {
    LogOut,
    Menu,
    ChefHat
} from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Chef from './Chef'

const Navbar = () => {
    const user = useAuth();
    const pathname = usePathname();

    return (
        <div className='fixed left-0 right-0 px-2 md:px-[50px] py-4 bg-[#ffffff00] backdrop-blur-lg items-center z-10'>
            <nav className='flex justify-between gap-4 items-center'>
                <div className="logo">
                    <Image
                        src={'/chefLogo.png'}
                        width={120}
                        height={100}
                        alt='logo'
                    />
                </div>

                <div className="md:flex gap-8 justify-center items-center hidden">
                    {navLinks.map((items, index) => (
                        <Link href={`${items.url}`} key={index}
                            className={`${items.url === pathname ? "font-bold" : "hover:font-bold"} capitalize`}
                        >
                            {items.label}
                        </Link>
                    ))}

                    <Link href={'/cook'}
                        className='flex gap-2 items-center box-background rounded-full py-2 px-6 font-bold capitalize'>
                        <ChefHat size={18} />  <div>cook</div>
                    </Link>
                </div>
                <div className="flex gap-4 items-center">
                    {!user ? (
                        <div className='flex gap-4 items-center'>
                            <div className='border border-zinc-200 rounded-full py-2 px-4'>
                                <SignInButton />
                            </div>
                            <div className='h-[30px] w-[30px] rounded-full bg-zinc-200'>

                            </div>
                        </div>
                    ) : (
                        <div className='flex gap-4 items-center'>
                            <div className="block md:hidden">
                                <Link href={'/cook'}
                                    className='flex gap-2 items-center box-background rounded-full py-2 px-6 font-bold capitalize'>
                                    <ChefHat size={18} />  <div>cook</div>
                                </Link>
                            </div>
                            <div className="md:block hidden">
                                <div className='flex gap-2 items-center border border-zinc-200 rounded-full py-2 px-4'>
                                    <LogOut size={18} />
                                    <SignOutButton />
                                </div>
                            </div>
                            <div>
                                <UserButton />
                            </div>
                        </div>
                    )}

                    <div className="flex md:hidden">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Menu />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 mt-8 bg-[#ffffff00] backdrop-blur-lg items-center border-b-[0.01px] border-[#f7f7f749] rounded block md:hidden">
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    {navLinks.map((items, index) => (
                                        <DropdownMenuItem key={index}>
                                            <Link href={`${items.url}`}
                                                className={`${items.url === pathname ? "font-bold" : "hover:font-bold"} capitalize`}
                                            >
                                                {items.label}
                                            </Link>
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <div className='flex items-center gap-2'>
                                        <LogOut />
                                        <SignOutButton />
                                    </div>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </nav>
            <Chef />
        </div>
    )
}

export default Navbar