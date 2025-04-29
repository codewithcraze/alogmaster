import { Poppins } from 'next/font/google'

const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
})

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={poppins.className} style={{padding: "0px !important", margin: "0px !important"}}>
                {children}
            </body>
        </html>
    )
}

