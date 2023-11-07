import { filterLeague } from "../../../api"
import LeagueTable from "../../../components/LeagueTable"


const Bundesliga = async () => {
  const getEgyptianPremierLeague = await filterLeague('Egyptian Premier League')
  return (
    <div className='w-[600px]'>
      {getEgyptianPremierLeague.map((data) => (
        <div key={data.id}>
          <LeagueTable data={data} />
        </div>
      ))}
    </div>
  )
}

export default Bundesliga