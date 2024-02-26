import CalculateCircleArea from "./components/calculate-circle-area/CalculateCircleArea";
import CalculateSquareArea from "./components/calculate-square-area/CalculateSquareArea";
import CalculateTriangleArea from "./components/calculate-triangle-area/CalculateTriangleArea";
import CelsiusToFahrenheit from "./components/celsius-to-fahrenheit/CelsiusToFahrenheit";
import FahrenheitToCelsius from "./components/fahrenheit-to-celsius/FahrenheitToCelsius";
import SayHello from "./components/say-hello/SayHello";
import TotalPrice from "./components/total-price/TotalPrice";
import WriteMessage from "./components/write-message/WriteMessage";

const App = () => {
	return(
	<> 
	<SayHello name='Beatriz' />
	<CalculateSquareArea side={2}/>
	<CalculateTriangleArea base={3} height={6}/>
	<CalculateCircleArea radio={7}/>
	<CelsiusToFahrenheit celsius={30}/>
	<FahrenheitToCelsius fahrenheit={68}/>
	<TotalPrice price={68}/>
	<WriteMessage name='Beatriz' material='cartón' size='20x20' note='Gracias'/>
	</>
	)
};

export default App;
