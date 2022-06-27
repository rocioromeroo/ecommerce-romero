// import "./ContactForm.css"
// import { useState } from "react";
// import { useForm } from "react-hook-form";

// const ContactForm = () => {
//     const { handleSubmit } = useForm();
//     const [buyer, setBuyer] = useState({
//         name: '',
//         email: '',
//         adress: '',
//         phone: ''        
//     })

//   return (
//       <div className="container">
//           <div className="row">
//             <div className="contact-form col-sm-12">
//                 <form onSubmit={handleSubmit((setBuyer) => setData(JSON.stringify(data)))}>
//                     <div className="name">
//                         <label>Nombre:  <input name="name" required="true"></input>
//                         </label>
//                     </div>
//                     <div className="email">
//                         <label>Mail:  <input name="email" required="true"></input>
//                         </label>
//                     </div>
//                     <div className="phone">
//                         <label>Teléfono:  <input name="phone" required="true"></input>
//                         </label>
//                     </div>
//                     <div className="adress">
//                         <label>Dirección:  <input name="adress" required="true"></input>
//                         </label>
//                     </div>
//                     <div className="comments">
//                         <label>Comentarios: 
//                             <textarea> 
//                             </textarea>
//                         </label>
//                     </div>
//                     <div className="submit">
//                         <input type="submit" value="submit"></input>
//                     </div>
//                     <p>{data}</p>
//                 </form>
//             </div>
//         </div>
//     </div>
//   );
// }

// export default ContactForm