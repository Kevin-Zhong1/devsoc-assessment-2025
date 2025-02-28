import BuildingGrid from "./components/BuildingGrid"
import FilterButton from "./components/FilterButton"
import Header from "./components/Header"
import Searchbar from "./components/Searchbar"
import buildingJson from "./data/data.json"

function App() {

  return ( 
    <>
      <Header/>
      <div className="mx-auto p-8 flex space-x-4 justify-between">
        <FilterButton label={"Filters"}></FilterButton>
          <Searchbar></Searchbar>
        <FilterButton label={"Sort"}></FilterButton>
      </div>
      <BuildingGrid buildingData={buildingJson}/>
  </>
  )
}

export default App
