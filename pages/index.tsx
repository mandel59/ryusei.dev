import Link from 'next/link'
import Head from 'next/head'
import JsonLd from '../components/jsonld'
import ryusei from '../components/ryusei.ld'

const Home = () => (
  <main>
    <Head>
      <title>{ryusei.name}</title>
      <JsonLd data={ryusei} />
    </Head>
    <h1><img src={ryusei.image} style={{ verticalAlign: "middle" }} />{ryusei.name}</h1>
    <ul>
      <li><a href="http://mandel59.hateblo.jp/">Blog</a></li>
      <li><a href="https://github.com/mandel59">github.com/mandel59</a></li>
      <li><a href="https://twitter.com/mandel59">twitter.com/mandel59</a></li>
    </ul>
  </main>
)

export default Home
