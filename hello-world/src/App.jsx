import {useInView} from "react-intersection-observer"
const App = () => {
  const {ref, inView} = useInView({
    threshold :1,
    delay:1000,
  })
  return ( 
    <div className="container">
      <p className="fixed">Component 2 in viewport: {inView ? "✔" : "❌"}</p>
      <div className="component c-1">Component 1</div>
      <div ref={ref} className="component c-2">Component 2</div>
      <div style={{
        height : "120vh"
      }}></div>
    </div>
   );
}
 
export default App;