import {QueryClient, QueryClientProvider, useQuery} from 'react-query'
import { Grid, Container } from '@mui/material'
import { PlayerCard } from './PlayerCard'
import './custom.css'

const queryClient = new QueryClient()

export function Roster({team} : {team: any}) {
    return (
        <>
        <QueryClientProvider client={queryClient}>
          <TeamRoster team={team}/>
        </QueryClientProvider>
        </>
      )
}

function TeamRoster({team} : {team: any}) {
    
    const {isLoading, error, data} = useQuery({
        queryKey: ['rosterData'], 
        queryFn: () =>
        fetch(`https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/${team}?enable=roster,projection,stats`).then((res) =>
          res.json()
        )
      })

    if (isLoading) return 'Loading...'


    if (error) return 'An error has occurred: ' + error.message
    

    return (
        <>
            <Container>
                <Grid container spacing={2}>
                        {data.team.athletes.map(function(player: any, i: any){
                            return (
                                <Grid item xs={2} height={256}>
                                    <PlayerCard position={player.position.abbreviation} fullName={player.fullName} headshot={`${player.headshot?.href}`} primaryColor={`#${data.team.color}`} secondaryColor={`#${data.team.alternateColor}`} logo={`${data.team.logos[1].href}`} key={i} />
                                </Grid>
                            )
                        })}
                </Grid>
            </Container>
        </>
    )
}