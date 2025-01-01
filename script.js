document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modal-image");
  const downloadButton = document.getElementById("download-button");
  const backButton = document.getElementById("back-button");

  // Modal mật khẩu
  const passwordModal = document.getElementById("password-modal");
  const passwordInput = document.getElementById("password-input");
  const submitPasswordButton = document.getElementById("submit-password");
  const errorMessage = document.getElementById("error-message");
  const loginSuccessMessage = document.getElementById("login-success-message"); // Thông báo thành công

  const correctPassword = "691356"; // Đặt mật khẩu đúng

  // Số lượng ảnh trong mỗi thư mục
  const imageCounts = {
    jpg: 290, // Số ảnh trong thư mục jpg
    png: 10, // Số ảnh trong thư mục png
    jpeg: 5, // Số ảnh trong thư mục jpeg
  };

  // Hàm kiểm tra mật khẩu
  submitPasswordButton.addEventListener("click", () => {
    const enteredPassword = passwordInput.value;
    if (enteredPassword === correctPassword) {
      passwordModal.style.display = "none"; // Ẩn modal mật khẩu
      showGallery(); // Hiển thị gallery khi mật khẩu đúng
      showLoginSuccessMessage(); // Hiển thị thông báo login thành công
    } else {
      errorMessage.style.display = "block"; // Hiển thị thông báo lỗi
    }
  });

  // Hàm hiển thị thông báo login thành công
  function showLoginSuccessMessage() {
    loginSuccessMessage.style.display = "block"; // Hiển thị thông báo
    setTimeout(() => {
      loginSuccessMessage.style.display = "none"; // Ẩn thông báo sau 3 giây
    }, 5000);
  }

  // Hàm tạo và hiển thị ảnh
  function createImageElement(format, index) {
    const img = document.createElement("img");
    img.src = `images/${format}/image (${index}).${format}`; // Đường dẫn ảnh
    img.alt = `image (${index}).${format}`;
    img.classList.add("image"); // Lớp CSS để điều chỉnh kích thước

    // Thêm sự kiện click vào ảnh để mở modal
    img.addEventListener("click", () => openModal(img.src, img.alt));
    return img;
  }

  // Mở modal với ảnh được click và hiển thị nút download
  function openModal(src, alt) {
    modal.style.display = "flex"; // Hiển thị modal
    modalImage.src = src; // Cập nhật ảnh trong modal
    modalImage.alt = alt; // Cập nhật alt cho ảnh trong modal
    downloadButton.href = src; // Cập nhật đường dẫn tải ảnh
  }

  // Đóng modal khi click vào nút back
  backButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Duyệt qua các thư mục và hiển thị ảnh
  function showGallery() {
    Object.keys(imageCounts).forEach((format) => {
      for (let i = 1; i <= imageCounts[format]; i++) {
        const container = document.createElement("div");
        container.classList.add("image-container");

        const img = createImageElement(format, i);
        container.appendChild(img);
        gallery.appendChild(container);
      }
    });
  }
});
