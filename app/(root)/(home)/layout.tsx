import Filter from "@/components/Filter";

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
