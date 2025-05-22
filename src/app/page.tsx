'use client';

import Banner from "@/components/homeComponents/Banner";
import InnovazioneSec from "@/components/homeComponents/InnovazioneSec";
import NostriPartner from "@/components/homeComponents/NostriPartner";
import NostriPunti from "@/components/homeComponents/NostriPunti";
// import ReviewsOrbit from "@/components/homeComponents/ReviewsOrbit";
// import OrbitingReviews from "@/components/homeComponents/OrbitingReviews";
import ServicesSection from "@/components/homeComponents/ServicesSection";
import TextChanger from "@/components/homeComponents/TextChanger";

export default function Home() {
  return (
    <>
      <Banner />
      <InnovazioneSec />
      <NostriPartner />
      <NostriPunti />
      <ServicesSection />
      {/* <ReviewsOrbit />
      <OrbitingReviews /> */}
      <TextChanger />
    </>
  );
}
