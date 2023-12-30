import Config from '../config/config.js'
import {Client,Databases, Storage, Query, ID} from 'appwrite'

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client.setEndpoint(Config.appWriteUrl)
        .setProject(Config.appWriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client)

    }

    async createPost({title, slug, content, featuredImage, status, userId}){
       try{
         return await this.databases.createDocument
                Config.appWriteDbId
                Config.appWriteCollectionId
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
                Config.appWriteDbId,
                Config.appWriteCollectionId,
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
                Config.appWriteDbId,
                Config.appWriteCollectionId,
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
                Config.appWriteDbId,
                Config.appWriteCollectionId,
                slug,
            )
        } catch(err){
            console.log(err)
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try{
            return await this.databases.listDocuments(
                Config.appWriteDbId,
                Config.appWriteCollectionId,
                queries,
                
            )
             } catch(err){
            console.log(err)
        }
    }
    async uploadFile(file){
        try{
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,

            )
        } catch(err){
            console.log(err)
            return false
        }
    }

    async deleteFile(fileId){
        try{
            await this.bucket.deleteFile(
                Config.appWriteBucketId,
                fileId,
            )
            return true
        } catch(err){
            console.log(err)
            return false
        }
    }

    async getFilePreview(fileId){
        try{
            await this.getFilePreview(fileId)
            return this.bucket.getFilePreview(Config.appWriteBucketId, fileId)
            }
         catch(err){
            console.log(err)
            return false
        }
    }
}

const service = new Service()
export default service