import { Suspense } from "react";
import Loading from "@/app/loading";
import Header from "@/components/Header";
import Notification from "@/components/Notification";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/CommingSoon";


export function generateMetadata() {

  return {
    title: "Discuss – DSA & Programming Community Forum",
    description: "Explore the Discuss section to post doubts, share solutions, and collaborate with other developers on DSA and programming topics.",
    keywords: ["Discuss", "DSA", "programming", "community", "forum", "coding help", "questions"],
  };
}

export default function Page(){
    return(
        <Suspense fallback={<Loading />}>
            <Notification  notice={"This is Notice"}/>
            <Header currentPath="/discuss" />
            <ComingSoon />
            <Footer />
        </Suspense>
    )
}