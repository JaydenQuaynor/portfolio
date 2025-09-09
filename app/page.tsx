import Image from "next/image";
import Header from "./components/Header";
import Tabs from "./components/Tabs";

export default function Home() {
  return (
    <div className="mx-8 my-14">
 
       <Header />
        
      <Tabs />
      
    </div>
  );
}
