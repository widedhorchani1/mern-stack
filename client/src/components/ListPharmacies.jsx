import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Card, Image } from "semantic-ui-react";

function ListPharmacies() {
  let { id } = useParams();
  const [pharmacies, setPharmacies] = useState([]);
;
  

  useEffect(() => {
    axios
      .get(`/api/myapp/Pharmacies/${id}`)
      .then((res) => setPharmacies(res.data.data))
      .catch((err) => console.dir(err));
  }, [pharmacies, id]);

  return (

    <div className="  col-span-2 bg-gray-100   ">
      <Card.Group className="flex  items-center gap-[1px] py-3 px-5  ">
        <>
        {pharmacies.map((pharmacy) => (
          <Card key={pharmacy._id}>
            <Image src={pharmacy.pharImg} wrapped ui={false} />

            <Card.Content>
              <Card.Header>{pharmacy.name}</Card.Header>
              <Card.Meta className=" flex flex-col">
                <span>Address: {pharmacy.address}</span>
                <span>{pharmacy.phone}</span>
              </Card.Meta>

              <Card.Description>
                <span>{pharmacy.email}</span>
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </>
      </Card.Group>
    </div>
  );
}

export default ListPharmacies;