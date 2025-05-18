import Image from "next/image";
import Banner from "@/components/homeComponents/Banner";
import InnovazioneSec from "@/components/homeComponents/InnovazioneSec";
import NostriPartner from "@/components/homeComponents/NostriPartner";
import NostriPunti from "@/components/homeComponents/NostriPunti";
export default function Home() {
  return (
    <>
      <Banner />
      <InnovazioneSec />
      <NostriPartner />
      <NostriPunti />
    </>
  );
}
