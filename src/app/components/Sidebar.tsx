import { Home as HomeIcon, Search, Library} from 'lucide-react';
import ListPlaylist from './ListPlaylist';

export default function Sidebar(){
  return(
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
          <ListPlaylist />
        </aside>
  )
}