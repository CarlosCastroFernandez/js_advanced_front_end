import { createNewUser, sendLogin } from "./apiFetch";
import { createHeader } from "./headerTable";
import { createMain } from "./table";

export async function login() {

    const buttonSigin = document.querySelector(".button-singin");
    const buttonSigup = document.querySelector(".button-singup");
    const formSingin = document.querySelector(".form-singin");
    const formSingup = document.querySelector(".form-singup");


    buttonSigin.addEventListener("click", (event) => {
        formSingin.style.display = "flex";
        formSingup.style.display = "none";
        buttonSigin.style.backgroundColor="grey"
         buttonSigup.style.backgroundColor="white"
    })

    buttonSigup.addEventListener("click", (event) => {
        buttonSigin.style.backgroundColor="white"
        buttonSigup.style.backgroundColor="grey"
        formSingin.style.display = "none";
        formSingup.style.display = "flex";
    })

    formSingin.addEventListener("submit", async (event) => {
        event.preventDefault();
        const correo = document.querySelector("#email-login").value.trim()
        console.log(correo);
        const password = document.querySelector("#password-login").value.trim()
        console.log(password);

        const data = await sendLogin(correo, password)
        if (data.status !== "Failed") {
            document.querySelector(".section-login").style.display="none";
                if (document.querySelector("header")){
                     createHeader();
                    await createMain()
                }else{
                     await createMain()
                }
                 
            
          
        }


    })
    formSingup.addEventListener("submit", async (event) => {
        event.preventDefault();
        const name = document.querySelector("#name-register").value.trim()
        const correo = document.querySelector("#email-register").value.trim()
        console.log(correo);
        const lastName = document.querySelector("#lastName-register").value.trim()

        const passwordInput = document.querySelector("#password-register");
        const password2Input = document.querySelector("#password-register2");

        const password = passwordInput.value.trim();
        const password2 = password2Input.value.trim();

        if (password === password2) {
            const object = {
                name: name,
                lastName: lastName,
                email: correo,
                password: password,
                role: "admin"
            }
            const data = await createNewUser(object);
            if (!data) {
                const valid = validError();
                formSingup.appendChild(valid);
                formSingup.reset();
                setTimeout(() => {
                    formSingup.removeChild(valid);
                }, 2000)

            } else {
                const valid = validAccept();
                formSingup.reset();
                formSingup.appendChild(valid);
                setTimeout(() => {
                    formSingup.removeChild(valid);
                    formSingup.style.display = "none";
                    formSingin.style.display = "flex";

                }, 2000)


            }
        } else {
            const valid = validPassword();
            passwordInput.value = "";
            password2Input.value = "";
            formSingup.appendChild(valid);
            setTimeout(() => {
                formSingup.removeChild(valid);

            }, 2000)

        }



    })



}
function validError() {
    const valid = document.createElement("p")
    valid.textContent = "Hubo algun problema"
    valid.style.backgroundColor = "red"
    return valid;
}
function validAccept() {
    const valid = document.createElement("p")
    valid.textContent = "Registrado Correctamente"
    valid.style.backgroundColor = "green"
    return valid;
}
function validPassword() {
    const valid = document.createElement("p")
    valid.textContent = "Las contraseñas no coinciden"
    valid.style.backgroundColor = "red"
    return valid;
}



