function FilterFunction() {
    let numberArray1 = [1, 2, 4, 5, 6];
    const numbersGreaterThan2 = numberArray1.filter(a => a > 2);
    const evenNumbers = numberArray1.filter(a => a % 2 === 0);
    const oddNumbers = numberArray1.filter(a => a % 2 !== 0);
    return(
        <div>
            <h4>Filter Function</h4>
            numbersGreatorThan2={numbersGreaterThan2} <br></br>
            evenNumbers={evenNumbers}<br></br>
            oddNumbers={oddNumbers}<br></br>
        </div>
    )
} export default FilterFunction
