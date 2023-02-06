import React from 'react'
import { RootState } from '../store/store'
import { useSelector, useDispatch } from "react-redux"
import { removeUser } from '../store/slices/userSlice'
import toast, { Toaster } from 'react-hot-toast'

export default function UserTable() {
    const dispatch = useDispatch()
    const users = useSelector((state: RootState) => state.user.value)
  return (
    <>
        <Toaster position="top-right" reverseOrder={true}/>
      <section className="py-3">
        <div className="container">
            {users.length > 0 ? 
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th style={{width: "100px"}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((val: any, index: any)=> 
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
                                <td>{val.phone}</td>
                                <td><button onClick={()=> {dispatch(removeUser(index)); toast.success(`${val.name} is deleted!`)}} className='btn btn-danger btn-sml'>Delete</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
                :
                <p className='text-center'>User list is empty!</p>
            }
        </div>
      </section>
    </>
  )
}
