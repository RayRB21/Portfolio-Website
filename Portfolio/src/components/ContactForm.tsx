import "../css/contact-form.css";
import { useState } from "react";

function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setResult("Sending...");

    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "75d2162b-e561-458a-80ae-68eb0c18cbc7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");

      event.currentTarget.reset();
    } else {
      console.log(data);

      setResult("Something went wrong.");
    }
  };

  return (
    <section className="container py-5 d-flex justify-content-center">
      <div className="contact-card col-12 col-md-10 col-lg-7">
        <form onSubmit={onSubmit}>
          <p className="contact-subtitle">Feel free to send me a message.</p>

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

          <span className="result-text">{result}</span>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
