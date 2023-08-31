<template>
    <div class="contact-page">
        <div class="img">
            <div class="contact">
                <h1 class="text-white text-uppercase">contact</h1>
            </div>
        </div>
        <div class="container mt-4">
            <div class="contact-details">
                <p class="fs-5 text-center text-uppercase fs-6 fw-bold">we are here to help</p>
                <p class="fs-1 fw-bold text-center">Contact your closest store below / submit the <br> contact form and we’ll get back to you shortly</p>
            </div>
            <div class="form d-flex justify-content-center">
               <form action="https://formspree.io/f/xayzrnye" method="POST" @submit="formValidation" class="my-5">
                 <div class="inputs">
                    <input name="fullName" type="text" id="name" required>
                    <label for="name"><img width="20" height="20" src="https://img.icons8.com/material-outlined/24/user--v1.png" alt="user--v1"/>Your Name</label>
                 </div>
                 <div class="inputs">
                    <input type="text" id="number" required>
                    <label for="number"><img width="20" height="20" src="https://img.icons8.com/ios/50/phone--v1.png" alt="phone--v1"/>Phone No.</label>
                 </div>
                 <div class="inputs">
                    <input type="email" id="email" v-model="email" required>
                    <label for="email"><img width="20" height="20" src="https://img.icons8.com/ios/50/new-post--v1.png" alt="new-post--v1"/>Email Address</label>
                 </div>
                 <div class="inputs">
                    <textarea id="message" rows="8" v-model="message"></textarea>
                    <label for="name"><img width="20" height="20" src="https://img.icons8.com/ios/50/chat-message--v1.png" alt="chat-message--v1"/>Your Message</label>
                 </div>
                 <button type="submit">SUBMIT</button>
               </form>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200&display=swap');
.img {
    background-image: url(https://i.postimg.cc/D0H1ftKw/HIGH-TOP-MEN-COVER-EU.jpg);
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 600px;
}
.contact {
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, 50%);
}
.contact-page {
    font-family: montserrat;
}
h1 {
    font-size: 120px;
}
form {
    width: 90%;
    max-width: 600px;
}
.inputs {
    margin-bottom: 30px;
    position: relative;
}
input, textarea {
    width: 100%;
    padding: 10px;
    outline: 0;
    border: 1px solid black;
    color: black;
    background: transparent;
    font-size: 15px;
}
label {
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    padding: 10px;
    color: black;
    cursor: text;
    transition: 0.2s;
}
button {
    padding: 10px 0;
    color: white;
    outline: none;
    background: black;
    font-weight: bold;
    border: 1px solid black;
    width: 150px;
    cursor: pointer;
}
input:focus~label,
input:valid~label {
    top: -35px;
    font-size: 14px;
}
textarea:focus~label,
textarea:valid~label {
    top: -35px;
    font-size: 14px;
}
</style>