import React from 'react';
import classes from './inputform.module.css';

const Inputform = props => {
    return(
        <div className={classes.InputForm}>
            <form onSubmit= {props.onSubmit} >
                <input type="text" value={props.value} placeholder="Item Name" name={props.name}
                    onChange={props.changed} />
                <select type='select' style={{margin : 5}}>
                    <option value='list1' selected>List 1</option>
                    <option value='list2' >List 2</option>
                </select>
                <button type="submit" > Go... </button>
            </form>
        </div>
    );
}

export default Inputform;