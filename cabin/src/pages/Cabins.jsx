import { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";
import CabinTable from "../features/cabins/CabinTable";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import Button from "../ui/Button";

function Cabins() {
  const [showForm, setShowForm] = useState(false); 

  useEffect(function(){
    
    getCabins().then((data) => console.log(data));

  },[]);


  return (
    <>
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p> Filter /Sort</p>

    </Row>
    <Row>
      <CabinTable />

      <Button onClick={() => setShowForm((show) => !show)}>
        Add New cabin
        </Button>
        {showForm && <CreateCabinForm />}
    </Row>
    </>
  );
}

export default Cabins;
