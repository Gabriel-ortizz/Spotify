import {  Play, SkipBack , Shuffle, Repeat , SkipForward ,Mic2 , LayoutList , Laptop2 , Volume , Maximize2} from 'lucide-react';
import Image from 'next/image';

export default function Footer(){
return(
  <div className="flex items-center justify-between bg-zinc-800 border-t border-zinc-700 px-6 py-4">
  <div className='flex items-center gap-3 '>
  <Image src={'/album.jpg'} className='rounded' width={60} height={60} alt={'capa do album do Kayblack'} />
  <div className='flex flex-col gap-1'>
    <strong className='font-normal'>Melhor Só</strong>
    <span className='text-xs text-zinc-400'>KayBlack,Baco Exu do Blues,Marquinho no Beat</span>
  </div>
  </div>
  <div className='flex flex-col items-center'>
  <div className='flex items-center gap-4'>
 <Shuffle size={20} className='text-zinc-200' />
 <SkipBack size={20} className='text-zinc-200' />
 <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black'>
        <Play />
      </button>

  <SkipForward size={20} className='text-zinc-200'/>
  <Repeat size={20} className='text-zinc-200'/>   
  </div>
  <div className='flex items-center gap-2'>
  <span className='text-xs text-zinc-400'>1:20</span>
  <div className='h-1 rounded-full w-96 bg-zinc-600'>
  <div className='bg-zinc-200 w-40 h-1'></div>
  </div>
  <span className='text-xs text-zinc-400'>3:49</span>
  </div>
  </div>

  <div className='flex items-center gap-4'>
    <Mic2 size={20} />
    <LayoutList size={20} />
    <Laptop2 size={20} />
    <div className='flex items-center gap-2'>
      <Volume size={20} />
      <div className='h-1 rounded-full w-24 bg-zinc-600'>
  <div className='bg-zinc-200 w-10 h-1'></div>
  </div>
    </div>
   <Maximize2 size={20} />
  </div>
 
  
</div>
)
}