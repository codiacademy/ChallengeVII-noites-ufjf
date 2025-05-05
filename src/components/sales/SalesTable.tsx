import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useState } from "react";
import { ConfirmDeleteModal } from "../common/ConfirmDeleteModal";

const salesTableData = [
  {
    id: 1,
    date: "01/01/2023",
    name: "Pedro Silva",
    email: "pedro@email.com",
    type: "Online",
    grossPrice: 999.99,
    discount: 300,
    finalPrice: 700,
  },
  {
    id: 2,
    date: "02/01/2023",
    name: "João Pedro",
    email: "joao@email.com",
    type: "Presencial",
    grossPrice: 999.99,
    discount: 300,
    finalPrice: 700,
  },
  {
    id: 3,
    date: "03/01/2023",
    name: "Maria Silva",
    email: "maria@email.com",
    type: "Presencial",
    grossPrice: 999.99,
    discount: 300,
    finalPrice: 700,
  },
  {
    id: 4,
    date: "04/01/2023",
    name: "Giovana Santos",
    email: "giovana@gmail.com",
    type: "Presencial",
    grossPrice: 999.99,
    discount: 300,
    finalPrice: 700,
  },
  {
    id: 5,
    date: "05/01/2023",
    name: "Matheus Silva",
    email: "matheus@email.com",
    type: "Online",
    grossPrice: 999.99,
    discount: 300,
    finalPrice: 700,
  },
];

export const SalesTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("todos");

  const applyFilters = () => {
    let filtered = salesTableData;

    // Aplicar filtro por tipo
    if (filterType !== "todos") {
      filtered = filtered.filter(
        (sale) => sale.type.toLowerCase() === filterType
      );
    }

    // Aplicar filtro por busca
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (sale) =>
          sale.name.toLowerCase().includes(term) ||
          sale.email.toLowerCase().includes(term)
      );
    }

    return filtered;
  };

  const handleSearch = (e: { target: { value: string } }) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterType = (e: { target: { value: string } }) => {
    setFilterType(e.target.value);
  };

  const filteredSales = applyFilters();

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between flex-col sm:flex-row items-center p-6 gap-7 mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Lista de Vendas</h2>

        <div className="flex gap-3 flex-col-reverse sm:flex-row">
          <select
            className="w-full sm:w-48 bg-gray-700 text-white rounded-md pl-3 py-1.5 sm:py-1 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            value={filterType}
            onChange={handleFilterType}
            aria-label="Filtrar por tipo de curso"
          >
            <option value="todos">Todos</option>
            <option value="online">Online</option>
            <option value="presencial">Presencial</option>
          </select>

          <div className="relative">
            <input
              type="text"
              placeholder="Procurar..."
              className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleSearch}
              value={searchTerm}
            />
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={18}
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Data
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Cliente
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Tipo do Curso
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Valor Bruto
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Desconto
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Valor Final
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {filteredSales.map((item) => (
              <motion.tr
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {item.date}
                </td>

                <td className="px-6 py-4 whitespace-nowrap flex-col text-sm font-medium text-gray-100 flex gap-2">
                  {item.name}
                  <p className="text-xs text-gray-400">{item.email}</p>
                </td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      item.type === "Online"
                        ? "text-green-400 bg-green-950"
                        : "text-sky-400 bg-blue-950"
                    }`}
                  >
                    {item.type}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(item.grossPrice)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(item.discount)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(item.finalPrice)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <button className="text-indigo-400 hover:text-indigo-300 mr-2 cursor-pointer">
                    <Edit size={18} />
                  </button>

                  <ConfirmDeleteModal
                    onConfirm={() => {}}
                    title="Tem certeza que quer deletar?"
                    text="Essa operação não pode ser desfeita"
                  >
                    <button className="text-red-400 hover:text-red-300 mr-2 cursor-pointer">
                      <Trash2 size={18} />
                    </button>
                  </ConfirmDeleteModal>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};
