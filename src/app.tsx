import logo from "./assets/logo-notes.svg";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="Logo" />
      <form className="w-full">
        <input
          className="w-full bg-transparent text-3xl font-semibold outline-none tracking-tight placeholder:text-slate-500"
          type="text"
          placeholder="Busque em suas notas..."
        />
      </form>
      <div className="h-px bg-slate-700" />
      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard />
        <NoteCard
          note={{
            date: new Date(),
            content:
              "Grave uma nota em áudio que será convertido para texto automaticament",
          }}
        />
        <NoteCard
          note={{
            date: new Date(),
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, aspernatur. Nihil quibusdam quas cupiditate ratione corrupti labore temporibus voluptatem autem quasi eius impedit quidem earum consectetur odit, eveniet veritatis provident.",
          }}
        />
      </div>
    </div>
  );
}
