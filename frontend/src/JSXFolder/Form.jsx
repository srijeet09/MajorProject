import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../CSSFiles/form1.module.css'
export default function form() {
  return (
   <>
   <header>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></link>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    <link
    href="https://api.fontshare.com/v2/css?f[]=panchang@400&display=swap"
    rel="stylesheet"
    /> 
      
    </header>
   <div>
   <div className={styles.main}>
        <div className={styles.register}>
          
          <h2>Register Here!!</h2>
          <form className={styles.register} method="post">
            <br />
            <label>ENTER YOUR ID</label>
            <br />
            <input type="text" name="id" className={styles.name} placeholder="Enter voter id" />
            <br /><br />
            <button type="submit" defaultValue="submit" name="submit" className={styles.submit} >
            <Link to={"/User"}>Submit</Link>
            </button>
          </form>
        </div>
      </div>
      </div>
   </>
  )
}
