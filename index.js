const Box = props => {
  //  Write your code here.
  return (
    <div className={`${props.className}`}>
      <h1 className='box-head'>{props.boxText}</h1>
    </div>
  )
}

const element = (
  //  Write your code here.
  <div className='main-container'>
    <h1 className='heading'>Boxes</h1>
    <div className='box-container'>
      <Box boxText='Small' className='box1' />
      <Box boxText='Medium' className='box2' />
      <Box boxText='Large' className='box3' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
