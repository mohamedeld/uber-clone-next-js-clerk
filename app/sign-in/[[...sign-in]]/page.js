import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="relative w-full h-[100vh] ">
      <Image src="/images/uber-background.jpg"  alt="login background image" layout="fill" objectFit="cover" objectPosition="center"/>
      <div className="absolute top-10 right-0">
        <SignIn path="/sign-in"  />
      </div>
    </div>
  );
}