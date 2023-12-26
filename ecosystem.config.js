export const apps = [
  {
    name: 'trello-app', // Tên của ứng dụng
    script: 'npm', // Lệnh để chạy ứng dụng (ở đây là npm)
    args: 'run preview', // Các đối số cần truyền khi chạy lệnh script
    cwd: '/app', // Thư mục làm việc của ứng dụng trong container

    // Các options cho PM2
    autorestart: true, // Khởi động lại tự động khi ứng dụng gặp lỗi
    log_date_format: 'YYYY-MM-DD HH:mm:ss', // Định dạng ngày giờ trong log
    error_file: '/logs/trello-app.err.log', // File log lỗi
    out_file: '/logs/trello-app.out.log' // File log thông tin
  }
]
