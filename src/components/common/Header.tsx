import { Calendar } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  title: string;
  children?: React.ReactNode;
  showTimeRange?: boolean;
}

export const Header = ({
  title,
  children,
  showTimeRange = true,
}: HeaderProps) => {
  const [selectedTimeRange, setSelectedTimeRange] = useState("Este Ano");

  return (
    <header className="bg-gray-800 text-white p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 max-w-7xl mx-auto">
        <h1 className="text-xl sm:text-2xl font-bold truncate">{title}</h1>

        <div className="flex gap-3 flex-col-reverse justify-end">
          {children}

          {showTimeRange && (
            <div className="relative w-full sm:w-auto">
              <Calendar className="absolute left-3 top-4 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
              <select
                className="w-full sm:w-48 bg-gray-700 text-white rounded-md pl-10 pr-3 py-1.5 sm:py-1 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                value={selectedTimeRange}
                onChange={(e) => setSelectedTimeRange(e.target.value)}
                aria-label="Selecionar intervalo de tempo"
              >
                <option value="Última Semana">Última Semana</option>
                <option value="Este Mês">Este Mês</option>
                <option value="Últimos 3 Meses">Últimos 3 Meses</option>
                <option value="Este Ano">Este Ano</option>
              </select>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
