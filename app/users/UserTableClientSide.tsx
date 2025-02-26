'use client'
import React, { useEffect, useState } from 'react'
import { sort } from "fast-sort";

interface User {
    id: number;
    name: string;
    email: string;
}

const UserTable = () => {
const [data, setData] = useState<User[]>([]);
const [sortColumn, setSortColumn] = useState<"name" | "email" | null>("name");
const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

React.useEffect(() => {
    const fetchData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' });
        const users: User[] = await res.json();
        setData(sort([...users]).asc((u) => u.name));
    };
    fetchData();
}, []);
  
function sortAny(column: "name" | "email"): React.MouseEventHandler<HTMLTableHeaderCellElement> {
    return () => {
        const newSortOrder = sortColumn === column && sortOrder === "asc" ? "desc" : "asc";
        setSortColumn(column);
        setSortOrder(newSortOrder);

        const sortedData = sort(data)[newSortOrder]([u => u[column]]);
        setData(sortedData);
    };
}

return (
    <>
        <table className='table table-bordered'>
            <thead>
                <tr>
                   
                    <th onClick={sortAny("name")} style={{ cursor: "pointer" }}>
                        Name {sortColumn === "name" && (sortOrder === "asc" ? "▲" : "▼")}
                    </th>
                    <th onClick={sortAny("email")} style={{ cursor: "pointer" }}>
                        Email {sortColumn === "email" && (sortOrder === "asc" ? "▲" : "▼")}
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
)
}

export default UserTable
