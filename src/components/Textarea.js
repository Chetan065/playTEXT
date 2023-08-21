import React,{useState} from 'react'
import i from './i.png'

export default function Textarea(props) {
    const[mystyle,setStyle] = useState(
        {
            color : "black",
            backgroundColor : "white"
        }
    )
    const dark = ()=>{
        setStyle({
            color : "white",
            backgroundColor : "black"
        })
    }
    const light = ()=>{
        setStyle({
            color : "black",
            backgroundColor : "white"
        })
    }
    const [count , setCount] = useState("");
    const handleupper = ()=>{
        let upText = count.toUpperCase();
        setCount(upText)
    }
    const handleclear = ()=>{
        let cText = "";
        setCount(cText)
    }
    const handleit = (event)=>{
        setCount(event.target.value)
    }
    const handlelower = ()=>{
        let lowText = count.toLowerCase();
        setCount(lowText)
    }
    const countwords = ()=>{
        if(count !== ""){
            let space = 0;
        let len = count.length;
        for(let i=0;i<len;i++){
            if(count[i] === " "){
                space += 1
            }
        }
        return(space+1)
        }
        else{
            return(0)
        }
    }
    const countcharacters = ()=>{
        let len = count.length;
        return(len)
    }
    const countspaces = ()=>{
        let space = 0;
        let len = count.length;
        for(let i=0;i<len;i++){
            if(count[i] === " "){
                space += 1
            }
        }
        return(space)
    }
    const countletters = ()=>{
        let len = count.length;
        let space1 = count.split(" ").length;
        return(len - space1 + 1);
    }
    const counttime = ()=>{
        if(count !== ""){
             let time = 0.0032 * count.split(" ").length
        return(time)
        }
        else{
            return(0)
        }
    }
 
    return (
        <>
            <div style={mystyle} className='p-4 ' >
           
             <div className='p-2'>
                <img src={i} alt="" height={40}  width={40}/>
             <button type="button" className="btn btn-light mx-2" onClick={light}>Light</button>
                <button type="button" className="btn btn-dark mx-2" onClick={dark}>Dark</button>
             </div>
             <h1 className='px-2'>
                Enter Text to Play With Text : 
            </h1>
            <div style={mystyle} className='p-3'>
                <textarea className="form-control " style={mystyle} onChange={handleit} placeholder="Text here .." id="floatingTextarea" rows="10" value={count}></textarea>
            </div>
            <div className="container my-3 justify-content-start row ">
            <button className="btn btn-warning col-md-2 my-2 mx-3" onClick={handleupper}>To Uppercase</button>
            <button className="btn btn-success col-md-2 my-2 mx-3" onClick={handlelower}>To Lowercase</button>
            <button className="btn btn-danger col-md-2 my-2 mx-3" onClick={handleclear}>Clear Text</button>
            </div>
            <h4 className="mx-3">
                <p>{countwords()} Words</p>
                <p>{countcharacters()} Characters </p>
                <p> {countspaces()} Spaces</p>  
                <p> {countletters()} Letters</p>  
                <p> {counttime()} Minutes to Read</p>  

            </h4>
            </div>
        </>
    )
}

