import React,{useEffect,useState} from 'react'
import {Container,PostForm} from '../index'
import appwriteService from '../../appwrite/config'
import { useParams, useNavigate } from 'react-router-dom'


function EditPost() {
    const [posts,setPosts] = useState()
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        if(slug){
            appwriteService.getPost(slug).then((post)=>{
                if(post){
                    setPosts(post)
                }
            })
         }
         else{
            navigate('/')
         }

    },[slug,navigate])
  return posts ? (
    <div className='py-8'>

    </div>
  ) : null
}

export default EditPost