import { Suspense } from "react";
import Loading from "@/app/loading";
import Header from "@/components/Header";
import Notification from "@/components/Notification";
import ComingSoon from "@/components/CommingSoon";
import Footer from "@/components/Footer";


export default function Page(){
    return(
        <Suspense fallback={<Loading />}>
            <Notification notice={"This is Notice"} />
            <Header currentPath="/problems" />
            <ComingSoon />
            <Footer />
        </Suspense>
    )
}