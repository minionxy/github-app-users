import React, { useState } from 'react'
import Navgit from './Navgit'

const Addgit = () => {
    const [input,changeInput]=useState(
        {id:"",node_id:"",avatar_url:"",gravatar_id:"",url:"",html_url:"",followers_url:"",following_url:"",gists_url:"",starred_url:"",subscription_url:"",organization_url:"",repos_url:"",events_url:"",recieved_events:"",type:"",user_view_type:""}
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
                    <h1 align="center" className='text-primary'>ADD USER</h1>
                    </div>
                </div>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">ID</label>
                            <input type="number" className="form-control" name="id" value={input.id} onChange={inputHandler}/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Node-Id</label>
                            <input type="text" className="form-control" name="node_id" value={input.node_id} onChange={inputHandler} />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Avatar-url</label>
                            <input type="text" className="form-control" name='avatar_url' value={input.avatar_url} onChange={inputHandler} />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Gravatar-Id</label>
                            <input type="text" className="form-control" name='gravatar_id' value={input.gravatar_id} onChange={inputHandler} />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">URL</label>
                            <input type="text" className="form-control" name='url' value={input.url} onChange={inputHandler}/>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">HTML-URL</label>
                            <input type="text" className="form-control" name='html_url' value={input.html_url} onChange={inputHandler}/>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Followers-url</label>
                            <input type="text" className="form-control" name='followers_url' value={input.followers_url} onChange={inputHandler}/>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Following-url</label>
                            <input type="text" className="form-control" name='following_url' value={input.following_url} onChange={inputHandler}/>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Gists url</label>
                            <input type="text" className="form-control" name='gists_url' value={input.gists_url} onChange={inputHandler}/>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Starred-url</label>
                            <input type="text" className="form-control" name='starred_url' value={input.starred_url} onChange={inputHandler} />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Subscriptions-url</label>
                            <input type="text" className="form-control" name='subscription_url' value={input.subscription_url} onChange={inputHandler} />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Organization-url</label>
                            <input type="text" className="form-control" name='organization_url' value={input.organization_url} onChange={inputHandler}/>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Repos-url</label>
                            <input type="text" className="form-control" name='repos_url' value={input.repos_url} onChange={inputHandler} />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Events-url</label>
                            <input type="text" className="form-control" name='events_url' value={input.events_url} onChange={inputHandler} />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Recieved_events-url</label>
                            <input type="text" className="form-control" name='recieved_events' value={input.recieved_events} onChange={inputHandler}/>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Type</label>
                            <select name="" id="" className="form-control">
                                <option value="User">User</option>
                                <option value="Admin">Admin</option>
                            </select>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">User-View-Type</label>
                            <select name="" id="" className="form-control">
                                <option value="public">Public</option>
                                <option value="private">Private</option>
                            </select>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValues}>SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Addgit