import CareerCard from '../partials/career-card'

export default function CareerList() {
  return (
    <section className='flex items-center justify-center bg-background'>
      <div className='flex w-full flex-col items-center justify-center gap-8 rounded-tl-[80px] rounded-tr-[80px] bg-white pb-12'>
        <div className='mx-auto mt-[-76px] grid items-start md:w-10/12 md:grid-cols-4'>
          <CareerCard
            imageSrc='/achievement-1.svg'
            title='Fortune Top 20'
            description='Satu-satunya perusahaan di Asia Tenggara yang dua kali berada di daftar Perusahaan Pengubah Dunia versi majalah Fortune'
          />
          <CareerCard
            className='hidden md:flex'
            imageSrc='/achievement-2.svg'
            title='Berkontribusi lebih dari $7.1 triliun'
            description='Penggerak roda perekonomian Indonesia'
          />
          <CareerCard
            className='hidden md:flex'
            imageSrc='/achievement-3.svg'
            title='Jaket hijau, pergerakan juga hijau'
            description='Gojek mengurangi pemakaian plastik hingga 11.3 ton sejak Oktober 2020'
          />
          <CareerCard
            className='hidden md:flex'
            imageSrc='/achievement-4.svg'
            title='Tumbuh 80% sejak pandemi'
            description='Mitra Food merchants naik 80% sejak pandemi berkat solusi digitalisasi Gojek untuk UMKM.'
          />
        </div>
        <div className='flex gap-2 md:hidden'>
          <div className='bg-primary h-2 w-2 rounded-full'></div>
          <div className='h-2 w-2 rounded-full bg-gray-400'></div>
          <div className='h-2 w-2 rounded-full bg-gray-400'></div>
          <div className='h-2 w-2 rounded-full bg-gray-400'></div>
        </div>
      </div>
    </section>
  )
}
