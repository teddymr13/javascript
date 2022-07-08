function save() {
  contactList = JSON.parse(localStorage.getItem("listItem")) ?? [];

  var id;
  let checkbox = document.querySelectorAll(".check");
  let arrayCheck = [];
  checkbox.forEach((check) => {
    if (check.checked) {
      arrayCheck.push(check.value);
    }

    // console.log(arrayCheck);
    let hobi = arrayCheck.forEach((acc) => {});
  });
  contactList.length != 0
    ? contactList.findLast((item) => (id = item.id))
    : (id = 0);

  if (document.getElementById("id").value) {
    contactList.forEach((value) => {
      // console.log(arrayCheck);
      if (document.getElementById("id").value == value.id) {
        (value.name = document.getElementById("name").value),
          (value.email = document.getElementById("email").value),
          (value.address = document.getElementById("address").value),
          (value.phone = document.getElementById("phone").value),
          (value.checkbox = arrayCheck.join(", "));
        // console.log(value.checkbox);
      }
    });
    document.getElementById("id").value = "";
  } else {
    console.log(arrayCheck);
    var item = {
      id: id + 1,
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      address: document.getElementById("address").value,
      phone: document.getElementById("phone").value,
      checkbox: arrayCheck.join(", "),
    };
    contactList.push(item);
  }

  if (document.forms["formPribadi"]["name"].value == "") {
    alert("Nama Tidak Boleh Kosong");
    document.forms["formPribadi"]["name"].focus();
    return false;
  }
  if (document.forms["formPribadi"]["address"].value == "") {
    alert("Alamat Tidak Boleh Kosong.");
    document.forms["formPribadi"]["address"].focus();
    return false;
  }

  var emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (!emailReg.test(document.getElementById("email").value)) {
    alert("Format Email Invalid");
    return false;
  }

  var phoneReg = /^(^\+62|62^08)(\d{3,4}-?){2}\d{3,4}$/g;
  if (!phoneReg.test(document.getElementById("phone").value)) {
    alert("Nomor harus diawali dengan +62");
    return false;
  }

  localStorage.setItem("listItem", JSON.stringify(contactList));

  allData();

  document.getElementById("form").reset();
}
