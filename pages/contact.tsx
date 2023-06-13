import Link from "next/link"
import { MainLayout } from "@/components/layouts/MainLayout"

export default function ContactPage() {

    return(

      <MainLayout>
        
        <div className={'description'}>
          <h2>CONTACT</h2>
          <h1>Volver al
            <Link href='/'>
              HOME
            </Link> 
          </h1>
        </div>

      </MainLayout>
    )
}