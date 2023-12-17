import conf from "../conf/conf";
import { Client , ID , Databases , Storage , Query } from "appwrite";
 
export class Service {
    client =  new Client ()
    databases ;
    bucket;
    constructor (){
        this.client.setEndpoint(conf.appwriteURL).setProject(conf.appwritePR_ID);
        this.account = new Account(this.client);
        this.databases = new Databases (this.client)
        this.bucket = new Storage (  this.client);
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(conf.appwriteDB_ID
                                                      ,conf.appwriteCO_ID,
                                                       slug,
                                                       {
                                                        title,
                                                        content,
                                                        featuredImage,
                                                        status,
                                                        userId,

                                                       })

                                                    

        }
        catch(error){
            throw error ;
        }
    }
    async updatePost (slug,{title,content,featuredImage,status}){
     try {
        return await this.databases.updateDocument(conf.appwriteDB_ID,conf.appwriteCO_ID,slug,
            {
                title,
                content,
                featuredImage,
                status
            })
     }
     catch(error){
        throw error;

     }

    }
    async deletePost (slug){
        try {
            await this.databases.deleteDocument(conf.appwriteDB_ID,conf.appwriteCO_ID,slug)
            return true;
        }
        catch(error){
            throw error ;
            return false ;
        }
    }

   async getPost(slug){
    try {

        return await this.databases.getDocument(
            conf.appwriteDB_ID,
            conf.appwriteCO_ID,
            slug
        )
    }
    catch (error){
        throw error ;

    }
   }
   async getPosts(queries = [Query.equal("status","active")]){
    try {
        return await this.databases.listDocuments(
           conf.appwriteDB_ID,
           conf.appwriteCO_ID,
           queries 
        )
    }
    catch (error){
        throw error ;
    }

   }

   // file upload services 

   async uploadFile (file){
    try{
         await this.bucket.createFile(
            conf.appwriteBU_ID,
            ID.unique(),
            file
        )
        return true;
    }
    catch (error){
        throw error ;
        return false ;
    }
   }

   async deleteFile(fileId){

    try{
         await this.bucket.deleteFile(conf.appwriteBU_ID,fileId)
        return true;
    }
    catch(error){
        throw error ;
        return false ;

    }

   }
   getFilePreview(fileId){
    this.bucket.getFilePreview(conf.appwriteBU_ID,fileId)
   }
} 