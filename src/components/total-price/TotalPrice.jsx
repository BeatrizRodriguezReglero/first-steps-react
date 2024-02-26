// - Crea un componente totalPrice que reciba un precio, le sume el IVA del 21% y devuelva un h2 con el resultado.

const TotalPrice =({price})=>{
    const finalPrice = price -(price*0.21)
    return <h2>{finalPrice}</h2>
}
export default TotalPrice