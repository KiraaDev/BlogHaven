import NavBar from "@/components/layout/Navbar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex flex-col min-h-[100svh] w-full">
            <NavBar />
            <div>
                {children}
            </div>
        </main>
    );
}
