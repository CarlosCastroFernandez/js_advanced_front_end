# 🛠️ Panel Administrativo – Documentación del Proyecto

## 📌 Descripción General

Este proyecto implementa un **Panel Administrativo** donde los usuarios con rol *administrador* pueden:

- Iniciar sesión como administradores  
- Registrarse como nuevos administradores  
- Acceder a un panel de control  
- Buscar usuarios en tiempo real  
- Crear nuevos usuarios  
- Ver detalles de usuarios  
- Modificar datos de usuarios (incluyendo contraseña)  
- Eliminar usuarios con confirmación  
- Cerrar sesión  
- Mantener la sesión activa mediante **Refresh Token**

---

## 🚀 Funcionalidades Principales

### 🔐 1. Login de Administradores

Los administradores pueden autenticarse mediante correo y contraseña.  
Al iniciar sesión correctamente:

- Se genera un **access token**  
- Se genera un **refresh token**  
- Se oculta el formulario de login  
- Se carga el Panel Administrativo  

---

### 🆕 2. Registro de Administradores

El sistema permite registrarse como nuevos administradores.  
Los datos requeridos son:

- Nombre  
- Apellidos  
- Email  
- Contraseña (verificación doble)

Se validan:

- Formato del email  
- Contraseñas coincidentes  
- Datos mínimos requeridos  

---

## 📋 3. Panel Administrativo

Una vez autenticado, el administrador accede a un Panel visual con una tabla que muestra todos los usuarios.

### 🔎 Búsqueda en tiempo real
Un campo de búsqueda permite filtrar usuarios por:

- Nombre  
- Apellidos  
- Correo  
- Estado (activo/inactivo)

La búsqueda ignora mayúsculas, minúsculas y acentos.

---

### ➕ 4. Agregar nuevo usuario

En el panel hay un botón **“Nuevo Usuario”** que abre un modal donde se pueden introducir:

- Nombre  
- Apellidos  
- Email  
- Rol (usuario/administrador)  
- Contraseña  
- Estado (¿Activo?)

Al confirmar, el usuario es insertado en la base de datos y la tabla se actualiza.

---

### 🖱️ 5. Ver y modificar detalles de un usuario

Con **clic derecho** en cualquier fila de la tabla se abre un menú donde se puede:

- Ver detalles del usuario  
- Modificar cualquiera de sus datos:
  - Nombre  
  - Apellidos  
  - Correo  
  - Rol  
  - Contraseña  
  - Estado  

Al aceptar, se actualizan los datos en la base de datos.

---

### 🗑️ 6. Eliminar usuarios

También desde el clic derecho, el administrador puede eliminar un usuario.  
El sistema muestra un cuadro de confirmación:

> “¿Desea eliminar este usuario definitivamente?”

Si se confirma, el usuario se elimina y la tabla se actualiza.

---

## 🔄 7. Refresh Token

El sistema utiliza **Access Tokens** y **Refresh Tokens** para manejar la sesión:

- El *access token* se usa para las peticiones protegidas  
- El *refresh token* se usa para generar nuevos access tokens  
- El usuario no necesita volver a iniciar sesión mientras el refresh token sea válido  

---

## 🚪 8. Logout

El botón **Log-Out**:

- Elimina los tokens  
- Limpia `localStorage` y `sessionStorage`  
- Elimina el contenido del panel del DOM  
- Vuelve a mostrar el formulario de login  

---

## 🗂️ Estructura del Proyecto

