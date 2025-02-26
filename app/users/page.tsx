import React, { Suspense } from 'react'
import UserTable from './UserTable'
import Link from 'next/link'

interface Props {
    searchParams: {
        sortOrder: string
    }
}


const UserPage = async ({ searchParams }: Props) => {
    const { sortOrder } = await searchParams

    // cache the data for 10 seconds
    // const res = await fetch('https://jsonplaceholder.typicode.com/users',
    //     { next: { revalidate: 10 } });

    //  check the effect of cache: 'no-store' after rebuild the app in production

    return (
        <>
            <h1>Users</h1>
            { /* to check the time of the page load */}
            <Link href="/users/new" className="btn">New User</Link>
            <Suspense fallback={<p>Loading...</p>}>
                <UserTable sortOrder={sortOrder} />
            </Suspense>

        </>
    )
}

export default UserPage
