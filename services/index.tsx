import request, { gql } from "graphql-request"

const MASTER_URL = "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clsm4fpm607gg01w80j98971x/master"
export const getCarsList = async()=>{
    const query = gql`
    query CarLists {
      carLists {
        carAvg
        createdAt
        id
        name
        price
        image {
          url
        }
        carType
        carEngine
        carBrand
      }
    }
    
    `

    const result = await request(MASTER_URL,query);
    return result;
}

export const getStoreLocations=async()=>{
  const query =gql`
  query MyQuery {
    storesLocations {
      address
    }
  }  
  `
  const result = await request(MASTER_URL,query);
  return result;
}




export const CreatBooking = async(formValue:any)=>{
  const mutationQuary = gql`
  mutation MyMutation {
    createBooking(
      data:
      {userName: "Durjoy", 
        pickUpDate: "", 
        pickUpTime: "", 
        dropOffDate: "", 
        dropOffTime: "", 
        contactNumber: "", 
        carId: {connect:
          {id: ""}}}
    ) {
      id
    }
  }
  
    `
  const result = await request(MASTER_URL,mutationQuary);
  return result;
}
