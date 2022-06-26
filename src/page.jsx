import React, {useEffect, useRef, useState} from "react"
import 'antd/dist/antd.css'
import {CopyOutlined, DeleteOutlined, EditOutlined} from "@ant-design/icons";

export default function Page ({handler, pageId, edit, name, active}){
    const [inputField, setInputField] = useState(name);
    const [editBool, setEditBool] = useState(true)
    const {copyInputHandler, deleteInputHandler, editInputHandler} = handler;
    const {activePage, activePageHandler} = active
    const ref = useRef()

    const setNameHandler = () => {
        setEditBool(!editBool);
    }

    return (
        <div onClick={()=>activePageHandler(pageId)}  style={{display:"flex",justifyContent:"space-between", width:"100%", background:"lightgray", height:"30px"}}>
            <input ref={ref} style={{width:"70%", height:"100%", background:"transparent"}} onChange={(e) => setInputField(e.target.value)} value={inputField}/>
            <div style={{width:"30%", height:"100%", display:"flex",justifyContent:"space-evenly",alignItems:"center", background:"transparent"}}>

                {
                    editBool ? (
                        <div onMouseOver={()=>{}}>
                            <span><DeleteOutlined onClick={()=> deleteInputHandler(pageId)}/></span>
                            <span><EditOutlined onClick={()=> editInputHandler(pageId)}/></span>
                            <span><CopyOutlined onClick={()=> copyInputHandler(pageId)}/></span>
                        </div>
                    ):(
                        <button onClick={()=> setNameHandler()} style={{width:"60%", height:"100%", background:"darkgreen"}}>save</button>
                    )
                }

            </div>
        </div>
    )
}