import React, { useState } from 'react'

export default function Textarea(props) {
    const [count, setCount] = useState("");
    const handleupper = () => {
        if(count !== ""){
            let upText = count.toUpperCase();
            setCount(upText)
            props.show("Converted to UpperCase","success")
        }
        else{
            props.show("Enter some text first !","danger")
        }
    }
    const handleclear = () => {
        if(count !== ""){
            let cText = "";
            setCount(cText)
            props.show("Cleared Text Area","danger")
        }
        else{
            props.show("No Text to Clear","danger")
        }
       
    }
    const handleit = (event) => {
        setCount(event.target.value)
    }
    const handlelower = () => {
        if(count !== ""){
            let lowText = count.toLowerCase();
            setCount(lowText)
            props.show("Converted to LowerCase","success")
        }
        else{
            props.show("Enter some Text First","danger")
        }
       
    }
    const countwords = () => {
        if (count !== "") {
            let space = 0;
            let len = count.length;
            for (let i = 0; i < len; i++) {
                if (count[i] === " ") {
                    space += 1
                }
            }
            return (space + 1)
        }
        else {
            return (0)
        }
    }
    const countcharacters = () => {
        let len = count.length;
        return (len)
    }
    const countspaces = () => {
        let space = 0;
        let len = count.length;
        for (let i = 0; i < len; i++) {
            if (count[i] === " ") {
                space += 1
            }
        }
        return (space)
    }
    const countletters = () => {
        let len = count.length;
        let space1 = count.split(" ").length;
        return (len - space1 + 1);
    }
    const counttime = () => {
        if (count !== "") {
            let time = 0.0032 * count.split(" ").length
            return (time)
        }
        else {
            return (0)
        }
    }
    const handlecopy = () => {
        if(count !== ""){
            var text = document.getElementById("floatingTextarea");
       text.select();
       navigator.clipboard.writeText(text.value);
       props.show("Copied to Clipboard","primary")
        }
        else{
            props.show("No Text to Copy !","danger")
        }
       
    }
    const handleextraspaces = () => {
        if(count !== ""){
            let newtext = count.split(/[ ]+/);
        setCount(newtext.join(" "))
        props.show("Extra Space Removed","danger")
        }
        else{
            props.show("No Text to Play !","danger")
        }
     }

    return (
        <>
            <div  className='p-4 ' >
                <h1 className='px-2'>
                    Enter Text to Play With Text :
                </h1>
                <div  className='p-3'>
                    <textarea className="form-control "  onChange={handleit} placeholder="Text here .." id="floatingTextarea" rows="10" value={count}></textarea>
                </div>
                <div className="container my-3 justify-content-start row ">
                    <button className="btn btn-warning col-md-2 my-2 mx-3 text-black fs-6 fw-bold" onClick={handleupper}>To Uppercase</button>
                    <button className="btn btn-success col-md-2 my-2 mx-3 fs-6 fw-bold" onClick={handlelower}>To Lowercase</button>
                    <button className="btn btn-danger col-md-2 my-2 mx-3 fs-6 fw-bold" onClick={handleclear}>Clear Text</button>
                    <div className="w-lg-100"></div>
                    <button className="btn btn-info col-md-2 my-2 mx-3 fs-6 fw-bold" onClick={handlecopy}>Copy Text</button>
                    <button className="btn btn-light col-md-2 my-2 mx-3 fs-6 fw-bold" onClick={handleextraspaces}>Remove Extra Space</button>
                </div>
                <h4 className="mx-3">
                    <p>{countwords()} Words</p>
                    <p>{countcharacters()} Characters </p>
                    <p> {countspaces()} Spaces</p>
                    <p> {countletters()} Letters</p>
                    <p> {counttime()} Minutes to Read</p>

                </h4>
                <h1>
                    Preview
                </h1>
                {count === ""?"No Text to Display":count}
            </div>
        </>
    )
}

