
import styles from "styled-components";

export const Wrapper = styles.div`
    display:flex;
    justify-content:space-between;
    border-bottom:1px solid lightblue;
    padding:bottom:20px;
    .info{
    display:flex;
    justify-content:space-between;
    margin-top:1em;
    p{
    margin-left:5px;
    }
    }
    .buttons{
    display:flex;
    justify-content:space-between;
    margin-top:1em;
    button{
    width:1em;
    height:2em;
    margin:10px;
    margin-top:1em;
    }
    
    }
    img{
    max-width:80px;
    object-fit:cover;
    margin-left:40px;
    }
`
