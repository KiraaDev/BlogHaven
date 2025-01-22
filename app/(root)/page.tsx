
import { auth } from "@/auth"

export default async function Home() {

  const session = await auth()
  
  return (
    <div className="flex justify-center items-center flex-col h-[90svh] w-[60%] gap-5 lg:flex-row">
      <div className=" flex justify-center items-center w-[100%] lg:w-[70%]">
        <h1 className=" text-4xl lg:text-6xl"><span className=" underline">Discover</span> Stories That <span className=" underline">Inspire</span>.</h1>
      </div>
      <div className=" flex justify-center items-center w-[100%] lg:w-[30%]">
        <img src="/assets/cat.jpg" alt="cat" className="rounded-md" />
      </div>
    </div>
  );
}
