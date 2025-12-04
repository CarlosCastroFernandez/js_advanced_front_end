export async function getAllUser(){
    try {
        const prueba= await login()
        const response= await fetch("http://localhost:3000/getAllUser",{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "auth-token":prueba.token
            }
        })
        const data=await response.json();
        if (data.status==="Failed") return "failed";
        const users=data.data;
        console.log(data.data);
        
        return users

        
return usuarios;
    } catch (error) {
        
    }
}

async function  login(){

    const response=await fetch("http://localhost:3000/getAllUser/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            email:"ana2@example.com",
            password:"123456"
        })
    })

    const data=await response.json()
    if (data.status==="Failed") return "Failed";
   
    return data;
}