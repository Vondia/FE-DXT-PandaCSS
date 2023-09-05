import Link from 'next/link'
import { css } from '../../styled-system/css'

export default function Home() {
  return (
    <main
      className={css({
        p: '24',
        maxW: '6xl',
        ml: 'auto',
        mr: 'auto',
        display: 'flex',
        flexDir: 'column',
        alignItems: 'center',
      })}
    >
      <h1
        className={css({
          fontSize: '6xl',
          lineHeight: '6xl',
          fontWeight: 'bold',
          textAlign: 'center',
          color: 'blue.50',
          mb: '4',
        })}
      >
        C A R E N T
      </h1>
      <p
        className={css({
          color: 'white',
          fontSize: '2xl',
          lineHeight: '2xl',
          textAlign: 'center',
          fontStyle: 'italic',
          mb: '10',
        })}
      >
        B E A U T I F U L &nbsp; C A R S
      </p>
      <Link href="/cars" className={css({ p: '4', rounded: 'md', bg: { base: 'white', _hover: 'gray.300' }, color: 'blue.950' })}>
        View Cars
      </Link>
    </main>
  )
}
