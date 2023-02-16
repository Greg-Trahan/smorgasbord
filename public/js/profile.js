const newLocale = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#locale-name").value.trim();
  const type = document.querySelector("#locale-type").value.trim();
  const price = document.querySelector("#locale-price").value.trim();
  const address = document.querySelector("#locale-address").value.trim();
  const description = document
    .querySelector("#locale-description")
    .value.trim();

  console.log(name, type, price, address, description);

  if (name && type && price && address && description) {
    const response = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify({
        locale_name: name,
        locale_type: type,
        locale_price: price,
        locale_address: address,
        locale_description: description,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Please enter all fields");
    }
  }
};

document
  .querySelector(".new-locale-form")
  .addEventListener("submit", newLocale);

// const editLocale = async (event) => {
//   const title = document.querySelector("#blog-title").value.trim();
//   const content = document.querySelector("#blog-content").value.trim();

//   const response = await fetch(
//     `/api/dashboard/${event.target.getAttribute("data-id")}`,
//     {
//       method: "PUT",
//       body: JSON.stringify({ blog_title: title, description: content }),
//       headers: { "Content-Type": "application/json" },
//     }
//   );
//   const result = await response.json();
//   console.log(result);
//   document.location.replace("/dashboard");
// };

// const deleteLocale = async (event) => {
//   const response = await fetch(
//     `/api/dashboard/${event.target.getAttribute("data-id")}`,
//     {
//       method: "DELETE",
//       headers: { "Content-Type": "application/json" },
//     }
//   );
//   document.location.replace("/dashboard");
// };

// document.querySelectorAll(".edit-locale-btn").forEach((editBtn) => {
//   editBtn.addEventListener("click", editLocale);
// });

// document.querySelectorAll(".delete-locale-btn").forEach((deleteBtn) => {
//   deleteBtn.addEventListener("click", deleteLocale);
// });
