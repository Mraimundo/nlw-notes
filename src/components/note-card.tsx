import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface NoteCardProps {
  note: {
    id: string;
    date: Date;
    content: string;
  };
  onNoteDeleted: (id: string) => void;
}

export function NoteCard({ note, onNoteDeleted }: NoteCardProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="rounded-md flex flex-col gap-3 text-left p-5 outline-none bg-slate-800 overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
        <span className="text-sm font-medium text-slate-300">
          {formatDistanceToNow(note.date, { locale: ptBR, addSuffix: true })}
        </span>
        <p className="text-sm leading-6 text-slate-400">{note.content}</p>
        <div className="absolute bottom-0 right-0 left-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/60" />

        <Dialog.Content className="fixed overflow-hidden h-[60vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[640px] bg-slate-700 rounded-md flex outline-none flex-col">
          <Dialog.Close className="absolute hover:text-slate-100 right-0 top-0 p-1.5 text-slate-400">
            <X className="w-5 h-5" />
          </Dialog.Close>
          <div className="flex flex-1 flex-col gap-3 p-5">
            <span className="text-sm font-medium text-slate-300">
              {formatDistanceToNow(note.date, {
                locale: ptBR,
                addSuffix: true,
              })}
            </span>
            <p className="text-sm leading-6 text-slate-400">{note.content}</p>
          </div>
          <button
            className="w-full group bg-slate-800 py-4 text-center text-sm text-slate-300 outline-none font-medium "
            type="button"
            onClick={() => onNoteDeleted(note.id)}
          >
            Deseja{" "}
            <span className="group-hover:underline text-red-400">
              apagar essa nota
            </span>
            ?
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
