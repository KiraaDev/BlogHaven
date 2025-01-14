import { SignIn } from "@/components/auth-components";
import SignOut from "@/components/sign-out";
import { auth } from "@/auth"

export default async function Home() {

  const session = await auth()
  
  return (
    <div className="flex justify-center items-center h-svh">
      <div>
        <p>Welcome { session ? session?.user?.name : "Guest" }!</p>
        {session ? <SignOut /> : <SignIn />}
      </div>
    </div>
  );
}
