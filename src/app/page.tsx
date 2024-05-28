import { Home as HomeIcon, Search, Library } from 'lucide-react';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <nav className="space-y-5">
            <a
              href="#"
              className="flex items-center gap-3 text-sn font-semibold text-zinc-200"
            >
              <HomeIcon />
              Início
            </a>
            <a
              href="#"
              className="flex items-center gap-3 text-sn font-semibold text-zinc-200"
            >
              <Search />
              Buscar
            </a>
            <a
              href="#"
              className="flex items-center gap-3 text-sn font-semibold text-zinc-200"
            >
              <Library />
              Sua Biblioteca
            </a>
          </nav>
          <nav className="mt-6 pt-10 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className='text-sn hover:text-zinc-400'>Funk</a>
            <a href="" className='text-sn hover:text-zinc-400'>Pop</a>
            <a href="" className='text-sn hover:text-zinc-400'>Hip Hop</a>
            <a href="" className='text-sn hover:text-zinc-400'>Jazz</a>
            <a href="" className='text-sn hover:text-zinc-400'>Retro</a>
          </nav>
        </aside>
        <main className="flex-1 p-6">main</main>
      </div>
      <div>
        <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
          footer
        </footer>
      </div>
    </div>
  );
}
