import DataTable, { createTheme } from "react-data-table-component"

createTheme(
  "solarized",
  {
    text: {
      primary: "var(--primary-color)",
      secondary: "#2aa198",
    },
    background: {
      default: "var(--secondary-color)",
    },
    context: {
      background: "#cb4b16",
      text: "white",
    },
    divider: {
      default: "whitesmoke",
    },
    action: {
      button: "rgba(0,0,0,.54)",
      hover: "rgba(0,0,0,.08)",
      disabled: "rgba(0,0,0,.12)",
    },
  },
  "dark"
)

export default function TransactionsHistory({
  duration = "recent",
  filter = null,
}) {
  const columns = [
    {
      name: "ID",
      selector: (row) => row.title,
    },

    {
      name: "Amount",
      selector: (row) => row.year,
    },

    {
      name: "Category",
      selector: (row) => row.year,
    },

    {
      name: "Date",
      selector: (row) => row.year,
    },
  ]

  const data = [
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },

    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },

    {
      id: 3,
      title: "Ghostbusters",
      year: "1984",
    },

    {
      id: 4,
      title: "Ghostbusters",
      year: "1984",
    },

    {
      id: 5,
      title: "Ghostbusters",
      year: "1984",
    },

    {
      id: 6,
      title: "Ghostbusters",
      year: "1984",
    },
  ]

  return (
    <DataTable
      responsive={true}
      columns={columns}
      data={data}
      direction="auto"
      subHeaderAlign="center"
      pagination
      fixedHeader
      theme="solarized"
      customStyles={{
        headCells: {
          style: {
            fontWeight: "bold",
          },
        },
      }}
    />
  )
}
