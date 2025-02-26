import { notFound } from 'next/navigation'
import React from 'react'

interface Props {
    params: {
        id: number
    }
}

const UserDetailPage = async ({params}:Props) => {
    const { id } = await params
    if(id > 10){
        notFound();
    }
    return (
        <div>
            UserDeatailsPage {id}
        </div>
    )
}

export default UserDetailPage
