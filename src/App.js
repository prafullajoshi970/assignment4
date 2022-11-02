
import './App.css';
import Cards from './Components/Cards';

function App() {
 const color_code = [
    {
      color_name:"pink",
      color_code:"#ff6663",
    },
    {
      color_name:"grey",
      color_code:"#7a7a52",
    },
    {
      color_name:"black",
      color_code:"#000000",
    },

    {
      color_name:"green",
      color_code:"#006600",
    },
    {
      color_name:"red",
      color_code:"#ff0000",
    },
    {
      color_name:"orange",
      color_code:"#ff6600",
    },
    {
      color_name:"light-grey",
      color_code:" #d4d4aa",
    },
    {
      color_name:"purple",
      color_code:"#cc3399",
    },

  {
    color_name:"brown",
    color_code:"#663300",
  },
]
console.log(color_code);

  return (
    <div className="App">
     
    <div className="App1">
      <Cards color_code="#ff6663" color_name="pink"></Cards>
    <Cards color_code="#333333" color_name="grey"></Cards>
    <Cards color_code="#000000" color_name="black"></Cards>
    <Cards color_code="#38BB14" color_name="green"></Cards>
    <Cards color_code="#C90B0B" color_name="red"></Cards>
    </div>

    <div className="App2">
      <Cards color_code="#ff8000" color_name="orange"></Cards>
      <Cards color_code="#FFF500" color_name="yellow"></Cards>
    <Cards color_code="#CCCCCC" color_name="light-grey"></Cards>
    <Cards color_code="#7E41A2" color_name="purple"></Cards>
    <Cards color_code="#C14911" color_name="brown"></Cards>
    
    </div>
    
   
     
    </div>
  );
}

export default App;
