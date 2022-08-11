import { useQuery } from '@apollo/client/react'
import {
  GET_POST_PREVIEWS,
  PostPreview,
  PostPreviewResponse
} from '../../libs/blog/posts'
import { MetaData } from '../../libs/blog/contentful'
import NextLink from 'next/link'
import NextImage from 'next/image'
import Spacer from '../spacer'

const BlogPreviewItem = ({
  name,
  title,
  introText,
  contentfulMetadata,
  headerImage
}: PostPreview & MetaData) => {
  const link = `/blog/posts/${name}`
  // const ratio = headerImage.width / headerImage.height;
  // TODO: <div/> is a spacer
  return (
    <NextLink href={link}>
      <a>
        <div className="flex flex-col flex-shrink w-10 h-10 border round-lg overflow-hidden justify-center align-center">
          {headerImage ? (
            <div>
              <NextImage
                src={headerImage.url}
                alt={headerImage.description}
                width={headerImage.width}
                height={headerImage.height}
              />
            </div>
          ) : (
            <Spacer />
          )}
          <Spacer />
          <div className="mt-1 font-semibold line-height-normal">
            {<h2 className="text-xl font-medium">{title}</h2>}
          </div>
          <div>
            {contentfulMetadata?.tags ? (
              <div className="flex flex-row justify-center">
                {contentfulMetadata.tags.map(t => (
                  <p key={t.name}>{t.name}</p>
                ))}
              </div>
            ) : (
              <></>
            )}
            {/* {sys ? (
            <>
            {`Published: ${new Date(sys.firstPublishedAt).toLocaleDateString()}`}
            </>
          )
          : <></>} */}
          </div>

          <div>{introText}</div>
          <Spacer />
        </div>
      </a>
    </NextLink>
  )
}

const BlogPreview = ({ limit, skip }) => {
  const { loading, data, error } = useQuery<PostPreviewResponse>(
    GET_POST_PREVIEWS,
    { variables: { limit, skip } }
  )

  return (
    <div className="container-xl padding-auto">
      {loading ? (
        <div className="spinner" />
      ) : error ? (
        <div>
          <p className="text">Could not load Blog preview</p>
        </div>
      ) : (
        <div
          className={`grid grid-cols-1 md:${Math.min(
            data.blogPostCollection.items.length,
            5
          )} gap-6`}
        >
          {data.blogPostCollection.items.map(e => (
            <BlogPreviewItem
              title={e.title}
              introText={e.introText}
              name={e.name}
              key={e.name}
              sys={e.sys}
              contentfulMetadata={e.contentfulMetadata}
              headerImage={e.headerImage}
            ></BlogPreviewItem>
          ))}
        </div>
      )}
    </div>
  )
}

export default BlogPreview
