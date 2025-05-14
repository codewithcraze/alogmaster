import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Notification from "@/components/Notification";
import QuestionListingComponent from "@/components/QuestionListingComponent";
import { Suspense } from "react";

const cache = new Map();

export async function getTopicData(slug) {

  if (cache.has(slug)) {
    return cache.get(slug);
  }
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/dsa/category/${slug}`, {
    next: { revalidate: 0 },
  });

  const json = await res.json();
  cache.set(slug, json);
  return json;
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const data = await getTopicData(slug);

  return {
    title: data?.category?.metaTitle || `Topic: ${slug}`,
    description: data?.category?.metaDescription || `Learn more about ${slug}`,
    keywords: data?.category?.keywords || ['DSA', 'programming', slug],
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const data = await getTopicData(slug);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Notification notice={"This is Notice"} />
      <Header />
      <QuestionListingComponent />
      <Footer />
    </Suspense>
  );
}
