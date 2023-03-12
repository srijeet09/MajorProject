import React from "react";
import { Link } from "react-router-dom";
import styles from '../CSSFiles/Home.module.css'; 

export default function Home() {
  return (
    <>
    
    <div>
      
    <div className={styles.div1}>
    <div>
        <h1 className={styles.heading}>SELECT AN OPTION</h1>
    </div>
      <div>
      <Link to="/form"><button className={styles.button1}>
        <h1 className={styles.option}>Are you a Client?</h1>
        </button></Link>
      </div>
      <div>
        <h1 className={styles.heading}>OR</h1>
    </div>
      <div>
      
      <Link to="/login"><button className={styles.button1}>
        <h1 className={styles.option}>Are you an Admin?</h1>
        </button></Link>
      </div>
      </div>
      </div>
      <header>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></link>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    <link
    href="https://api.fontshare.com/v2/css?f[]=panchang@400&display=swap"
    rel="stylesheet"
    /> 
    </header>
    </>
  );
}
