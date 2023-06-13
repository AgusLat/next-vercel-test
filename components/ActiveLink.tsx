import React, { CSSProperties, FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const styles: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline'
}

interface Props {
  text: string;
  href: string;
}


export const ActiveLink: FC<Props> = ({text, href}) => {
  
const route = useRouter()

console.log(route)
//SE VE DENTRO DEL OBJETO route UNA PROPIEDAD 'asPath'

  return (

    //SI EL 'asPath' COINCIDE CON EL href DEL COMPONENTE, APLICA EL CSS
    <Link style={route.asPath === href ? styles: undefined} href={href}>{text}</Link>
  )
}
