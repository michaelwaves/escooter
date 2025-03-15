import { getAllScooters } from "@/lib/postgres/tables/scooters";

async function Scooters() {
    const scooters = await getAllScooters()
    return (
        <div>
            {JSON.stringify(scooters)}
        </div>
    );
}

export default Scooters;