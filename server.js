const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

require('dotenv').config();

// Sử dụng các biến môi trường từ file .env
const apiKey = process.env.API_KEY;
const secretKey = process.env.SECRET_KEY; // Secret Key từ file .env


// Sử dụng body-parser để xử lý dữ liệu form
app.use(bodyParser.urlencoded({ extended: true }));

// Tạo một route để xử lý trang chủ
app.get('/', (req, res) => {
    console.log(secretKey);
    res.sendFile(__dirname + '/index.html');
});

// Tạo một route để xử lý form submit
app.post('/server-side-recaptcha', async (req, res) => {
    const recaptchaToken = req.body['g-recaptcha-response']; // Lấy token reCAPTCHA từ body của request

    // Kiểm tra nếu không có token
    if (!recaptchaToken) {
        return res.status(400).send('No reCAPTCHA token provided.');
    }

    // Kiem tra xác thực reCAPTCHA tới Google
    // const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;

    //Kiem tra xác thực reCAPTCHA tới CloudFlare
    const verificationURL = `https://challenges.cloudflare.com/turnstile/v0/siteverify`;

    try {
        const response = await fetch(verificationURL, {
            method: 'POST',
            body: JSON.stringify({
                secret: secretKey,
                response: recaptchaToken,
               
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const result = await response.json();

        if (result.success) {
            // Nếu xác thực thành công
            res.send('reCAPTCHA verified successfully. Form submitted!');
        } else {
            // Nếu xác thực thất bại
            res.status(400).send('reCAPTCHA verification failed.');
        }
    } catch (error) {
        // Nếu có lỗi khi kết nối với Google API
        res.status(500).send('Error verifying reCAPTCHA.');
    }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


