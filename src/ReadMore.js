import React,{useState} from 'react'


function ReadMore({children}) {

const [isShow,setIsShow] = useState(true)

const handleText = ()=>{
  setIsShow(!isShow)
}

const res = isShow ? children.slice(0,50) : children



  return (
    <div>
      <h3>{res}</h3>
      <button onClick={handleText}>{isShow ? 'Read More' : 'Read Less'}</button>
    </div>
  )
}

export default ReadMore