
import AboutBanner from "@/components/aboutComponent/AboutBanner";
import AboutDetails from "@/components/aboutComponent/AboutDetails";
import AboutChoose from "@/components/aboutComponent/AboutChoose";
import AboutTimeline from "@/components/aboutComponent/AboutTimeline";
import AboutExplore from "@/components/aboutComponent/AboutExplore";
import NostriPunti from "@/components/homeComponents/NostriPunti";

export default function About() {
    return (
        <>
            <AboutBanner />
            <AboutDetails />
            <AboutChoose />
            <AboutTimeline />
            <AboutExplore />
            <NostriPunti />
        </>
    );
}
