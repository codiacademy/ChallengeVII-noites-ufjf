import { Calendar } from "lucide-react";
import { TimeRange } from "../../types/types";

interface TimeRangeSelectProps {
  selectedTimeRange: TimeRange;
  onTimeRangeChange: (timeRange: TimeRange) => void;
}

export const TimeRangeSelect = ({
  selectedTimeRange,
  onTimeRangeChange,
}: TimeRangeSelectProps) => {
  return (
    <div className="relative w-full sm:w-auto">
      <Calendar className="absolute left-3 top-4 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
      <select
        className="w-full sm:w-48 sm:h-10 bg-gray-700 text-white rounded-md pl-10 pr-3 py-1.5 sm:py-1 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        value={selectedTimeRange}
        onChange={(e) => onTimeRangeChange(e.target.value as TimeRange)}
        aria-label="Selecionar intervalo de tempo"
      >
        <option value="lastWeek">Última Semana</option>
        <option value="thisMonth">Este Mês</option>
        <option value="lastThreeMonths">Últimos 3 Meses</option>
        <option value="thisYear">Este Ano</option>
        <option value="all">Todo o período</option>
      </select>
    </div>
  );
};
