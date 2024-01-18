Here's a step-by-step guide on how to use the emailjs library to build a component to send real-world emails:

### 1. Install the emailjs library by running the following command in your terminal:
- npm i @emailjs/browser;

### 2. Import the library in your component:
- import emailjs from '@emailjs/browser';

### 3. Create a form in your component with the necessary fields for sending an email, such as "To", "Subject", and "Message". Here's an example:
```javascript
<div className="email-form">
    <h1>Send Email</h1>

    <form ref={form} onSubmit={(e) => submit(e)}>
        <input type="text" hidden value='напишите своё имя' name='from_name' />

        <label htmlFor="reciever_name">Reciever name</label>
        <input type="text" id="reciever_name"
            placeholder="Reciever name" name='to_name'
        />

        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" id="exampleInputEmail1"
            placeholder="Reciever email address" name='user_email'
        />
        <small id="email-help">
            We'll never share your email with anyone else.
        </small>

        <label htmlFor="exampleFormControlTextarea1">Message</label>
        <textarea id="exampleFormControlTextarea1" rows="3"
            placeholder="Enter your message here..."
            name="message"
        ></textarea>
        <small id="message-help">Text area for your message.</small>

        <button type="submit">Submit</button>
    </form>
</div>
```

### 4. Add an event listener to the form to handle the submission and send the email using emailjs.sendForm():
```javascript
const form = useRef(); // reference to the form element

const submit = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID-')
        .then((result) => {
            alert('Message Sent', result.text);
            // show the user a success message
        }, (error) => {
            alert('An error occurred, Please try again', error.text);
            // show the user an error
        });

    e.target.reset(); // resets the form after submission
}
```

### 5. Replace the placeholders in the sendForm() method with your own service ID, template ID, and user ID. You can find these values in your EmailJS account dashboard.