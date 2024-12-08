import type { Metadata } from "next";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import "./globals.css";


export const metadata: Metadata = {
  title: "Chef's Ingredients",
  description: "Cooking App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          logoImageUrl: '/chefLogo.png'
        },
        elements: {
          logoBox: {
            width: '120px',
            height: '120px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 auto',
          }
        },
        variables: {
          colorPrimary: '#0d213d',
          colorBackground: '#17021b',
          colorText: '#f7f7f7',
          colorInputBackground: '#290731',
          colorInputText: '#f7f7f7',

        },
      }
      }>
      <html lang="en">
        <body
          className={`antialiased`}
        >
          <div className="">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider >
  );
}
