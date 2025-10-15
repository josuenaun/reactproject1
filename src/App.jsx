import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    return (
        <section className="App">
            <TwitterFollowCard userName="midudev" name="Miguel Angel Durán"/>
            <TwitterFollowCard userName="pheralb" name="Pablo Hernandez"/>
            <TwitterFollowCard userName="elonmusk" name="Elon Musk"/>
            <TwitterFollowCard userName="vxnder" name="Vanderhart"/>
        </section>
    )
}