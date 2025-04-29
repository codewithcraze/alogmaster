import { Suspense } from "react";
import Loading from "@/app/loading";
import Header from "@/components/Header";
import Notification from "@/components/Notification";


export default function Page(){
    return(
        <Suspense fallback={<Loading />}>
            <Notification />
            <Header currentPath="/discuss" />
        </Suspense>
    )
}