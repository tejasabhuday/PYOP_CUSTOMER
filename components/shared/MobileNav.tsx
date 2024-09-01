import React from 'react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import NavItems from './NavItems';

const MobileNav = () => {
  return (
    <nav className='md:hidden'>
        <Sheet>
            <SheetTrigger className='align-middle'>
                <Image 
                src = "/assets/icons/menu.svg"
                alt = "Menu"
                width = {24}
                height = {24}
                className = "cursor-pointer"/>
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-6 bg-white md:hidden text-center min-h-screen">
                <div className="flex justify-center pt-4">
                    <Image 
                    src = "/assets/images/logo.png"
                    alt = "logo"
                    width = {128}
                    height = {38}
                    />
                </div>
                <div className="flex flex-col flex-grow items-center justify-center">
                    <div className="text-xl font-bold">
                      Coming Soon !!
                    </div>
                    <div className="text-lg font-medium text-gray-600">
                      Please register for updates and stay tuned
                    </div>
                </div>
                <Separator className='border border-gray-50'/>
                <NavItems />
            </SheetContent>
        </Sheet>
    </nav>
  );
}

export default MobileNav;
