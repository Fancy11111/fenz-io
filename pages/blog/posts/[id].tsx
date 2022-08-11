import { client, MetaData } from '../../../libs/blog/contentful'
import {
  GET_POST,
  GET_POST_NAMES,
  Post,
  PostResponse
} from '../../../libs/blog/posts'
import { MARKS, BLOCKS, INLINES } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../../components/layouts/article'
import { Prism } from '@mantine/prism'

let key = 1000

type Language =
  | 'markup'
  | 'bash'
  | 'clike'
  | 'c'
  | 'cpp'
  | 'css'
  | 'javascript'
  | 'jsx'
  | 'coffeescript'
  | 'actionscript'
  | 'css-extr'
  | 'diff'
  | 'git'
  | 'go'
  | 'graphql'
  | 'handlebars'
  | 'json'
  | 'less'
  | 'makefile'
  | 'markdown'
  | 'objectivec'
  | 'ocaml'
  | 'python'
  | 'reason'
  | 'sass'
  | 'scss'
  | 'sql'
  | 'stylus'
  | 'tsx'
  | 'typescript'
  | 'wasm'
  | 'yaml'

const options = {
  renderNode: {
    [BLOCKS.HEADING_1]: (_, text) => (
      <>
        <br />
        <h1 className="text-5xl font-black" key={text + '-key'}>
          {text}
        </h1>
      </>
    ),
    [BLOCKS.HEADING_2]: (_, text) => (
      <>
        <br />
        <h2 className="text-3xl font-bold" key={text + '-key'}>
          {text}
        </h2>
      </>
    ),
    [BLOCKS.HEADING_3]: (_, text) => (
      <>
        <br />
        <h3 className="text-2xl font-semibold" key={text + '-key'}>
          {text}
        </h3>
      </>
    ),
    [BLOCKS.HEADING_4]: (_, text) => (
      <>
        <br />
        <h4 className="text-xl font-medium" key={text + '-key'}>
          {text}
        </h4>
      </>
    ),
    [BLOCKS.OL_LIST]: (children, text) => (
      <ol className="list-decimal list-inside" key={text + '-key'}>
        {children.content.map(v => (
          <li key={v.content[0].content[0].value}>
            {v.content[0].content[0].value}
          </li>
        ))}
      </ol>
    ),
    [INLINES.HYPERLINK]: (c, text) => {
      return (
        <a
          key={text + '-key'}
          href={c.data.uri}
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-2 dark:text-sky-200 text-sky-800"
        >
          {text}
        </a>
      )
    },
    [BLOCKS.HR]: () => <hr className="my-4" key={key++} />
  },
  renderMark: {
    [MARKS.CODE]: (text: string) => {
      let lang: Language = 'diff'

      if (text.startsWith('!!!')) {
        let end = text.indexOf('!!!', 2)
        lang = text.slice(3, end) as Language
        text = text.slice(end + 3)
      }
      return (
        <Prism
          withLineNumbers
          scrollAreaComponent="div"
          copyLabel="Copy code to clipboard"
          copiedLabel="Code copied to clipboard"
          language={lang}
        >
          {text}
        </Prism>
      )
    }
  },
  renderText: text => {
    return text.split('\n').reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment]
    }, [])
  }
}

const Post = ({
  title,
  headerImage,
  introText,
  paragraph
}: Post & MetaData) => {
  return (
    <Layout title={title}>
      <div className="container-xl pt-3 text-gray-800 dark:text-gray-300">
        <Head>
          <meta name="description" content={introText} />
          <meta name="title" content={'Daniel Fenz - ' + title} />
          <meta
            name="og:title"
            property="og:title"
            content={'Daniel Fenz - ' + title}
          />
        </Head>
        <div className="justify-center">
          <div className="flex flex-col justify-center">
            {headerImage ? (
              <>
                <Image
                  src={headerImage.url}
                  alt={headerImage.description}
                  className={`rounded-md aspect-[${headerImage.width}/${headerImage.height}]`}
                  width={100}
                  height={100}
                  title={introText}
                />
                <p className="text-gray-700 dark:text-gray-300 underline underline-offset-2 mb-2">
                  {introText}
                </p>
                <h1 className="text-5xl font-black text-slate-800 mb-2 tracking-tight">
                  {title}
                </h1>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
        {documentToReactComponents(paragraph.json, options)}
      </div>
    </Layout>
  )
}

export default Post

export async function getStaticPaths() {
  // Return a list of possible value for id
  const res = await client.query({ query: GET_POST_NAMES })
  return {
    paths: res.data.blogPostCollection.items.map(p => `/blog/posts/${p.name}`),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const res = await client.query<PostResponse>({
    query: GET_POST,
    variables: { search: params.id }
  })
  return { props: res.data.blogPostCollection.items[0] }
}
