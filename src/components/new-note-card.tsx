import { ChangeEvent, FormEvent, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { toast } from "sonner";
import { X } from "lucide-react";

export function NewNoteCard() {
  const [shouldShowOnboarding, setShouldShowOnboarding] = useState(true);
  const [content, setContent] = useState("");

  function handleStartEditor() {
    setShouldShowOnboarding(false);
  }

  function handleContentChanged(event: ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value);
    if (event.target.value === "") {
      setShouldShowOnboarding(true);
    }
  }

  function handleSaveNote(event: FormEvent) {
    event.preventDefault();
    console.log(content);

    toast.success("Nota criada com sucesso!");
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger className="rounded-md outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400 flex flex-col text-left gap-3 p-5  bg-slate-700">
        <span className="text-sm font-medium text-slate-200">
          Adicionar notas
        </span>
        <p className="text-sm leading-6 text-slate-400">
          Grave uma nota em áudio que será convertido para texto automaticamente
        </p>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/60" />

        <Dialog.Content className="fixed overflow-hidden h-[60vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[640px] bg-slate-700 rounded-md flex outline-none flex-col">
          <Dialog.Close className="absolute hover:text-slate-100 right-0 top-0 p-1.5 text-slate-400">
            <X className="w-5 h-5" />
          </Dialog.Close>
          <form onSubmit={handleSaveNote} className="flex flex-1 flex-col">
            <div className="flex flex-1 flex-col gap-3 p-5">
              <span className="text-sm font-medium text-slate-300">
                Adicionar nota
              </span>
              {shouldShowOnboarding ? (
                <p className="text-sm flex gap-1 leading-6 text-slate-400">
                  Comece{" "}
                  <button className="font-medium hover:underline text-lime-400">
                    Gravando uma nota
                  </button>
                  em áudio ou se preferir{" "}
                  <button
                    onClick={handleStartEditor}
                    className="font-medium text-lime-400 hover:underline"
                  >
                    utilize apenas texto
                  </button>
                </p>
              ) : (
                <textarea
                  autoFocus
                  className="text-sm leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none"
                  onChange={handleContentChanged}
                />
              )}
            </div>
            <button
              className="w-full hover:bg-lime-500 bg-lime-400 py-4 text-center text-sm text-lime-950 outline-none font-medium "
              type="submit"
            >
              Salvar nota
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
