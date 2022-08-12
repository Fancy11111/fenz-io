import NextLink from 'next/link'
import { Spacer } from './spacer'
import NextImage from 'next/image'

type CardProps = {
  title?: string
  text?: string
  children?: any
  link?: string
  image?: string
  imageAlt: string
}

const Card = ({ title, text, link, image, imageAlt }: CardProps) => {
  return (
    <div className="bg-white hover:bg-gray-800 hover:dark:bg-white dark:bg-gray-700 group shadow-xl hover:shadow-none cursor-pointer w-64 h-96 my-8 rounded-3xl flex flex-col items-center justify-center transition-all duration-200 ease-in-out">
      <div className="relative mt-2 mx-2">
        <div className="h-56 rounded-2xl overflow-hidden">
          <NextImage
            src={image}
            className="object-cover w-full h-full"
            layout="fill"
            alt={imageAlt}
          />
        </div>
      </div>
      <div className="pt-10 pb-6 w-full px-4">
        <h1 className="font-medium leading-none text-lg tracking-wider text-gray-700 group-hover:text-gray-200 dark:text-gray-200 dark:group-hover:text-gray-700 transition-all duration-200 ease-in-out">{` ${title}`}</h1>
        <span className="text-gray-600 group-hover:text-gray-300 dark:group-hover:text-gray-600 dark:text-gray-300 transition-all duration-200 ease-in-out">
          {text}
        </span>
      </div>
    </div>
  )
}

export default Card
