import MobileNav from "@/components/shared/MobileNav";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>  
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Host Connect and Celebrate!</h1>
            <p className="p-regular-20 md:p-regular-24">
              Effortlessly host events and sell tickets online with just one click. Simplify event management and boost ticket sales seamlessly.
            </p>
            <SignedOut>
              
              <Button size="lg" asChild className="button w-full sm:w-fit self-start">
                <Link href="/sign-in">Login</Link>
              </Button>
            </SignedOut>
          </div>
          <Image
            src="/assets/images/hero.png"
            alt="Cover Photo"
            width={500}
            height={500}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>

      <section id="events" className="wrapper my-8 flex flex-col justify-center items-center text-center gap-8 md:gap-12">
        <h2 className="h2-bold">
          Your First Choice for All Events<br />Coming Soon to Meet All Your Event Needs!
        </h2>
      </section>
    </>
  );
}
