import { Modal } from '@/components/modals/Modal'
import { Navbar } from '@/components/layout/Navbar'
import { HeroSection } from '@/components/sections/HeroSection'
import { BulletinBoard } from '@/components/sections/BulletinBoard'
import { AcademicGrid } from '@/components/sections/AcademicGrid'
import { Team } from '@/components/sections/Team'
import { Sede } from '@/components/sections/Sede'
import { EnlacesInteres } from '@/components/sections/EnlacesInteres'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/layout/Footer'
import { ScrollToTop } from '@/components/ui/ScrollToTop'

export default function App() {
  return (
    <>
      <Modal />
      <Navbar />
      <main>
        <HeroSection />
        <BulletinBoard />
        <AcademicGrid />
        <Team />
        <Sede />
        <EnlacesInteres />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}