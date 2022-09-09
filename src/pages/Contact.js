import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contactText">
        <h2>GET IN TOUCH</h2>
        <h1>Lila Burch Photography</h1>
        <div className="contactbreak"></div>
      </div>
      <form>
        <input type="text" name="Name" placeholder="Name" required />
        <input type="text" name="Email" placeholder="Email" required />
        <input
          type="text"
          name="How did you find me?"
          placeholder="How did you find me?"
          required
        />
        <input type="text" name="Date" placeholder="Date" required />
        <input type="text" name="Location" placeholder="Location" required />
        <textarea
          cols="55"
          rows="15"
          placeholder="Message"
          name="message"
        ></textarea>
        <button>SUBMIT</button>
      </form>
    </section>
  );
};

export default Contact;
