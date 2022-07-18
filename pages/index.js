import Head from "next/head";
import Banner from "../components/Banner";
import Content from "../components/Content";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div className="pb-10">
            <Head>
                <title>Airbotix</title>
                <meta
                    name="description"
                    content="Airbotix Technologies"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Banner />
            <Content />
            <Footer />
        </div>
    );
}
