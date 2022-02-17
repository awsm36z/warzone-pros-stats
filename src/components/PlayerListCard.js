import { useEffect, useState } from "react";

const PlayerListCard = (props) => {
    const [name, setName] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        console.log(name);
        if (name == "") {
            setName(props.playerName)
        }
    }, [name])

    return (
        <div className="playerlistcard" >
            {loading ? (<h1>loading</h1>) :
                <div>
                    <a href = {`/${name}`}>{name}</a>
                </div>
            }
        </div>
    );
}

export default PlayerListCard;