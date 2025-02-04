import {useState} from "react";

function Square({value, onSquareClick}) {
    return <button className="square" onClick={onSquareClick}>{value}</button>
}

function Triad({x, y, z, squareClick}) {

    return <div className="board-row">
        <Square value={x} onSquareClick={() => squareClick(x)}/>
        <Square value={y} onSquareClick={() => squareClick(y)}/>
        <Square value={z} onSquareClick={() => squareClick(z)}/>
    </div>
}

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const handleClick = (i) => {
        console.log('test: ' + i)
        const nextSquares = squares.slice()
        nextSquares[i] = "X"
        setSquares(nextSquares)
    }

    return (
        <>
            <Triad x={squares[0]} y={squares[1]} z={squares[2]} squareClick={handleClick}/>
            <Triad x={squares[3]} y={squares[4]} z={squares[5]} squareClick={handleClick}/>
            <Triad x={squares[6]} y={squares[7]} z={squares[8]} squareClick={handleClick}/>
        </>
    );
}
