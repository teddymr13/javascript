function find(id) {
  contactList = JSON.parse(localStorage.getItem("listItem")) ?? [];

  contactList.forEach(function (value) {
    if (value.id == id) {
      document.getElementById("id").value = value.id;
      document.getElementById("name").value = value.name;
      document.getElementById("email").value = value.email;
      document.getElementById("address").value = value.address;
      document.getElementById("phone").value = value.phone;
      document.getElementById("checkbox").value = value.checkbox;
    }
  });
}
