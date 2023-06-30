import React from "react";
import { useState } from "react";

const FetchData = () => {

    const [myData , setMyData] = useState([]);

    const loadUserData = () => {
        fetch('https://reqres.in/api/users?page=1')
            .then(res => res.json())
            .then(data => setMyData(data.data));
}

    return ( 
    <div class=' w-[100%] h-[100vh] bg-gradient-to-r from-purple-500 to-pink-500'>
      <nav class=' flex justify-around bg-gradient-to-r from-sky-500 to-indigo-500 '>
        <h1 class="text-3xl font-bold m-[8px] ">Apple</h1>
        <button class=' cursor-pointer m-[10px] bg-gray-800  p-2 rounded-md   text-xl text-white ' onClick={loadUserData}>Get Users</button>
      </nav>
      <h1 class=' text-center font-bold text-2xl '>Users Data</h1>
      <div class=' w-[800px] h-[600px] mt-[5px] bg-white m-auto rounded-lg flex flex-wrap justify-between '>
        {myData.map((x) => (

            <div className='w-[240px] h-[250px] bg-blue-300 rounded-md shadow-xl ml-3 mr-3 mt-8 flex flex-col'>
                <img src={x.avatar} alt='' class=' w-[150px] h-[130px] ml-[40px] mt-[20px]'></img>
                <h2 class=' font-bold ml-9'>First Name:  {x.first_name}</h2>
                <h2 class=' font-bold ml-9'>Last Name:   {x.last_name}</h2>
                <h2 class=' font-bold ml-1'>Email: {x.email}</h2>
            </div>
          
      ))}

      
        
      </div>
    
    </div>
    )
}


export default FetchData;