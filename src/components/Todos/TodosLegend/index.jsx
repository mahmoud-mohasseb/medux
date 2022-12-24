import { tasksColors } from "../../../constants/colors";
import LegendItem from "../../../UI/Legend/LegendItem";
import Legend from "../../../UI/Legend";

export default function TodosLegend() {
  return (
    <Legend>
      {tasksColors.map(({ color, cat }) => (
        <LegendItem key={cat} color={color} legend={cat} />
      ))}
    </Legend>
  );
}
