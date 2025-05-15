import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Notification from "@/components/Notification";
import SolutionComponent from "@/components/SolutionComponent";
import { Suspense } from "react";

const cache = new Map();

export async function getTopicData(slug) {

  // if (cache.has(slug)) {
  //   return cache.get(slug);
  // }
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/dsa/questions/${slug}`, {
    next: { revalidate: 0 },
  });

  const json = await res.json();
  // cache.set(slug, json);
  return json;
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const data = await getTopicData(slug);

  return {
    title: data?.data?.metaTitle || `Topic: ${slug}`,
    description: data?.data?.metaDescription || `Learn more about ${slug}`,
    keywords: data?.data?.keywords || ['DSA', 'programming', slug],
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const data = await getTopicData(slug);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Notification notice={"This is Notice"} />
      <Header />
      <SolutionComponent data={data?.data} />
      <Footer />
    </Suspense>
  );
}
