function Contact() {
	return (
		<main className="page content-page contact-page">
			<p className="eyebrow">LET'S TALK</p>
			<h1>Questions are part of learning.</h1>
			<p className="intro">Tell us what you are working on, where you are stuck, or what you want to learn next.</p>
			<form className="contact-form" onSubmit={(event) => event.preventDefault()}>
				<label>Name<input type="text" placeholder="Your name" required /></label>
				<label>Email<input type="email" placeholder="you@example.com" required /></label>
				<label>Message<textarea placeholder="How can we help?" rows="5" required /></label>
				<button className="button button-primary" type="submit">Send message</button>
			</form>
		</main>
	)
}

export default Contact
