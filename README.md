# **Proyecto Final CoderHouse**

### E-commerce creado en React

La app cuenta con un stock de productos almacenados en **Cloud Firestore**, donde tambien quedara registrada cada orden de compra segun su ID.
Para poder realizar el proceso de compra es necesario estar logeado con un mail valido y una contraseña de al menos 8 caracteres incluyendo numeros y letras, para lo cual se utiliza **Authentication Firebase**.

---

#### Deploy en Vercel
**[Naig Delivery](https://naig-delivery.vercel.app/)**

---
#### Instalación:
- Clona este proyecto
- Ingresa a la carpeta del proyecto `cd project-react-coderhouse`
- Instala dependencias `npm install`
- Corre el proyecto `npm start`
---

#### Librerias externas:
- [Formik](https://www.npmjs.com/package/formik)
- [React Credit Cards](https://www.npmjs.com/package/react-credit-cards)
- [React Helmet](https://www.npmjs.com/package/react-helmet)
- [React Paginate](https://www.npmjs.com/package/react-paginate)
- [React Spinners](https://www.npmjs.com/package/react-spinners)
- [Vercel](https://www.npmjs.com/package/vercel)
- [Firebase 9](https://firebase.google.com/docs/firestore/quickstart#web-version-9)

---
**Modelo de orden de compra almacenada en firestore**
```
ID
    [
      buyer {
          name:
          email:
          phone:
      }
      items [
        0 {
            id:
            name:
            price:
            quantity:
            subtotal:
        }
      ]
      total:
      date:
    ]
```
---

**by [fraan-nz](https://github.com/fraan-nz)**

---
