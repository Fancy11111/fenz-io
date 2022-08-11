import NextLink from 'next/link'
import Image from 'next/image'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <div className="w-full text-center cursor-pointer">
    <a>
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <a href={href} target="_blank" rel="noreferrer">
        <p className="mt-2">{title}</p>
      </a>
      <p className="font-md">{children}</p>
    </a>
  </div>
)

type WorkGridItemProp = {
  children?: any
  id: string
  title: string
  thumbnail?: any
}

export const WorkGridItem = ({
  children,
  id,
  title,
  thumbnail
}: WorkGridItemProp) => (
  <div className="w-full text-center">
    <NextLink href={`/works/${id}`}>
      <div className="cursor-pointer">
        {thumbnail ? (
          <>
            <Image
              src={thumbnail}
              alt={title}
              layout="fill"
              className="grid-item-thumbnail"
            />
            <NextLink href={`/works/${id}`}>
              <p className="mt-2 text-xl">{title}</p>
            </NextLink>
          </>
        ) : (
          <NextLink href={`/works/${id}`}>
            <h1 className="text-2xl">{title}</h1>
          </NextLink>
        )}

        <p className="text-xl">{children}</p>
      </div>
    </NextLink>
  </div>
)
