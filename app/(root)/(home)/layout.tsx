import Chef from "@/components/Chef";
import Filter from "@/components/Filter";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex gap-3 justify-between">
            {children}
            <Filter />
        </main>
    );
}
