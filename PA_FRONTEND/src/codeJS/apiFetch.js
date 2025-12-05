export async function getAllUser() {
    try {

        const response = await fetch("http://localhost:3000/getAllUser", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            }
        })
        const data = await response.json();
        console.log(data);
        if (data.status === "Failed") return null;
        const users = data.data;
        console.log(data.data);
       
        return users


    } catch (error) {

    }
}

export async function sendLogin(email, password) {
    let data;
    try {
        const response = await fetch("http://localhost:3000/getAllUser/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })

         data = await response.json()
        if (data.status === "Failed") return new Error("Error en la respuesta");
        localStorage.setItem("token", data.token)
        return data;

    } catch (error) {
        return data={
            status:"Failed",
            meesage: error.message
        }
    }

}

export async function editUser(user) {
    let data;
    try {

        const response = await fetch("http://localhost:3000/getAllUser/edit?identification=" + user._id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify(user)
        })
        data = await response.json();
        console.log(data);

        if (!response.ok) return null

        return data.data
    } catch (error) {
        return data = error.message
    }
}
export async function deleteUser(id) {
    let data;
    try {

        const response = await fetch("http://localhost:3000/getAllUser/delete?id=" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            }
        })
        data = await response.json();
        console.log(data);

        if (!response.ok) return null
        console.log(data.status);

        return data.status
    } catch (error) {
        return data = error.message
    }
}


export async function createNewUser(user) {
    let data;
    try {

        const response = await fetch("http://localhost:3000/getAllUser/newUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify(user)
        })
        data = await response.json();
        console.log(data);

        if (!response.ok) return null

        return data.data
    } catch (error) {
        return data = error.message
    }
}