
import React from 'react'

interface Props {
    params: {
        id: number;
        photoId: number
    }
}   
const PhotoPage = async ( {params} : Props) => {
    const {id, photoId} = await params
  return (
    <div>
      PhotoID {photoId} of User {id}    
    </div>
  )
}

export default PhotoPage
