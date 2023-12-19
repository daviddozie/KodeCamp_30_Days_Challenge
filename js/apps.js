const validateName = (nameInput, event) => {
    if (nameInput.value === '') {
        nameInput.nextElementSibling.innerHTML = "Please enter your name !";
        nameInput.classList.add("error-border");
        event.preventDefault();
        return false;
    } else {
        nameInput.nextElementSibling.innerHTML = "";
        nameInput.classList.remove("error-border")
        nameInput.classList.add("success-border");
        return true;
    }
}

const validateEmail = (emailInput, event) => {
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailInput.value === "") {
        emailInput.nextElementSibling.innerHTML = "Please enter your email address !";
        emailInput.classList.add("error-border");
        event.preventDefault();
        return false;
    }
    else if (!emailInput.value.match(emailRegex)) {
        emailInput.nextElementSibling.innerHTML = "Please enter your a valid email address !";
        emailInput.classList.add("error-border");
        return false;
    }
    else {
        emailInput.nextElementSibling.innerHTML = "";
        emailInput.classList.remove("error-border")
        emailInput.classList.add("success-border");
        return true;
    }
}

const validateSubject = (subjectInput, event) => {
    if (subjectInput.value === '') {
        subjectInput.nextElementSibling.innerHTML = "Please enter your subject !";
        subjectInput.classList.add("error-border");
        event.preventDefault();
        return false;
    } else {
        subjectInput.nextElementSibling.innerHTML = "";
        subjectInput.classList.remove("error-border")
        subjectInput.classList.add("success-border");
        return true;
    }
}

const validateMessage = (messageInput, event) => {
    if (messageInput.value === '') {
        messageInput.nextElementSibling.innerHTML = "Please enter your message !";
        messageInput.classList.add("error-border");
        event.preventDefault();
        return false;
    } else {
        messageInput.nextElementSibling.innerHTML = "";
        messageInput.classList.remove("error-border")
        messageInput.classList.add("success-border");
        return true;
    }
}

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let names = document.getElementById("name");
    let email = document.getElementById("email");
    let subject = document.getElementById("subject");
    let message = document.getElementById("message");

    if (!validateName(names, event) ||
        !validateEmail(email, event) ||
        !validateSubject(subject, event) ||
        !validateMessage(message, event)
    ) {
        return;
    }

    const serviceID = 'service_4v71r04';
    const templateID = 'template_sd8zhce';

    const emailParams = {
        email_id: email.value,
        from_name: names.value,
        message: message.value,
        subject: subject.value,
    };

    let loader = document.querySelector('.load');
    loader.style.display = 'block';

    emailjs.send(serviceID, templateID, emailParams)
        .then(() => {
            alert('Successful');
            sendAutoReply(emailParams.email_id, emailParams.from_name);
            alert('Check your mail');
            setTimeout(() => {
                location.reload();
            }, 2500);
        })
        .catch((err) => {
            alert(JSON.stringify(err));
        });
});

function sendAutoReply(receiverEmail, receiverName) {
    const autoReplyServiceID = 'service_4v71r04';
    const autoReplyTemplateID = 'template_sd8zhce';

    const autoReplyParams = {
        to_email: receiverEmail,
        to_name: receiverName,
    };

    emailjs.send(autoReplyServiceID, autoReplyTemplateID, autoReplyParams)
        .then(() => {
            console.log('sent successfully!');
        })
        .catch((err) => {
            console.error('Error sending auto-reply:', err);
        });
}
