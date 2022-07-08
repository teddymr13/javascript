function allData() {
  table.innerHTML = ``;
  contactList = JSON.parse(localStorage.getItem("listItem")) ?? [];

  contactList.forEach(function (value, i) {
    var table = document.getElementById("table");

    table.innerHTML += `
                    <tr>
                        <td>${i + 1}</td>
                        <td>${value.name}</td>
                        <td>${value.email}</td>
                        <td>${value.address}</td>
                        <td>${value.phone}</td>
                        <td>${value.checkbox}</td>
                        <td>
                            <button class="btn btn-sm btn-success" onclick="find(${
                              value.id
                            })">
                                <i class="fa fa-edit"></i>
                            </button>
                        </td>
                        <td>
                            <button class="btn btn-sm btn-danger" onclick="removeData(${
                              value.id
                            })">
                                <i class="fa fa-trash"></i>
                            </button>
                        </td>
                    </tr>`;
  });
}
