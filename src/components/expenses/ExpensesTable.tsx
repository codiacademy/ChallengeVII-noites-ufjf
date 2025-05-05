import { useState } from "react";
import { motion } from "framer-motion";
import {
  Edit,
  Search,
  Trash2,
  CircleCheckBig,
  CircleAlert,
} from "lucide-react";
import { ConfirmDeleteModal } from "../common/ConfirmDeleteModal";

const expensesData = [
  {
    id: 1,
    date: "01/01/2023",
    description: "Aluguel do escritório",
    createdAt: "Registrado em 01/01/2023",
    category: "Fixa",
    value: 1200,
    status: "Pago",
  },
  {
    id: 2,
    date: "02/01/2023",
    description: "Conta de luz",
    createdAt: "Registrado em 02/01/2023",
    category: "Fixa",
    value: 120,
    status: "Pendente",
  },
  {
    id: 3,
    date: "03/01/2023",
    description: "Internet",
    createdAt: "Registrado em 03/01/2023",
    category: "Fixa",
    value: 100,
    status: "Pendente",
  },
  {
    id: 4,
    date: "04/01/2023",
    description: "Manutenção do ar-condicionado",
    createdAt: "Registrado em 04/01/2023",
    category: "Variavel",
    value: 350,
    status: "Pago",
  },
  {
    id: 5,
    date: "05/01/2023",
    description: "Campanha de marketing",
    createdAt: "Registrado em 05/01/2023",
    category: "Variavel",
    value: 1500,
    status: "Pago",
  },
];

export const ExpensesTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("todos");
  const [filterStatus, setFilterStatus] = useState("todos");

  const applyFilters = () => {
    let filtered = expensesData;

    if (filterCategory !== "todos") {
      filtered = filtered.filter(
        (expense) => expense.category.toLowerCase() === filterCategory
      );
    }

    if (filterStatus !== "todos") {
      filtered = filtered.filter(
        (expense) => expense.status.toLowerCase() === filterStatus
      );
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter((expense) =>
        expense.description.toLowerCase().includes(term)
      );
    }

    return filtered;
  };

  const handleSearch = (e: { target: { value: string } }) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterCategory = (e: { target: { value: string } }) => {
    setFilterCategory(e.target.value);
  };

  const handleFilterStatus = (e: { target: { value: string } }) => {
    setFilterStatus(e.target.value);
  };

  const filteredExpenses = applyFilters();

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between flex-col sm:flex-row items-center p-6 gap-7 mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Lista de Vendas</h2>

        <div className="flex gap-3 flex-col sm:flex-row">
          <div className="flex flex-col">
            <label
              htmlFor="filterStatus"
              className="text-sm text-gray-300 mb-1"
            >
              Filtrar por Status
            </label>

            <select
              id="filterStatus"
              className={`w-full sm:w-48 bg-gray-700 text-white rounded-md pl-3 py-1.5 sm:py-1 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ${
                filterCategory !== "todos" ? "border-2 border-blue-500" : ""
              }`}
              value={filterStatus}
              onChange={handleFilterStatus}
              aria-label="Filtrar por status de pagamento"
            >
              <option value="todos">Todos os status</option>
              <option value="pendente">Pendente</option>
              <option value="pago">Pago</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="filterCategory"
              className="text-sm text-gray-300 mb-1"
            >
              Filtrar por Categoria
            </label>
            <select
              id="filterCategory"
              className={`w-full sm:w-48 bg-gray-700 text-white rounded-md pl-3 py-1.5 sm:py-1 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ${
                filterCategory !== "todos" ? "border-2 border-blue-500" : ""
              }`}
              value={filterCategory}
              onChange={handleFilterCategory}
              aria-label="Filtrar por categoria de despesa"
            >
              <option value="todos">Todas as categorias</option>
              <option value="variavel">Variável</option>
              <option value="fixa">Fixa</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="search" className="text-sm text-gray-300 mb-1">
              Pesquisar Descrição
            </label>
            <div className="relative">
              <input
                id="search"
                type="text"
                placeholder="Procurar por descrição..."
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
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Vencimento
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Descrição
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Categoria
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Valor
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {filteredExpenses.map((item) => (
              <motion.tr
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {item.date}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-100">
                  <span className="items-center py-7">
                    {item.description}
                    <p className="text-xs text-gray-400">{item.createdAt}</p>
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      item.category === "Fixa"
                        ? "text-cyan-400 bg-cyan-950"
                        : "text-purple-300 bg-purple-950"
                    }`}
                  >
                    {item.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(item.value)}
                </td>

                {item.status === "Pago" ? (
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-400">
                    <span className="flex items-center gap-2 py-7">
                      <CircleCheckBig size={18} />
                      <p>{item.status}</p>
                    </span>
                  </td>
                ) : (
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-amber-400">
                    <span className="flex items-center gap-2 py-7">
                      <CircleAlert size={18} />
                      <p>{item.status}</p>
                    </span>
                  </td>
                )}
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
