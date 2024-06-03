import HealthServices from "@/components/HealthServices/HealthServices";
import HealthStationTable from "@/components/HealthStationTable/HealthStationTable";

export default function Home() {
  return (
    <div>
      <HealthServices/>
      <HealthStationTable/>
    </div>
  );
}
