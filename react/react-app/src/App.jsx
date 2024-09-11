import './App.css';
import Title from "./title.jsx";
import ProductTab from './productTab.jsx';
import "./title.css";


// function Dec() {
//   return (
//   <div>
//     <h1>hello!!!!</h1>
//     <p>hello!!!!</p>
//   </div>
//   )
// }
//& or use div fragments <>..</> to avoid creation of extra node
// function Dec() {
//   return (
//   <>
//     <h1>hello!!!!</h1>
//     <p>hello!!!!</p>
//   </>
//   )
// }

function App() {
  return (
  <div>
      <h1>hello world</h1>
      {/* <Dec /> */}
      {/* //& use capital letter in name */}
      <Title/>
      <br />
      <ProductTab />
  </div>
  ) ;
}

export default App;
