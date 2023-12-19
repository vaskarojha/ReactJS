import Config from '../config.js'
import {Client,Databases, Storage, Query, ID} from 'appwrite'

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client.setEndpoint(Config.appwriteUrl)
        .setProject(Config.appwriteProject);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client)

    }

    async createPost({title, slug, content, featuredImage, status, userId}){
       try{
         return await this.databases.createDocument
                Config.appwriteDatabaseId
                Config.appwriteCollectionId
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId, 
                }
       } catch(err){
            console.log(err)
       } 
    }

    async updatePost(slug,{title, content, featuredImage, status}){
        try{
            return await this.databases.updateDocument(
                Config.appwriteDatabaseId,
                Config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch(err){
            console.log(err)
        }
    }

    async deletePost(){
        try{
            await this.databases.deleteDocument(
                Config.appwriteDatabaseId,
                Config.appwriteCollectionId,
                slug,
            )
            return true;
        } catch(err){
            console.log(err)
            return false
        }
    }

    async getPost(slug){
        try{
            return await this.databases.getDocument(
                Config.appwriteDatabaseId,
                Config.appwriteCollectionId,
                slug,
            )
        } catch(err){
            console.log(err)
            return false
        }
    }


}

const service = new Service()
export default service