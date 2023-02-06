import React, {useState} from 'react'
import { useDispatch } from "react-redux"
import { addUser } from '../store/slices/userSlice'
import toast, { Toaster } from 'react-hot-toast'

export default function AddUser() {
    const dispatch = useDispatch()
    const [user, setUser] = useState<any>({
        name: "",
        email: "",
        phone: ""
    });
    const inputHandler = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;

        setUser((values: any) => ({
            ...values,
            [name]: value,
        }));
    }

    const submitUserHandler = (e:any) => {
        e.preventDefault();
        if (user.name === "" || user.email === "" || user.phone === "" ){
            toast.error("All fields are required!")
        } else {
            dispatch(addUser(user));
            toast.success("User added!")
            setUser({
                name: "",
                email: "",
                phone: ""
            });
        }
    }
    
  return (
    <>
    <Toaster position="top-right" reverseOrder={true}/>
      <section className='py-5'>
        <div className="container">
            <div className="row">
                <div className="com-md-4 mx-auto">
                    <div className="card p-3">
                        <h5 className='text-center'>ADD USER</h5>
                        <form className='row align-items-end' onSubmit={submitUserHandler}>
                            <div className="col">
                                <label>Name</label>
                                <input onChange={inputHandler} value={user.name} type="text" name="name" className='form-control' />
                            </div>
                            <div className="col">
                                <label>Email</label>
                                <input onChange={inputHandler} value={user.email} type="text" name="email" className='form-control' />
                            </div>
                            <div className="col">
                                <label>Phone</label>
                                <input onChange={inputHandler} value={user.phone} type="text" name="phone" className='form-control' />
                            </div>
                            <div className="col-auto">
                                <button className='btn btn-primary btn-block'>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}
