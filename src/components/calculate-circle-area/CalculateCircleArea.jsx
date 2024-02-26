// - Crea un componente llamado calculateCircleArea que calcule el área de un círculo pasándole el radio y devuelva un h2 con el resultado.

const CalculateCircleArea = ({radio})=>{
    const circleArea = Math.floor(Math.PI*(Math.pow(radio,2)))
    return <h2>{circleArea}</h2>
}
export default CalculateCircleArea;