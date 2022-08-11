import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import BlogPreview from '../components/blog/blog-preview'
import { client } from '../libs/blog/contentful'
import { AMOUNT_OF_POSTS } from '../libs/blog/posts'
import { MyRadioGroup } from '../components/my-radio'
import Layout from '../components/layouts/article'

const Blog = ({ amount }) => {
  const [limit, setLimit] = useState<any>(10)
  const [offset, setOffset] = useState(1)
  const handleLimitChange = e => {
    e.preventDefault()
    setLimit(Number.parseInt(e.target.value))
    setOffset(1)
  }

  const handleOffsetChange = e => {
    console.log(e)

    setOffset(Number.parseInt(e))
  }
  const pageAmount = Math.ceil(amount / limit)
  const pages = []
  for (let i = 1; i < pageAmount + 1; i++) {
    pages.push({value: i})
  }

  return (
    <Layout title="My Blog">
      <h1 className="text-2xl font-black">My Blog</h1>
      <div className="container-lg mt-5">
        <div>
          <Listbox value={limit} onChange={handleLimitChange}>
            <Listbox.Button>{limit}</Listbox.Button>
            <Listbox.Options>
              {[1, 2, 25, 50].map(limitOpt => (
                <Listbox.Option key={limitOpt} value={limitOpt}>
                  {limitOpt}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
        </div>
        <div className="min-h-[60vh] mt-10">
          <BlogPreview limit={limit} skip={(offset - 1) * limit} />
        </div>
        <div className="mt-5">
          <div id="page">
            <label htmlFor="pages">Page</label>
            <MyRadioGroup
              onChange={handleOffsetChange}
              options={pages}
              defaultValue={1}
              name="pages"
            ></MyRadioGroup>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps(_) {
  // Fetch necessary data for the blog post using params.id
  const res = await client.query({ query: AMOUNT_OF_POSTS })

  return { props: { amount: res.data.blogPostCollection.total } }
}

export default Blog
