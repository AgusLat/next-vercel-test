import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'


export default function HomePage() {
  return (

    <MainLayout>
      {/* ASI SE ESCRIBE EL CSS DESDE EL globals, SE PUEDE PONER ASI TAMBIEN className="description"*/}
      <div className={'description'}>
        <h2>HOME</h2>
        <h1>Ir a 
          <Link href='/about'>
            ABOUT
          </Link>
        </h1>
        <p>
          Get started by editing&nbsp;
          <code className={'code'}>pages/index.tsx</code>
        </p>
      </div>

    </MainLayout>
  )
}
