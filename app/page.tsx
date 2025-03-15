import Image from "next/image";
import Scooters from "./Scooters";

export default function Home() {
  return (
    <div>
      <h1>Scooter finder 🛴</h1>
      <p>Find the lowest cost electric scooter</p>
      <div>
        <Scooters />
      </div>
    </div>
  );
}
