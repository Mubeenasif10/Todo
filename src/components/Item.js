import React from 'react';
import { FaTrash } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import styles from "./Item.module.css";

const Item = ({task, onDone, onDelete}) => {
  return (
    <li className={styles.item}>
        {task.status === 'pending' ? <p>{task.name}</p> : <del>{task.name}</del>}
        <div>
            <button className={styles.doneBtn} onClick={()=>{
                onDone(task.id);
            }} >
                <MdDone style={{ color:"green" }}/>
            </button>
            <button className={styles.deleteBtn} onClick={()=>{
                onDelete(task.id);
            }} >
                <FaTrash style={{ color:"red" }} />
            </button>
        </div>
    </li>
  )
}

export default Item;