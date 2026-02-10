function Contact() {
  return (
    <section className="contact">
      <div className="container contact__container">
        <div className="contact__content">
          <h2 className="contact__content-title">Contact</h2>
          <p className="contact__content-text">
            Questions or concerns? Just fill out the form below and our support
            team will get back to you within 24 hours
          </p>
        </div>

        <form action="#" className="contact__form">
          <div className="contact__form-names">
            <input
              placeholder="First Name"
              className="contact__form-name"
              type="text"
            />
            <input
              placeholder="Last Name"
              className="contact__form-lastName"
              type="text"
            />
          </div>

          <input
            type="number"
            className="contact__form-number"
            placeholder="Phone Number"
          />
          <select className="contact__form-select" required name="" id="">
            <option value="" disabled selected hidden>
              Select Service
            </option>
          </select>
          <input
            className="contact__form-btn"
            type="submit"
            value="Submit Now"
          />
        </form>
      </div>
    </section>
  );
}

export default Contact;
