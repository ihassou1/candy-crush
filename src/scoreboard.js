const ScoreBoard = ({score}) =>{
    return (
        <div className="scoreBoard">
          <h3 className="Text"> Score</h3>
          <h2 className="scoreText">{score}</h2>
        </div>
    )
}
export default ScoreBoard