import axios from 'axios'
import React, { useState } from 'react'
import Navgit from './Navgit'

const Viewgit = () => {
    const [views, changeViews] = useState(
        []
    )
    const [isLoading,changeLoading]=useState(true)
    const fetchData=()=>(
        axios.get("https://api.github.com/users").then(
            (response)=>{
                changeLoading(false)
                changeViews(response.data)
            }
        ).catch(
            (error)=>(
                alert("Something went wrong"+error)
            )
        )
    )

    return (
        <div>
            <Navgit/>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <h2 class="mt-5" align="center">GIT USER LIST</h2>
                                <table class="table table-bordered table-striped mt-3">
                                    <thead class="table-dark">
                                        <tr>
                                            <th>ID</th>
                                            <th>Node_id</th>
                                            <th>Avatar_url</th>
                                            <th>Gravatar_id</th>
                                            <th>url</th>
                                            <th>html_url</th>
                                            <th>followers_url</th>
                                            <th>following_url</th>
                                            <th>gists_url</th>
                                            <th>starred_url</th>
                                            <th>subscriptions_url</th>
                                            <th>organization_url</th>
                                            <th>repos_url</th>
                                            <th>events_url</th>
                                            <th>recieved_events_url</th>
                                            <th>Type</th>
                                            <th>User_View_Type</th>
                                        </tr>
                                    </thead>
                                    {isLoading ? (
                                            <div class="d-flex align-items-center">
                                                <strong role="status">Loading...</strong>
                                                <div class="spinner-border ms-auto" aria-hidden="true"></div>
                                            </div>
                                        ): (
                                            <tbody>
                                        {views.map(
                                            (value, index) => {
                                                return (
                                                    <tr>
                                                        <td>{value.id}</td>
                                                        <td>{value.node_id}</td>
                                                        <td><img src={value.avatar_url} height="100px" width="100px" class="img-thumbnail" alt="..." /></td>
                                                        <td>{value.gravatar_id}</td>
                                                        <td><a href={value.url} target="_blank" class="btn btn-primary">Click Here</a></td>
                                                        <td><a href={value.html_url} target="_blank" class="btn btn-primary">Click Here</a></td>
                                                        <td><a href={value.followers_url} target="_blank" class="btn btn-primary">Click Here</a></td>
                                                        <td><a href={value.following_url} target="_blank" class="btn btn-primary">Click Here</a></td>
                                                        <td><a href={value.gists_url} target="_blank" class="btn btn-primary">Click Here</a></td>
                                                        <td><a href={value.starred_url} target="_blank" class="btn btn-primary">Click Here</a></td>
                                                        <td><a href={value.subscriptions_url} target="_blank" class="btn btn-primary">Click Here</a></td>
                                                        <td><a href={value.organizations_url} target="_blank" class="btn btn-primary">Click Here</a></td>
                                                        <td><a href={value.repos_url} target="_blank" class="btn btn-primary">Click Here</a></td>
                                                        <td><a href={value.events_url} target="_blank" class="btn btn-primary">Click Here</a></td>
                                                        <td><a href={value.received_events_url} target="_blank" class="btn btn-primary">Click Here</a></td>
                                                        <td>{value.type}</td>
                                                        <td>{value.user_view_type}</td>
                                                    </tr>

                                                )
                                            }

                                        )}
                                    </tbody>
                                        )}
                                    
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewgit