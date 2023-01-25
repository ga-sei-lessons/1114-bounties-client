import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Home() {
    // store the details and list of all bounties in one state variable
    const [bounties, setBounties] = useState([]) // array of all bounties
    const [detailId, setDetailId] = useState('') // id of the last clicked bounty

    // show all bounties when tha page first loads
    useEffect(() => {
        const fetchBounties = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/bounties`)
                console.log(response.data)
                setBounties(response.data)
            } catch(err) {
                console.warn(err)
            }
        }
        fetchBounties()
    }, []) // empty dependancy array will run this use effect only once

    // map out our bounties, each will need a onClick that shows their detials (set their id in state)
    const bountyComponents = bounties.map(bounty => {
        return (
            <div key={`bounty-${bounty._id}`}>
                <h3>{bounty.name}</h3>
                <p>{bounty.reward}</p>
                <button
                    onClick={() => setDetailId(bounty._id)}
                >
                    Details
                </button>
            </div>
        )
    })

    // find the index of the bounty base on our id state, show its details, if bounty is not found conditionally render
    const detailBounty = bounties.find(bounty => bounty._id === detailId)
    console.log(detailBounty)

    // optional chainging
    const details = (
        <>
            <h3>{detailBounty?.name}</h3>

            <p>{detailBounty?.wantedFor}</p>
            <p>{detailBounty?.client}</p>
            <p>{detailBounty?.ship}</p>
            <h3>{detailBounty?.reward}</h3>
            <p>{detailBounty?.lastSeen}</p>
            <p>{detailBounty?.captured ? 'has been caught' : 'not caught'}</p>
        </>
    )


    return (
        <div style={{ display: 'flex' }}>   
            <div style={{ width: '50vw' }}>
                <h2>All Bounties</h2>
                {bountyComponents}
            </div>

            <div style={{ wdith: '50vw' }}>
                <h2>Details</h2>

                {detailBounty ? details : 'Click on a Bounty'}
            </div>
        </div>
    )
}