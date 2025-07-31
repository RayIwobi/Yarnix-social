// import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Feeds from './data'
import './sideposts.css'

function Posts() {
    //const [feeds, setFeeds] = useState([])

    axios.defaults.withCredentials = true
    // useEffect(() => {
    //     //axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then((res) => setFeeds(res.data))
        
    //     .catch((err) => console.log(err))
    // },[])
    
  return (
    <div className='posts-container'>
        <div>
            <h3 className='feedsTitle'>Sample API Feeds</h3>
        </div>
        <div>
            {Feeds.map((feed) => {
                return<div key={feed.id} className='sidebarfeeds'>
                    <div><strong>Title:&nbsp;</strong>{feed.title}</div><br/>
                    <div><strong>Description:&nbsp;</strong>{feed.body}</div><br/>
                    <hr />
                </div>
            })}
        </div>
      
    </div>
  )
}

export default Posts
