import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'
import { DarkLayout } from '@/components/layouts/DarkLayout'
import { ReactElement } from 'react'

export default function AboutPage() {
  return (
    <>

      <div className={'description'}>
        <h2>ABOUT</h2>
        <h1>Volver al
          <Link href='/'>
          HOME
          </Link> 
        </h1>
      </div>

    </>
  )
}

AboutPage.getLayout = function getLayout( page:ReactElement ){
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
}