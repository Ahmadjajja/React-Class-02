import Button from "./button"

function Counter1(props) {
    console.log(props.SampleData2)
    // console.log(props.SampleData2)       //this data used here for understanding props
//   const data = { 
//     color:"red",
//     title:"Learn Reactjs",
//     width:"50"
//   }
//   const Sampledata1 = [ "red","Learn Reactjs","50"];
//   const Sampledata2 = 56;
  return (
    <div className="App">
        counter  components
      <Button data1={props.SampleData1} data2={props.SampleData2} data3={props.SampleData3}/>
      {/* <Button data1={props.SampleData1} data2={props.SampleData2} data3={props.SampleData3}/> */}

    </div>
  );
}

export default Counter1;


//pass data from app.js to counterjs as props
// forward those props as props from counterjs to buttonjs