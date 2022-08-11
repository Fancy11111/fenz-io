import NextLink from 'next/link'

const NotFound = () => {
  return (
    <div>
      <h1 className="text-xl">Not Found</h1>
      <p>The page you are looking for was not found.</p>
      <hr className="my-6" />
      <div className="my-6 items-center">
        <NextLink href="/">
          <button className="bg-primary">Return to home</button>
        </NextLink>
      </div>
    </div>
  )
}

export default NotFound
