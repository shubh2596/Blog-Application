import conf from "../conf/conf";
import { Client , ID , Databases , Storage , Query , Account } from "appwrite";
 
export class Service {
    client =  new Client ()
    databases ;
    bucket;
    constructor (){
        this.client.setEndpoint(conf.appwriteURL).setProject(conf.appwritePR_ID);
        this.account = new Account(this.client);
        this.databases = new Databases (this.client)
        this.bucket = new Storage (this.client);
    }

    async createPost({title,slug,content,featured_image,status,userId}){
        try {
            return await this.databases.createDocument(conf.appwriteDB_ID
                                                      ,conf.appwriteCO_ID,
                                                       slug,
                                                       {
                                                        title,
                                                        content,
                                                        featured_image,
                                                        status,
                                                        userId,

                                                       })

                                                    

        }
        catch(error){
            console.log("Appwrite service :: createPost :: error", error);
        }
    }
    async updatePost (slug,{title,content,featured_image,status}){
     try {
        return await this.databases.updateDocument(conf.appwriteDB_ID,conf.appwriteCO_ID,slug,
            {
                title,
                content,
                featured_image,
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
            console.log("Appwrite service :: deletePost :: error", error);
            return false
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
        console.log("Appwrite serive :: getPost :: error", error);
        return false

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
        console.log("Appwrite serive :: getPosts :: error", error);
        return false ;
    }

   }

   // file upload services 

   async uploadFile (file){
    try{
       return await this.bucket.createFile(
            conf.appwriteBU_ID,
            ID.unique(),
            file
        )
         
    }
    catch (error){
        console.log("Appwrite service :: uploadFile :: error", error);
        return false ;
    }
   }

   async deleteFile(fileId){

    try{
         await this.bucket.deleteFile(conf.appwriteBU_ID,fileId)
        return true;
    }
    catch(error){
        console.log("Appwrite serive :: deleteFile :: error", error);
        return false ;

    }

   }
   getFilePreview(fileId){
    return  this.bucket.getFilePreview(
        conf.appwriteBU_ID,
        fileId)
   }
} 

const service = new Service()
export default service