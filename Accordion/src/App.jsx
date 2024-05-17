import { useState } from 'react'
import './App.css'
import data from './Data'

function App() {
  const [count, setCount] = useState(0)
  const [active,setActive]=useState(false)
  const [multiselect,setMultiselect]=useState([])

  const handleclick=((id)=>{
    setCount(count==id? 0: id)
  })

  const handlebutton=(()=>{
    setActive(!active)
  })

  const handlemultiselect=((id)=>{
    let cpylist=[...multiselect];
    let index=cpylist.indexOf(id)
    index==-1? cpylist.push(id):cpylist.splice(index,1)
    setMultiselect(cpylist)
  })

  return (
    <>
    <button type='button' onClick={handlebutton}>Multiselect</button>
    {data.map((item) => (
      <div key={item.id}>
        <div>
        <p className='question' onClick={()=>{!active?handleclick(item.id):handlemultiselect(item.id)}}>{item.Question}</p>
        {active? (multiselect.indexOf(item.id)!=-1 &&  (<p className='answer'>{item.answer}</p>)): (item.id==count && (<p className='answer'>{item.answer}</p>)) }
        </div>
        </div>
    ))}
    </>
  )
}

export default App
