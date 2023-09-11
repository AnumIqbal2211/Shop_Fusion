import React, { useState } from "react";
import DataTable from "react-data-table-component";

function ProductsDataTable() {
  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Products",
      selector: (row) => row.productname,
      sortable: true,
    },
    {
      name: "Stock",
      selector: (row) => row.stock,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      productname: "Microphone",
      stock: "30",
      price: "$40",
    },
    {
      id: 2,
      productname: "Speakers",
      stock: "25",
      price: "$300",
    },
    {
      id: 3,
      productname: "Hp Laptops",
      stock: "15",
      price: "$2000",
    },
    {
      id: 4,
      productname: "Phones",
      stock: "52",
      price: "$1500",
    },
    {
      id: 5,
      productname: "Clock",
      stock: "46",
      price: "$50",
    },
    {
      id: 6,
      productname: "Microphone",
      stock: "30",
      price: "$40",
    },
    {
      id: 7,
      productname: "Speakers",
      stock: "25",
      price: "$300",
    },
    {
      id: 8,
      productname: "Dell Laptops",
      stock: "35",
      price: "$2000",
    },
    {
      id: 9,
      productname: "Phones",
      stock: "52",
      price: "$1500",
    },
    {
      id: 10,
      productname: "Clock",
      stock: "46",
      price: "$50",
    },
    {
      id: 11,
      productname: "Microphone",
      stock: "30",
      price: "$40",
    },
    {
      id: 12,
      productname: "Speakers",
      stock: "25",
      price: "$300",
    },
    {
      id: 13,
      productname: "Lenovo Laptops",
      stock: "20",
      price: "$2000",
    },
    {
      id: 14,
      productname: "Phones",
      stock: "52",
      price: "$1500",
    },
    {
      id: 15,
      productname: "Clock",
      stock: "46",
      price: "$50",
    },
    {
      id: 16,
      productname: "Microphone",
      stock: "30",
      price: "$40",
    },
    {
      id: 17,
      productname: "Speakers",
      stock: "25",
      price: "$300",
    },
    {
      id: 18,
      productname: "Microsoft Laptops",
      stock: "30",
      price: "$2000",
    },
    {
      id: 19,
      productname: "Phones",
      stock: "52",
      price: "$1500",
    },
    {
      id: 20,
      productname: "Clock",
      stock: "46",
      price: "$50",
    },
  ];

  const [records, setRecords] = useState(data);

  function handleFilter(event) {
    const newData = data.filter((row) => {
      return row.productname
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setRecords(newData);
  }

  return (
    <div className="data-table">
      <div className="search-product">
        <input
          type="text"
          onChange={handleFilter}
          placeholder="Search anything you want !!!"
        />
      </div>
      <DataTable
        columns={columns}
        data={records}
        selectableRows
        fixedHeader
      />
    </div>
  );
}

export default ProductsDataTable;

