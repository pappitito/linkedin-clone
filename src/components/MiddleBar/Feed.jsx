import React, {useState, useEffect} from 'react'
import Post from './Post'
import { db } from '../../firebase'
import {  collection, query, orderBy, getDocs, doc, onSnapshot } from 'firebase/firestore';


const Feed = () => {

    const [posts, setPosts] = useState([])

    async function getPosts() {
    try {
      const Post = collection(db, 'posts');
      const postSnapshot = await getDocs(Post).orderBy("timestamp", "desc");
      const postList = postSnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
  }));
      setPosts(postList);
    } catch (error) {
      console.log(error);
    }
    }
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
    <div className='flex w-[100%] gap-3 flex-col'>
        {posts && posts.map(({id, data: {name, description, avatar, message}})=> <Post key={id} avatar={avatar} name={name} description={description} message={message} />)}
         <Post avatar={'/assets/titoImg.png'} name={'Tito Onwudinjo'}  />
         
    </div>
  )
}

export default Feed