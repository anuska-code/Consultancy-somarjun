import { Album } from 'lucide-react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Albums from './Albums';
import VideoGallery from './VideoGallery';


const Gallery = () => {
  return (
    <>
      
    <Albums/>
    <VideoGallery/>
    
    </>
  );
};

export default Gallery;