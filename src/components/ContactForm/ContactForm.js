import "./ContactForm.css"
import {useForm} from "react-hook-form";
import { useState, useContext } from "react";
import {addDoc, collection} from 'firebase/firestore'
import {db} from '../../service/firebase'
import CartContext from "../../context/CartContext"
import Swal from 'sweetalert2'

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {cart, getTotal, clearCart} = useContext(CartContext)

    const [buyer, setBuyer] = useState({
        name:'',
        mail: '',
        phone: '' ,
        adress: '',
    })

    const createOrder = (e) => {
        e.preventDefault();
        const ObjOrden = {
            buyer: buyer,
            items: cart,
            total: getTotal()
        }

        const coleccion = collection(db, 'orders')
        addDoc(coleccion, ObjOrden).then (({ id })=> {
            console.log(buyer);
            Swal.fire({
                title: `Compra realizada. ${buyer.name}, gracias por confiar`,
                text:`Número de orden ${id}`, 
            })
        })
        clearCart()
    }

    const handleInputChange = (e) => {
        setBuyer({
            ...buyer,
        [e.target.name]: e.target.value
        })
    }

    const onSubmit = (data) => {
        console.log(data);
        console.log(errors);
    }
    

    return (    
        <div className="contact-form container d-flex justify-content-center">
            <div className="contact-form-border row">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-sm-12">
                        <label>Nombre: <br></br>
                            <input {...register("name", {required: true})}
                                type="text"  
                                onChange={handleInputChange}
                                value={buyer.name}/>
                        </label>
                    </div>

                    <div className="col-sm-12">
                        <label>Telefono: <br></br>
                            <input {...register("phone", {required: true    })}
                            type="number"  
                            onChange={handleInputChange}
                            value={buyer.phone} />
                        </label>
                    </div>
                    
                    <div className="col-sm-12">
                        <label>Email: <br></br>
                            <input {...register("mail", {required: true})}
                            type="text" 
                            onChange={handleInputChange}
                            value={buyer.mail} />
                        </label>
                    </div>

                    <div className="col-sm-12">
                        <label>Dirección: <br></br>
                            <input {...register("adress", {required: true})}
                                type="text"  
                                onChange={handleInputChange}
                                value={buyer.adress} />
                        </label>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="finalizar col-sm-12 ">
                            <button type="submit" onClick={createOrder}>Finalizar compra</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm