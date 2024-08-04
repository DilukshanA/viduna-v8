import React from 'react'
import './AllUsersList.css'
import { useState } from 'react'
import { useEffect } from 'react'


const AllUsersList = () => {

    const [allUserData, setAllUserData] = useState([]);
    
    const fetchInfo = async () =>{
        fetch('http://localhost:4000/getallusers',{
            method:"GET",
          })
          .then((res)=>res.json())
          .then((data)=> {
            //console.log(data,"allUserData");
            setAllUserData(data.data);
          });
      }

    useEffect(()=>{
        fetchInfo();
    },[])

    const delete_user = async (id)=>{
        await fetch('http://localhost:4000/deleteuser',{
          method: 'POST',
          headers:{
            Accept:'application/json',
            'Content-Type':'application/json',
          },
          body: JSON.stringify({id:id})
        })
        await fetchInfo();
      }




  return (
    <div className='all-users-list'>
        <div className='all-users-list-head'>
            <h1>All Users List</h1>
        </div>
        <div className='all-users-list-container'>
            <table className='all-users-list-table'>
                <tr>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Password</th>
                    <th>Date</th>
                   {/* <th>ID</th>*/}
                    <th>Delete</th>
                </tr>
                {allUserData.map((i)=>{
                    return(
                        <tr>
                            <td>{i.name}</td>
                            <td>{i.email}</td>
                            <td>{i.password}</td>
                            <td>{i.date}</td>
                           {/*  <td>{i._id}</td>*/}
                            <td><button className='user-delete-btn' onClick={()=>{delete_user(i._id)}}>Delete</button></td>
                        </tr>
                    )
                })}
            </table>
        </div>
        
    </div>
  )
}

export default AllUsersList