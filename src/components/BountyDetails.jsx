export default function BountyDetails(props) {
    return (
        <>
            <h3>Name: {props.bounty.name}</h3>

            <p>Crime: {props.bounty.wantedFor}</p>
            <p>Posted By: {props.bounty.client}</p>
            <p>Seen Riding in: {props.bounty.ship}</p>
            <h3>${props.bounty.reward}</h3>
            <p>Seen at: {props.bounty.lastSeen}</p>
            <p>{props.bounty.captured ? 'has been caught' : 'not caught'}</p>

            <button onClick={props.handleShowFormClick}>Edit</button>
        </> 
    )
}