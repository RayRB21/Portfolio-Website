import "../css/contact-form.css";

function ContactForm() {
  return (
    <section className="container py-5 d-flex justify-content-center">
      <div className="contact-card col-12 col-md-10 col-lg-7">
        <form action="https://api.web3forms.com/submit" method="POST">
          <input
            type="hidden"
            name="access_key"
            value="75d2162b-e561-458a-80ae-68eb0c18cbc7"
          />
          <p className="contact-subtitle">
            Have a question or want to work together?
          </p>

          <div className="mb-4">
            <input
              type="text"
              name="name"
              className="form-control custom-input"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              name="email"
              className="form-control custom-input"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="mb-4">
            <textarea
              name="message"
              rows={6}
              className="form-control custom-input"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn submit-btn w-100">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
