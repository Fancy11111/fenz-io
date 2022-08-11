import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import { useThemeMode } from '../libs/theme/theme'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  & img {
    transition: transform 0.5s ease-in-out;
  }

  &:hover img {
    transform: rotate(360deg);
  }
`

const Logo = () => {
  const img = `/logo${useThemeMode('', '-dark')}.png`
  return (
    <Link href="/">
      <a>
        <div className="inline-flex text-2xl h-8 w-44 flex-row flex-auto">
          <Image src={img} width={20} height={20} alt="logo" />
          <p className="text-gray-800 dark:text-gray-300 font-bold ml-3">
            Daniel Fenz
          </p>
        </div>
      </a>
    </Link>
  )
}

export default Logo
