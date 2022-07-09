import Head from "next/head";
import Banner from "../components/Banner";
import Content from "../components/Content";

export default function Home() {
    return (
        <div className="h-[2000px]">
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
            {/* <Footer /> */}

        </div>
    );
}
