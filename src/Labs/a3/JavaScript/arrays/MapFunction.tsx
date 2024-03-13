function MapFunction() {
    let numberArray1 = [1, 2, 3, 4, 5, 6];
    const square = (a: number) => a * a;
    
    const squares = numberArray1.map(square);
    const cubes = numberArray1.map(a => a * a * a);
    return(
        <div>
            <h4>
                Map
            </h4>
            squares={squares}<br>
            </br>
            cubes={cubes}
        </div>
    )
} export default MapFunction