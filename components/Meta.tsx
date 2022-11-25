import Head from "next/head";

interface IMetaProps {
    title: string,
    description: string
}

export default function Meta({ title, description }: IMetaProps) {
    return (
        <Head>
            <meta name="description" content={description} />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <meta name="keywords" content="The best screaming platform in the world" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: "Hulu",
    description: "Enjoy the beauty of screaming with Hulu"
}
