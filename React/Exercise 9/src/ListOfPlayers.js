function ListofPlayers() {

    const players = [
        { name: "Virat Kohli", score: 95 },
        { name: "Rohit Sharma", score: 88 },
        { name: "Shubman Gill", score: 76 },
        { name: "KL Rahul", score: 60 },
        { name: "Hardik Pandya", score: 82 },
        { name: "Ravindra Jadeja", score: 65 },
        { name: "R Ashwin", score: 71 },
        { name: "Mohammed Shami", score: 55 },
        { name: "Jasprit Bumrah", score: 90 },
        { name: "Kuldeep Yadav", score: 45 },
        { name: "Mohammed Siraj", score: 68 }
    ];

    const lowScorePlayers = players.filter(player => player.score < 70);

    return (
        <div>

            <h2>List of Players</h2>

            {players.map((player, index) => (
                <p key={index}>
                    {player.name} - {player.score}
                </p>
            ))}

            <h2>Players with Score Below 70</h2>

            {lowScorePlayers.map((player, index) => (
                <p key={index}>
                    {player.name} - {player.score}
                </p>
            ))}

        </div>
    );
}

export default ListofPlayers;