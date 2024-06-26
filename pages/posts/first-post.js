import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/layout';
export default function FirstPost(){
    return (
        <>
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
                <h1>First Post</h1>
                <h2>
                    <Link href='/'>Back to home</Link>
                </h2>
                <Image 
                    src='/images/abeman.jpg'
                    alt='Abemelek'
                    width={144}
                    height={144}
                />
        </Layout>
        </>
    )
}