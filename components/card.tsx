import NextLink from 'next/link'
import Spacer from './spacer'

type CardProps = {
  title?: string
  text?: string
  children?: any
  link?: string
}

const Card = ({ title, text, children, link }: CardProps) => {
  return (
    <div className="flex flex-col flex-shrink w-4 h-4 border rounded-lg truncate justify-center content-center bg-gray-500">
      <Spacer />
      {children}
      <Spacer />
      <div className="p-2">
        {title !== undefined ? (
          <h4 className="mt-1 font-semibold truncate">
            {link ? (
              <NextLink href={link}>
                <a>{title}</a>
              </NextLink>
            ) : (
              <>{title}</>
            )}
          </h4>
        ) : (
          <></>
        )}

        <div>{text}</div>
      </div>
    </div>
  )
}

export default Card
