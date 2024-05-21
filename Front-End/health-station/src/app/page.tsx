import Image from "next/image";
import styles from "./page.module.css";
import { Button } from 'primereact/button';                             
import HealthServices from "@/components/HealthServices/HealthServices";
import HealthStationTable from "@/components/HealthStationTable/HealthStationTable";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

export default function Home() {
  return (
    <div>
      <HealthServices/>
      <HealthStationTable/>
    </div>
  );
}
