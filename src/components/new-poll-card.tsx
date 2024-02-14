import * as Dialog from "@radix-ui/react-dialog"
import { X } from 'lucide-react'

export function NewPollCard(){
    return (
        <Dialog.Root>
            <Dialog.Trigger className="bg-opacity-60 rounded-md p-3 mt-3 ml-3 font-medium bg-slate-100/70">
                <button >
                    <span>Criar uma nova enquete!</span>
                </button>
            </Dialog.Trigger>


        <Dialog.Portal>
            <Dialog.Overlay className="inset-0 fixed bg-black/50">
                <Dialog.Content className="fixed inset-0 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[640px] md:h-[60vh] w-full bg-stone-800 md:rounded-md flex flex-col outline-none overflow-hidden">
                    <Dialog.Close className="absolute right-0 top-0 bg-stone-800 p-1.5 text-slate-400 hover:text-slate-100">
                        <X className="size-5"/>
                    </Dialog.Close>

                    <div className="flex flex-1 flex-col gap-3 p-5">
                        <span className="text-sm font-medium text-slate-100">
                            Criar Enquete
                        </span>
                        <div className="w-full flex-1 flex flex-col justify-center">
                            <input type="text" className="w-8/12 mt-4 mx-auto bg-transparent outline-none text-slate-100 placeholder:text-slate-100/70" placeholder="Titulo da enquete, exemplo: Melhor marca de carro:"/>
                            <div className="h-px w-8/12 bg-slate-200 mx-auto"></div>
                            
                            <textarea name="options" className="w-8/12 mt-4 mx-auto h-full bg-transparent outline-none text-slate-100 placeholder:text-slate-100/70" placeholder="Opções separada por virgula: &#13;BMW, Chevrolet"/>
                            <div className="h-px w-8/12 bg-slate-200 mx-auto"></div>
                        </div>

                    </div>

                    <button type="button" className="w-full  bg-gradient-to-t from-zinc-800/40 to-zinc-500/60 py-4 text-center text-sm text-slate-300 outline-none font-medium group">
                        <span className="text-lime-400 group-hover:underline">Criar enquete!</span>
                    </button>   
                </Dialog.Content>
            </Dialog.Overlay>
        </Dialog.Portal>
    </Dialog.Root>
    )
}