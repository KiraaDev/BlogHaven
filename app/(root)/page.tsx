import { SignIn } from "@/components/auth-components";
import SignOut from "@/components/sign-out";
import { auth } from "@/auth"

export default async function Home() {

  const session = await auth()
  
  return (
    <div className="flex justify-center items-center h-svh">
      <div>
        <h1 className=" text-7xl">Discover Stories That Inspire.</h1>
        
      </div>
    </div>
  );
}
