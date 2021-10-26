# **Proyecto Final CoderHouse**
---
#### E-commerce creado en React

La app cuenta con un stock de productos almacenados en **Cloud Firestore**, donde tambien quedara registrada cada orden de compra segun su ID.

##### Para la creación de esta app se implemento:
- useState
- useEffect
- useParams
- Custom Hooks
- Router
- Context
- Firebase

## 
##
##
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