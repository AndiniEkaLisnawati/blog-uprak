import PetaniHero from '../assets/img/petanikode-hero.svg'

export default function Hero() {
  return (
    <section
      id="home"
      className="text-gray-100 bg-slate-800 md:pt-16"
    >
      <div className="container mx-auto flex flex-col px-4 lg:max-w-7xl py-24 text-center md:text-left">
        <div className="relative py-6 md:py-0 flex justify-center">
          <img className='origin-bottom-right right-0 -bottom-96 static lg:absolute w-100 md:w-96 lg:w-2/5' src={PetaniHero} alt="" />
        </div>

     <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 tracking-tighter">
    Petani Kode
  </h1>

  <p className="text-lg sm:text-xl md:text-2xl font-light mb-4">
    Belajar Budidaya kode <i>(coding)</i> dengan tutorial yang mudah dipahami. <i>Mostly</i> pakai Linux
  </p>

  
</div>


      <div className="mt-5 flex flex-row gap-3 justify-center md:justify-start">
        <a href="" className='px-3 py-2 bg-teal-600 hover:bg-teal-700 focus:ring-2 focus:ring-teal-400 rounded-lg active:bg-teal-500'> Mulai Belajar</a>

        <a href="#newsletter" className='px-3 py-2 bg-teal-400/10 border border-teal-400/50 hover:bg-teal-700 focus:ring-2 focus:ring-teal-400 text-teal-100 rounded-lg active:bg-teal-500'>Join Newsletter</a>
      </div>
      </div>
    </section>
  );
}
