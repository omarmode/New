
import { useForm, ValidationError } from "@formspree/react";
import "./contact.css";
import Lottie from "lottie-react";
import doneAnimation from "../../../public/animation/done.json"
import contactUsAnimation from "../../../public/animation/contact us.json"
export default function Contact() {
  const [state, handleSubmit] = useForm("mvgprnzd");


  return (

   <section className="contact-us">

<h1 className="title"> <span className="icon-envelope"></span>
  Contact Us

</h1>
<p className="subtitle">Contact us for more information and get notified when i publish something new</p>

<div className="flex" style={{justifyContent : "space-between"}}>
<form onSubmit={handleSubmit}>
<div  className="flex" >
<label htmlFor="email" aria-autocomplete="off" className="subtitle">Email Address:</label>
<input required type="email" id="email" name="email" />

      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
</div>
<div style={{marginTop: "24px"}} className="flex">
  
<label htmlFor="message" className="subtitle">Your Message:</label>
  <textarea required id="message" name="message"></textarea>
  <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
</div>

  <button className="submit subtitle" type="submit" disabled={state.submitting}>
    {state.submitting ? "Sending..." : "Submit"}
  </button>
 
{state.succeeded && <p className="flex" style={{ marginTop: "1.7rem" , fontSize:"16px"}} >
<Lottie loop = {false} style={{width:"50px", height:"50px"}} animationData={doneAnimation} />
  Your Message has been sent Successfully!</p>}
</form>
<div className="animation"><Lottie className="contactAnimation" animationData={contactUsAnimation} /></div>

</div>
   </section>

  )
}
