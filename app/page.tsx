'use client'
import CarFiltersOption from "@/components/Home/CarFiltersOption";
import CarsList from "@/components/Home/CarsList";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { getCarsList } from "@/services";
import { useEffect, useState } from "react";


export default function Home() {

  const [carsList,setCarsList] = useState<any>([])
  const [carsOrgList,setCarsOrgList] = useState<any>([])


  useEffect(()=>{

    getCarsList_();
  },[])
  const getCarsList_= async()=>{
    const result: any = await getCarsList();
    setCarsList(result?.carLists)
    setCarsOrgList(result?.carLists)
  }

  const filterCarList=(brand:string)=>{
    const filteList = carsOrgList.filter((item:any)=>
    item.carBrand==brand);

    setCarsList(filteList);
  }

  const orderCarList=(order:any)=>{
    const sortedData = [...carsOrgList].sort((a,b)=>
    order==-1? a.price - b.price:b.price - a.price)
    setCarsList(sortedData)
  }

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero/>
      <SearchInput/>
      <CarFiltersOption carsList={carsOrgList}
      orderCarList={(value:string)=>orderCarList(value)}
      setBrand={(value:string)=>filterCarList(value)}
      
      /> 
      
      <CarsList carsList={carsList}/>
      
    </div>
  );
}
