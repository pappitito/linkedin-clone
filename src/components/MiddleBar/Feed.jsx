import React, {useState, useEffect} from 'react'
import Post from './Post'
import { db } from '../../firebase'
import {  collection, query, orderBy, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import FlipMove from 'react-flip-move'

const Feed = () => {

    const [posts, setPosts] = useState([])

    
  function getPosts2(){
    try {
      const Post = query(collection(db, 'posts'), orderBy("timestamp", "desc"));
      const file = onSnapshot(Post, (snapshot) => 
      setPosts(snapshot.docs.map((doc)=> ({
        id: doc.id,
        data: doc.data()
  }))) )
    console.log(posts);
    } catch (error) {
      console.log(error);
    }
  }

    
 useEffect(()=>{
      getPosts2()
 },[])

  return (
    <div className='flex  w-[100%] gap-3 flex-col'>
        <FlipMove className='flex  w-[100%] gap-3 flex-col'  duration={800}>
            {posts && posts.map(({id, data: {name, description, avatar, message}})=> <Post key={id} id={id} avatar={avatar} name={name? name: ''}  description={description}  message={message} />)}
             
        </FlipMove>
         
    </div>
  )
}

export default Feed