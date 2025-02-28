import { useState } from "react";
import BuildingCard from "./BuildingCard";

export default function BuildingGrid({ buildingData }) {
  const [buildings] = useState(
    buildingData.map((building, index) => ({
      ...building,
      id: index + 1,
    }))
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 m-4">
      {buildings.map((building) => (
        <BuildingCard key={building.id} building={building} />
      ))}
    </div>
  );
}
