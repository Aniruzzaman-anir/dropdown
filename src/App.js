import {useEffect, useState} from "react";
import './App.css';
import {CopyOutlined, DeleteOutlined, EditOutlined} from "@ant-design/icons";
import Page from "./page"


function App() {
  const [show, setShow] = useState(false);
  const [activePage, setActivePage] = useState("")

  function copyInputHandler (){

  }

  function deleteInputHandler (pageId) {

        setPageList((pageList)=>{
          return pageList.filter((page,i)=>{
            return pageId !== page.pageId
          })
        })
  }


  function editInputHandler () {

  }

  function activePageHandler () {

  }


  const [pageList, setPageList] = useState([
    {
      pageId: randomId(),
      name:"index.html",
      edit:false,
        label: <Page  />
    },
    {
      pageId: randomId(),
      name:"profile.html",
      edit:false,
      label: <Page />
    },
  ])

  function randomId() {
    return Math.ceil(Math.random()*1349793);
  }




  const addPageHandler = ()=> {
    let page = {
      pageId: randomId(),
      edit:false,
      name:"",
      label: <Page  />
    }
   setPageList((pageList)=>{
     return [...pageList, page]
   })

  }


  return (
    <div style={{display:"flex", justifyContent:"center",flexDirection:"column", alignItems:"center"}}>

        <button style={{width:"100px",height:"40px",background:"darkgray", marginBottom:"30px"}} onClick={()=>setShow(show=>!show)}>Page</button>
        {
          show && (
                <div style={{width:"300px", minHeight:"100px",background:"gray"}}>

                    {
                        pageList.map((page,index)=>{
                            return (
                                <Page active={{activePage,activePageHandler}}   key={index} handler={{copyInputHandler, deleteInputHandler, editInputHandler}} name={page.name} pageId={page.pageId} edit={page.edit}/>
                            )
                        })
                    }
                    <button onClick={addPageHandler}>add page</button>

                </div>
            )
        }

    </div>
  );
}

export default App;
