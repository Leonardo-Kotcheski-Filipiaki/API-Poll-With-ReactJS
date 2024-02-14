import { PollCard } from './components/poll-card'
import { NewPollCard } from './components/new-poll-card'
export function App() {
  return(
    <div>
        <div className='mt-5 ml-5 w-full '>
          <NewPollCard ></NewPollCard>
        </div>
        <div className="mx-auto max-w-6xl my-24 space-y-6 px-5 ">
          <form className="w-full">
            <input type="text" placeholder="Busque por enquetes: " className="w-full bg-transparent text-3xl font-semibold tracking-tight placeholder:text-slate-200 outline-none text-slate-200" />
          </form>

          <div className="h-px bg-slate-200"></div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[250px] gap-6">

          <PollCard></PollCard>
          <PollCard></PollCard>
          <PollCard></PollCard>
          <PollCard></PollCard>
          <PollCard></PollCard>

          </div>
        </div>

    </div>
        
  )
}

export default App
