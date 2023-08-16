import {QueryClient, QueryClientProvider, useQuery} from 'react-query'
import { TeamPill } from './TeamPill'
import Container from '@mui/material/Container/Container'
import { Roster } from './TeamRoster'
import { useState } from 'react'



const queryClient = new QueryClient()

function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Teams/>
    </QueryClientProvider>
    </>
  )
}

function Teams() {

  const [team, setTeam] = useState("ARI");
  const {isLoading, error, data} = useQuery({
    queryKey: ['teamData'], 
    queryFn: () =>
    fetch('https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams').then((res) =>
      res.json()
    )
  })

  if (isLoading) return 'Loading...'


  if (error) return 'An error has occurred: ' + error.message



 

  return (
    <>
      <Container>
        {data.sports[0].leagues[0].teams.map(function(nflteam: any, i: any){
              return <TeamPill setTeam={setTeam} abr={nflteam.team.abbreviation} primary={nflteam.team.color} secondary={nflteam.team.alternateColor} logo={nflteam.team.logos[1].href} key={i} />;
        })}
      </Container>
      <Container>
        <Roster team={team}/>
      </Container>
    </>
  )
}

export default App
