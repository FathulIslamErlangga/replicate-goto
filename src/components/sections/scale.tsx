import Button from '../elements/button'
import SectionHeader from '../elements/section-header'

export default function Scale() {
  return (
    <section className='flex flex-col items-center justify-center gap-4 bg-white px-4 py-10 md:pt-20'>
      <SectionHeader color='black'>Skala kami</SectionHeader>
      <Button>Gabung</Button>
    </section>
  )
}