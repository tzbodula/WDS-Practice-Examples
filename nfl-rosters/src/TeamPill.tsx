export function TeamPill({setTeam, abr, primary, secondary, logo} : {setTeam:any, abr:any, primary:any, secondary:any, logo:any}) {
    return (
        <>
            <button onClick={() => setTeam(abr)}style={{backgroundColor: `#${primary}`, border: `solid 2px #${secondary}`, backgroundImage: `url(${logo})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: '110px', height: '55px'}}>
            </button>
        </>
        
    )
}