"use client";

import { SignedIn, SignedOut, UserButton, useAuth } from '@clerk/nextjs';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "../ui/button";
import NavItems from './NavItems';
import MobileNav from './MobileNav';

const Header = () => {
  const { isSignedIn } = useAuth();

  return (
    <header className="w-full border-b py-4">
      <div className="wrapper flex items-center justify-between relative">
        <nav className='md:flex hidden max-w-xs'>
          <SignedIn>
            <NavItems />
          </SignedIn>
        </nav>

        {/* Centered Logo */}
        <Link href="/" className="absolute left-1/2 transform -translate-x-1/2" aria-label="Go to homepage">
          <Image 
            src="/assets/images/logo.png" 
            width={2000} 
            height={2000}
            alt="PYOP logo" 
            className="w-36"
          />
        </Link>

        {/* Right-aligned User actions */}
        <div className="ml-auto flex items-center gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl='/' />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
