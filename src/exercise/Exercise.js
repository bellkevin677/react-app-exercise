const Exercise = ({good = 'Awesome', bad = 'Terrible'}) => {
    return (
    <div>
        <h1>{good}</h1>
        <h1>{bad}</h1>
    </div>
    )
}

export default Exercise;