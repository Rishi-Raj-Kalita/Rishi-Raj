import React from "react"
import ListItems from "./ListItems"
class Main extends React.Component
{
    constructor()
    {
        super()
        this.state=
        {
            items:[],
            currentItems:{
                text:"",
                key:"",
                completed:false
            },
        }
        this.handlechange=this.handlechange.bind(this)
        this.addItems=this.addItems.bind(this)
        this.deleteItems=this.deleteItems.bind(this)
        this.handleclick=this.handleclick.bind(this)
    }
    handlechange(event)
    {
        this.setState({
            currentItems:{
                text:event.target.value,
                key:Date.now(),
                completed:false
            }
        })

    }
    addItems(event)
    {
        event.preventDefault()
        console.log(this.state.currentItems)
        const newItem=this.state.currentItems
        if(newItem.text!=="")
       { const data=[...this.state.items,newItem]
        
        this.setState({
            items:data,
            currentItems:{
                text:"",
                key:"",
                completed:false
            }
        })
        }
    }
    deleteItems(key)
    {
        const filteredItems=this.state.items.filter(items=>
            (items.key!==key)
            )
            this.setState({
                items:filteredItems
            })
    }
    handleclick(key)
    {
            const data= this.state.items.map(prevState=>{
                if(prevState.key===key)
                {
                    prevState.completed=!prevState.completed
                }
                else{
                    prevState.completed=prevState.completed
                }
                return(prevState)
            })
            this.setState({
                items:data
            })

                
    }
    render()
    {
        return(
            <div>
                <form className="row" onSubmit={this.addItems}>
                    <input type="text" 
                    placeholder="Enter your To Do's" 
                    name="text" 
                    value={this.state.currentItems.text} 
                    onChange={this.handlechange}/>
                    <button >ADD</button>                  
                </form>
                <ListItems items={this.state.items} deleteItems={this.deleteItems} handleclick={this.handleclick} completed={this.state.completed}/>
            </div>
        )
    }

}
export default Main