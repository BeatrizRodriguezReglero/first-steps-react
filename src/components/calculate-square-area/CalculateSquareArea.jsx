// - Crea un componente llamado calculateSquareArea que calcule el área de un cuadrado pasándole la medida del lado y devuelva un h2 con el resultado.

const CalculateSquareArea = ({side})=>{
    const result= side*side;
    return <h2> {result}</h2>
}
export default CalculateSquareArea;