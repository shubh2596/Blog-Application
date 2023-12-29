const conf = {
    appwriteURL   :   String(import.meta.env.VITE_APPWRITE_URL),
    appwritePR_ID   : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDB_ID   : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCO_ID   : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBU_ID   : String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    
}

export default conf