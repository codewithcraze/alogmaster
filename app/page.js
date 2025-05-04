import { Suspense } from "react";
import Loading from "@/app/loading";
import Header from "@/components/Header";
import Notification from "@/components/Notification";
import Hero from "@/components/Hero";
import {Plan} from "@/components/Plan";
import Footer from "@/components/Footer";


export default function Page(){
    return(
        <div>
            <Suspense fallback={<Loading />}>
                <Notification />
                <Header currentPath="/" />
                <Hero title={"Master Data Structures & Algorithms"} description={"Practice with our curated collection of problems organized by topic. Ace your coding interviews and become a better programmer."}/>
                <Plan />
                <Footer />
            </Suspense>
        </div>
    )
}