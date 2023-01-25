import { useState } from 'react'

export default function EditForm(props) {
    // state that holds the values that the user has typed
    const [form, setForm] = useState({
        // initialize all of the values as empty strings
        name: props.bounty.name,
        wantedFor: props.bounty.wantedFor,
        client: props.bounty.client,
        ship: props.bounty.ship,
        reward: props.bounty.reward,
        lastSeen: props.bounty.lastSeen,
        captured: props.bounty.captured
    })

    const handleSubmit = e => {

    }

    return (
        <>  
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input 
                            type='text'
                            id='name'
                            placeholder='name...'
                            value={form.name}
                            onChange={e => setForm({ ...form, name: e.target.value })}
                        />

                        <label htmlFor='wantedFor'>Wanted For:</label>
                        <input 
                            type='text'
                            id='wantedFor'
                            placeholder='Wanted For...'
                            value={form.wantedFor}
                            onChange={e => setForm({ ...form, wantedFor: e.target.value })}
                        />
                    </div>

                    <div>
                        <label htmlFor='client'>Client:</label>
                        <input 
                            type='text'
                            id='client'
                            placeholder='client...'
                            value={form.client}
                            onChange={e => setForm({ ...form, client: e.target.value })}
                        />
                        
                        <label htmlFor='ship'>Ship:</label>
                        <input 
                            type='text'
                            id='ship'
                            placeholder='Ship...'
                            value={form.ship}
                            onChange={e => setForm({ ...form, ship: e.target.value })}
                        />
                    </div>
                    
                    <div>
                        <label htmlFor='reward'>Reward:</label>
                        <input 
                            type='text'
                            id='reward'
                            placeholder='Reward...'
                            value={form.reward}
                            onChange={e => setForm({ ...form, reward: e.target.value })}
                        />
                        
                        <label htmlFor='lastSeen'>Last Seen:</label>
                        <input 
                            type='text'
                            id='lastSeen'
                            placeholder='Last Seen...'
                            value={form.lastSeen}
                            onChange={e => setForm({ ...form, lastSeen: e.target.value })}
                        />
                    </div>

                    <div>
                        <label htmlFor="captured">Has been Captured:</label>
                        <input 
                            type='checkbox'
                            id='captured'
                            value={form.captured}
                            onChange={() => setForm({ ...form, captured: !form.captured })}
                        />
                    </div>

                    <button type='submit'>Submit</button>
                </form>
            </div>

            <button onClick={props.handleShowFormClick}>Cancel</button>
        </>
    )
}