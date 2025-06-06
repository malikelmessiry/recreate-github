import './NewsletterForm.css';

const NewsletterForm = () => {
    return (
        <section className="newsletter-form">
            <input type="text" placeholder='Email address'></input>
            <button>Sign up for GitHub</button>
        </section>
    );
};

export default NewsletterForm;