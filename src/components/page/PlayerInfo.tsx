import "./PlayerInfo.css";

export default function PlayerInfo({name, description}: {name: string, description: string}) {
    return <div className="player-info">
        <h1 className="player-name">{name}</h1>
        <img src="" />
        <p className="player-description">{description}</p>
    </div>
}