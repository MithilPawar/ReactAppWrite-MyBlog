import React from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4 hover:shadow-lg transition-all'>
                <div className='w-full justify-center mb-4'>
                    {/* Image with responsive and loading handling */}
                    <img 
                        src={appwriteService.getFilePreview(featuredImage)} 
                        alt={title || "Post Image"} 
                        className='rounded-xl w-full h-auto object-cover'
                        loading="lazy"
                    />
                </div>
                <h2 className='text-xl font-bold text-gray-800'>{title}</h2>
            </div>
        </Link>
    );
}

export default PostCard;
