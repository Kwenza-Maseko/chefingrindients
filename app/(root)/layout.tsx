import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            <Navbar />
            <section className="pt-[190px] px-2 md:px-[50px]">
                {children}
                <Footer />
            </section>
        </main>
    );
}
