import React from "react"
function ListItems(props)
{
   const items=props.items
   console.log(items.completed)
   const completedStyle={
       fontstyle:"italics",
       textDecoration:"line-through",
       textDecorationColor:"black"
   }
   const listItems=items.map(item=>{
       return(
           <div className="row" key={item.key}>
            <div className="col-8">
            <h1 style={item.completed?completedStyle:null}>{item.text}</h1>
            </div>
            <div className="col-2">
            <input type="checkbox"  onChange={()=>props.handleclick(item.key)}/>
            <button className="trash" onClick={()=>props.deleteItems(item.key)}>&#x1F5D1;</button>
           </div>
           </div>
       )
   })
    return(
    <div className="box">
        {listItems}
    </div>)
}
export default ListItems