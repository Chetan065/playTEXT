import React,{useState} from 'react'

export default function Textarea(props) {
    const [count , setCount] = useState();
    const handleupper = ()=>{
        let upText = count.toUpperCase();
        setCount(count + "\n" + "After Converting to Uppercase : " + upText)
    }
    const handleit = (event)=>{
        setCount(event.target.value)
    }
    const handlespaces = ()=>{
        let space = 0;
        for(let i=0;i<count.length;i++){
            if(count[i] === " "){
                space += 1;
            }
        }
        setCount(count + "\n" + "No of Spaces in given Paragraph : " + space)
    }
    const handlewords = ()=>{
        let space = 0;
        for(let i=0;i<count.length;i++){
            if(count[i] === " "){
                space += 1;
            }
        }
        setCount(count + "\n" + "No of Words in given Paragraph : " + (space+1))
    }
    const handleletters = ()=>{
        let space = 0;
        for(let i=0;i<count.length;i++){
            if(count[i] !== " "){
                space += 1;
            }
        }
        setCount(count + "\n" + "No of Letters in given Paragraph excluding spaces : " + space)
    }
    return (
        <>
            <h1>
                Enter Text to Play With Text :
            </h1>
            <div>
                <textarea className="form-control" onChange={handleit} placeholder="Text here .." id="floatingTextarea" rows="10" value={count}></textarea>
            </div>
            <div className="container my-3 justify-content-evenly row ">
            <button className="btn btn-warning col-md-2 my-2" onClick={handleupper}>To Uppercase</button>
            <button className="btn btn-success col-md-2 my-2" onClick={handlespaces}>Count Spaces</button>
            <button className="btn btn-primary col-md-2 my-2"  onClick={handlewords}>Count Words</button>
            <button className="btn btn-info col-md-2 my-2"  onClick={handleletters}>Count Letters</button>
            </div>
            
        </>
    )
}

