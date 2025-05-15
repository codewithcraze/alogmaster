import { Poppins } from 'next/font/google'
import '@/app/globals.css'; // adjust path if needed



const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
})

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={poppins.className} style={{padding: "0px !important", margin: "0px !important", background: "#F8FAFC !important"}}>
                {children}
     

        
            </body>
        </html>
    )
}

