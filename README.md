# Test reCAPTCHA và Cloudflare Turnstile

Đây là một dự án mẫu để thử nghiệm và xác thực các giải pháp bảo mật reCAPTCHA và Cloudflare Turnstile trong ứng dụng Node.js.

## Nội dung

- [Giới thiệu](#giới-thiệu)
- [Cài đặt](#cài-đặt)
- [Sử dụng](#sử-dụng)
- [Test reCAPTCHA](#test-recaptcha)
- [Test Cloudflare Turnstile](#test-cloudflare-turnstile)

## Giới thiệu

Dự án này cho phép bạn xác thực người dùng bằng cách sử dụng Google reCAPTCHA và Cloudflare Turnstile. Đây là hai giải pháp phổ biến giúp bảo vệ ứng dụng khỏi các bot tự động và lạm dụng.

## Cài đặt

1. **Clone dự án**:
   ```bash
    git clone https://github.com/your-username/reCAPTCHA-Cloudflare-Test.git
2. **Cài đặt các phụ thuộc**:

        npm install
3. Cấu hình biến môi trường: Tạo file .env trong thư mục gốc và thêm các biến sau:
   
        API_KEY=your-api-key-here
        SECRET_KEY=your-secret-key-here
        PORT=3000   

## Sử dụng
1. Khởi động server

       node server.js
3. Mở trình duyệt và truy cập
   VD: http://localhost:3000 để kiểm tra form xác thực.

## Test reCAPTCHA  
  - Mô tả
    Phần này hướng dẫn bạn cách tích hợp và kiểm tra Google reCAPTCHA.
  
  - Hướng dẫn
    Cài đặt Google reCAPTCHA:
      + Truy cập Google reCAPTCHA Admin Console.
      + Tạo một reCAPTCHA mới và nhận Site Key và Secret Key.
      + Cập nhật Site Key trong file HTML: 
      + Thay thế data-sitekey trong file index.html với Site Key của bạn.
  
  - Test: 
    Điền vào form và xác minh reCAPTCHA. Nếu thành công, bạn sẽ nhận được phản hồi từ server.
  
## Test Cloudflare Turnstile
  - Mô tả
    Phần này hướng dẫn bạn cách tích hợp và kiểm tra Cloudflare Turnstile.

  - Hướng dẫn
    Cài đặt Cloudflare Turnstile:
      + Truy cập Cloudflare Turnstile để tạo một ứng dụng mới.
      + Nhận Site Key và Secret Key cho ứng dụng của bạn.
      + Cập nhật Site Key trong file HTML:
      + Thay thế data-sitekey trong file index.html với Site Key của bạn.
  
  - Test:
    Điền vào form và xác minh Turnstile. Nếu thành công, bạn sẽ nhận được phản hồi từ server

   










