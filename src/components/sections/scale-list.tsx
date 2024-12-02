import ScaleCard from '../partials/scale-card'

export default function ScaleList() {
  return (
    <section className='flex flex-col items-center justify-center gap-4 bg-white px-4 py-24'>
      <div className='grid w-full items-start gap-10 lg:w-[80%] lg:grid-cols-4'>
        <ScaleCard
          className='bg-[#7CCC6C] shadow-[0_0_32px_10px_rgba(178,229,184,1)]'
          imageSrc='/scale-1.png'
          title='190 juta+'
          description='jumlah install aplikasi kami'
        />
        <ScaleCard
          className='hidden bg-[#D48BC8] shadow-[0_0_32px_10px_rgba(208,180,212,1)] md:block'
          imageSrc='/scale-2.png'
          title='2 juta+'
          description='mitra Driver yang sudah bergabung dengan kami
'
        />
        <ScaleCard
          className='hidden bg-[#FFAE62] shadow-[0_0_32px_10px_rgba(208,180,212,1)] md:block'
          imageSrc='/scale-3.png'
          title='900.000+'
          description='jumlah mitra GoFood'
        />
        <ScaleCard
          className='hidden bg-[#4AC9E3] shadow-[0_0_32px_10px_rgba(178,230,242,1)] md:block'
          imageSrc='/scale-4.png'
          title='2.448x'
          description='lipat kenaikan pengunduhan aplikasi Gojek dari 2015 sampai 2020'
        />
      </div>
      <div className='flex gap-2 md:hidden'>
        <div className='bg-primary h-2 w-2 rounded-full'></div>
        <div className='h-2 w-2 rounded-full bg-gray-400'></div>
        <div className='h-2 w-2 rounded-full bg-gray-400'></div>
        <div className='h-2 w-2 rounded-full bg-gray-400'></div>
      </div>
    </section>
  )
}
