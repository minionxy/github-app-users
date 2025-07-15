import React, { useState } from 'react'
import Navgit from './Navgit'

const Searchgit = () => {
    const [input,changeInput]=useState(
        {id:""}
    )
    const inputHandler=(e)=>{
        changeInput({...input,[e.target.name]:e.target.value})
    }
    const readValues=()=>{
        console.log(input)
    }
  return (
    <div>
        <Navgit/>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Enter the Id</label>
                            <input type="number" className="form-control" name='id' value={input.id} onChange={inputHandler} />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-warning" onClick={readValues}>SEARCH</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Searchgit