import { Button } from "./Button"

type Genre = {
  id: number
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family'
  title: string
}

type SideBarProps = {
  genres: Genre[]
  selectedGenreId: number
  onItemMenuClick: (genreId: number) => void
}

export const SideBar = ({ genres, selectedGenreId, onItemMenuClick }: SideBarProps) => (
  <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => onItemMenuClick(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>

  </nav>
)