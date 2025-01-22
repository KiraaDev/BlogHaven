import NavBar from "@/components/layout/Navbar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex flex-col min-h-[100svh] w-full bg-[#FDFDFC]">
            <NavBar />
            <div className="flex justify-center items-center">
                {children}
            </div>
        </main>
    );
}
