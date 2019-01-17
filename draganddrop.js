import React , { Component } from 'react';

import Inputform from '../Input/inputform';
import classes from './draganddrop.module.css';

class Draganddrop extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            list : [
                {name : 'React' , catagory: 'list1'},
                {name : 'Angular' , catagory: 'list2'},
                {name : 'JavaScript' , catagory: 'list2'},
                {name : 'Vue' , catagory: 'list1'},
            ],
            newItem : {
                name: '',
                category: '',
                id:''
            } 
        }
    }
    
    onDragStart = (e , name) => {
        console.log("Dragstart" , name);
        e.dataTransfer.setData('text/plain' , name)
        
    }
    
    onDragOver = e => {
        e.preventDefault();
    }
    
    onDrop = (e , catagory) => {
        let temp = e.dataTransfer.getData("text/plain");
        
        let {list} = this.state;
        list.map(i => {
            if(i.name === temp){
                i.catagory = catagory;
            }
            return list;
        })
        
        this.setState({...this.state ,
                      list})
    }
    
    onChangeHandler = e => {
        e.preventDefault();
        let name = e.target.value;
        this.setState({...this.state.newItem ,
                      name})
    }
    
    render(){
        console.log(this.state);
        let items = {
            list1: [],
            list2: []
        }
        
        this.state.list.map((i) => {
            let item = (<div className={classes.draggable} draggable key={i.name}
                                onDragStart={(e) => this.onDragStart(e , i.name)}>
                                <h3>{i.name}</h3>
                        </div>)
            if(i.catagory === 'list1'){
                items.list1.push(item);
            }else {
                items.list2.push(item);
            }
            return item;
        })
        
        return(
            <div className={classes.Container}>
                <div className={classes.Header} >
                    <h2>Drag and Drop </h2>
                </div>

                <div className={classes.Content} >
                    <div className={classes.break}></div>
            
                    <Inputform changed={(e) => this.onChangeHandler(e)}
                        name='item'
                        value={this.state.newItem.name}/>
                        
                    <div className={classes.List1} 
                        onDragOver={(e) => this.onDragOver(e)}
                        onDrop={(e) => this.onDrop(e , 'list1')}>
                        <div className={classes.Listheader}>
                            List 1
                        </div>

                            {items.list1}

                    </div>
                    
                    
                    <div className={classes.List2}
                        onDragOver={(e) => this.onDragOver(e)}
                        onDrop={(e) => this.onDrop(e , 'list2')}>
                        <div className={classes.Listheader}>
                            List 2
                        </div>

                            {items.list2}

                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Draganddrop;