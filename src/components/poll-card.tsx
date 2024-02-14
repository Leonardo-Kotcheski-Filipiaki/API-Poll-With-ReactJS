import * as Dialog  from "@radix-ui/react-dialog"

export function PollCard(){
    return (
        <Dialog.Root>
            <Dialog.Trigger className="rounded-md text-left flex-col bg-slate-300 p-5 space-y-5 overflow-hidden relative outline-none hover:ring-2 hover:border-r-indigo-300 focus-visible:ring-2 focus-visible:ring-indigo-300">
            <span className="text-lg font-medium text-slate-950">
                Qual a melhor marca?
            </span>

            <div className="flex-1 font-medium align-middle justify-center">
                <dl>
                    <dt>   
                        {/* <input className="size-3" type="checkbox" name="option" value={0}/> */}
                        <span className="text-base ml-1">BMW</span>
                    </dt>
                    <dt>   
                        {/* <input className="size-3" type="checkbox" name="option" value={0}/> */}
                        <span className="text-base ml-1">Chevrolet</span>
                    </dt>
                    <dt>   
                        {/* <input className="size-3" type="checkbox" name="option" value={0}/> */}
                        <span className="text-base ml-1">Ferrari</span>
                    </dt>
                </dl>
            </div>


            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-50 to-slate/0 pointer-events-none"></div>
            </Dialog.Trigger>
        </Dialog.Root>
    )
}