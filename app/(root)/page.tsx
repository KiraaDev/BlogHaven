
import { auth } from "@/auth"

export default async function Home() {

  const session = await auth()
  
  return (
    <div className="flex justify-center items-center flex-col h-[90svh] w-[60%] gap-5 lg:flex-row">
      <div className=" flex justify-center items-center w-[100%] lg:w-[70%]">
        <h1 className=" text-5xl lg:text-7xl">Discover Stories That Inspire.</h1>
      </div>
      <div className=" flex justify-center items-center w-[100%] lg:w-[30%]">
        <img src="/assets/cat.jpg" alt="cat" className="rounded-md" />
      </div>
    </div>
  );
}
