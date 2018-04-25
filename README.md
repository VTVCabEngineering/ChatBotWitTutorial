# ChatBotWitTutorial
Hướng dẫn xây dựng ứng dụng Facebook Messenger chatbot với Wit.ai, NodeJS, ExpressJS

![alt text](http://engineering.vtvcab.vn/wp-content/uploads/2018/04/ThumbnailWorkshop02.png)


## Video hướng dẫn [tutorial]

https://www.youtube.com/watch?v=E8OmkDVT4Jw

#### Hướng dẫn chạy ứng dụng mẫu

Để có thể chạy được ứng dụng này, bạn phải cài đặt NodeJS trước. Sau đó thực hiện:

- Clone hoặc tải mã nguồn về: https://github.com/VTVCabEngineering/ChatBotWitTutorial
- Mở terminal hoặc command line, tại thư mục witapi của project vừa tải về thực hiện câu lệnh dưới đây để cài đặt các thư viện cần thiết cho project trong file package.json
```bash
npm install 
```
- Chạy project witapi bằng
```bash
node app.js
```
- Sau khi chạy project witapi, ta được 1 API server chạy cổng 4000: http://localhost:4000
 
- Tương tự với thư mục witapi, bạn hãy mở thư mục askmebotserver để thực hiện cài đặt các thư viện:
- Mở terminal hoặc command line, tại thư mục askmebotserver của project vừa tải về thực hiện câu lệnh dưới đây để cài đặt các thư viện cần thiết cho project trong file package.json
```bash
npm install 
```
- Chạy project askmebotserver bằng
```bash
node app.js
```
- Sau khi chạy project askmebotserver, ta được 1 server chạy cổng 4005: http://localhost:4005
- Thực hiện cài đặt Ngrok bằng câu lệnh:
```bash
npm install ngrok  -g
```
- Chạy câu lệnh:
```bash
ngrok http  4005
```
Ngrok sẽ sinh ra cho chúng ta 02 địa chỉ http và https của server có cổng 4005 mà  chúng ta đang chạy phía trên. Sử dụng Ngrok để Facebook Messenger có thể kết nối đến Webhook localhost của chúng ta. 

#### Blog
Đọc thêm tại blog: http://engineering.vtvcab.vn/video-xay-dung-facebook-messenger-voi-wit-ai-nodejs-va-expressjs/
