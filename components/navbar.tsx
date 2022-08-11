import Logo from './logo'
import NextLink from 'next/link'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, children }) => {
  const active = path === href
  return (
    <NextLink href={href}>
      <a
        className={`px-2 text-xl hover:underline underline-offset-2 ${
          active
            ? 'text-slate-700 dark:text-slate-100 font-bold'
            : 'text-gray-500 dark:text-gray-200 font-semibold'
        }`}
      >
        {children}
      </a>
    </NextLink>
  )
}

type MobileNavLink = {
  path: string
  text: string
  children?: any
}

const MobileNavLink = ({ path, text, children }: MobileNavLink) => {
  return (
    <NextLink href={path} passHref>
      <a>
        {text}
        {children}
      </a>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props
  return (
    <nav
      className="fixed w-full bg-opacity-70 dark:bg-opacity-70 bg-gray-100 dark:bg-gray-700  backdrop-blur-md z-10 py-4"
      {...props}
    >
      <div className="flex container px-4 md:w-10/12 md:mx-auto wrap justify-around items-center h-full">
        <div className="flex flex-row w-2/12 items-center mr-3">
          <h1 className="text-lg tracking-tight">
            <Logo />
          </h1>
        </div>
        <div className="flex flex-row justify-between items-center h-full md:pr-40 ">
          <LinkItem href="/education" path={path}>
            Education
          </LinkItem>
          <LinkItem href="/work" path={path}>
            Work
          </LinkItem>
          <LinkItem href="/blog" path={path}>
            Blog
          </LinkItem>
        </div>
        <div className="self-right w-auto">
          <ThemeToggleButton />
          <div className="ml-2 inline-block md:hidden">
            <nav>
              <button
              // as={IconButton}
              // icon={<HamburgerIcon />}
              // variant="outline"
              // aria-label="menu"
              />
              <ul>
                <li>
                  <MobileNavLink text="Home" path="/"></MobileNavLink>
                </li>
                <li>
                  <MobileNavLink
                    text="Education"
                    path="/education"
                  ></MobileNavLink>
                </li>
                <li>
                  <MobileNavLink text="Work" path="/work"></MobileNavLink>
                </li>
                <li>
                  <MobileNavLink text="Blog" path="/blog"></MobileNavLink>
                </li>
                <li>
                  <a
                    href="https://github.com/Fancy11111/fenz-io"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Sourcecode
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
