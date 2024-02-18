import request, { gql } from "graphql-request"


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

    const result = await request('https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clsm4fpm607gg01w80j98971x/master',query);
    return result;
}