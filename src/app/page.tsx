import {  ChevronRight ,ChevronLeft , Play} from 'lucide-react';
import Image from 'next/image';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className='flex items-center gap-4'>
         <button>
          <ChevronLeft className='rounded-full bg-black/40 p-1' />
         </button>
         <button>
          <ChevronRight className='rounded-full bg-black/40 p-1' />
         </button>
          </div>
          <h1 className='font-semibold text-3xl mt-10'>
            Boa Tarde
          </h1>

          <div className='grid grid-cols-3 gap-4 mt-10'>
          <a href='#' className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src={'/album.jpg'} width={104} height={104} alt={'capa do album do Kayblack'} />
              <strong>Contradições</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src={'/album.jpg'} width={104} height={104} alt={'capa do album do Kayblack'} />
              <strong>Contradições</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src={'/album.jpg'} width={104} height={104} alt={'capa do album do Kayblack'} />
              <strong>Contradições</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src={'/album.jpg'} width={104} height={104} alt={'capa do album do Kayblack'} />
              <strong>Contradições</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src={'/album.jpg'} width={104} height={104} alt={'capa do album do Kayblack'} />
              <strong>Contradições</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src={'/album.jpg'} width={104} height={104} alt={'capa do album do Kayblack'} />
              <strong>Contradições</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>


          </div>

          <h2 className='font-semibold text-2xl mt-10'>
            Feito para Gabriel Ortiz
          </h2>

          <div className='grid grid-cols-5 gap-4 mt-4'>
            <a href='#' className='flex flex-col gap-2 bg-white/5 rounded p-3 hover:bg-white/10'>
            <Image src={'/album.jpg'} className='w-full' width={104} height={104} alt={'capa do album do Kayblack'} />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-sm text-zinc-500'>KayBlack,Veigh,Vulgo FK,Nagali e mais</span>
            </a>
            <a href='#' className='flex flex-col gap-2 bg-white/5 rounded p-3 hover:bg-white/10'>
            <Image src={'/album.jpg'} className='w-full' width={104} height={104} alt={'capa do album do Kayblack'} />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span  className='textsms text-zinc-500'>KayBlack,Veigh,Vulgo FK,Nagali e mais</span>
            </a>
            <a href='#' className='flex flex-col gap-2 bg-white/5 rounded p-3 hover:bg-white/10'>
            <Image src={'/album.jpg'} className='w-full' width={104} height={104} alt={'capa do album do Kayblack'} />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-sm text-zinc-500'>KayBlack,Veigh,Vulgo FK,Nagali e mais</span>
            </a>
            <a href='#' className='flex flex-col gap-2 bg-white/5 rounded p-3 hover:bg-white/10'>
            <Image src={'/album.jpg'} className='w-full' width={104} height={104} alt={'capa do album do Kayblack'} />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-sm text-zinc-500'>KayBlack,Veigh,Vulgo FK,Nagali e mais</span>
            </a>
            <a href='#' className='flex flex-col gap-2 bg-white/5 rounded p-3 hover:bg-white/10'>
            <Image src={'/album.jpg'} className='w-full' width={104} height={104} alt={'capa do album do Kayblack'} />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-sm text-zinc-500'>KayBlack,Veigh,Vulgo FK,Nagali e mais</span>
            </a>
          </div>
        </main>
      </div>
      <div>
       <Footer />
      </div>
    </div>
  );
}
