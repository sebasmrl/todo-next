import { WidgetItem } from "@/components";

export default function DashboardPage() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <WidgetItem title={"Widget"}>
        <p>Hola</p>
      </WidgetItem>
    </div>
  );
}