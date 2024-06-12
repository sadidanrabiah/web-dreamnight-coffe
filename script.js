// toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburber menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// toggle class active untuk search form
const searchForm = document.querySelector(" .search-form");
const searchBox = document.querySelector(" #search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};
// toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};
// klik diluar sidebar manghilangkan nav
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// modal box
const itemDetailModal = document.querySelector(" #item-detail-modal");
const itemDetailButton = document.querySelectorAll(".item-detail-button");

itemDetailButton.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});
// klik tombol close
document.querySelector(" .modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};
// klik diluar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};

// document.querySelectorAll("#item-detail-modal").forEach((item) => {
//   item.addEventListener("click", (e) => {
//     let parent = e.target.parentNode.parentNode;
//     let gambar = parent.querySelector(".product-image").src;
//     let harga = parent.querySelector(".product-price").innerHTML;
//     let judul = parent.querySelector(".title").innerHTML;
//     let stars = parent.querySelector(".product-stars").innerHTML;

//     let tombolModal = document.querySelector(".item-detail-button");
//     tombolModal.click();

//     document.querySelector(".modalTitle").innerHTML = judul;
//     let image = document.createElement("img");
//     image.src = gambar;
//     image.classList.add("w-100");
//     document.querySelector(".modalImage").innerHTML = "";
//     document.querySelector(".modalImage").appendChild(image);
//     document.querySelector(".modalStars").innerHTML = stars;
//     document.querySelector(".modalHarga").innerHTML = harga;

//     const nohp = "628234039878";
//     let pesan = `https://api.whatsapp.com/send?phone=${nohp}&text=Halo kak, saya mau pesan produk ini ${gambar}`;

//     document.querySelector(".cart").href = pesan;
//   });
// });

// // klik tombol close
// document.querySelector(".modal .close-icon").onclick = (e) => {
//   itemDetailModal.style.display = "none";
//   e.preventDefault();
// };
// // klik diluar modal
// window.onclick = (e) => {
//   if (e.target === itemDetailModal) {
//     itemDetailModal.style.display = "none";
//   }
// };
