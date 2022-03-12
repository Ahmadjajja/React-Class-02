// import Counter from "./components/counter1"
import Counter from "./components/counter"
function App() {
  // const sampleData1 = {    //this data used here for understanding props
  //   color:"red",
  //   title:"Learn Reactjs",
  //   width:"50"
  // }
  // const sampleData2 = [ "red","Learn Reactjs","50"];
  // console.log(sampleData1);
  // const sampleData3 = 56;
  return ( 
    <div className="App">
      <Counter  />
      {/* <Counter SampleData1={sampleData1} sampleData2={sampleData2} SampleData3={sampleData3}/> */}
    </div>
  );
}

export default App;


//if we want to pass data from parent component to 
//child component then we use concept of props.
