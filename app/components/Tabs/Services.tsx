import ServiceCard from "../Cards/ServiceCard";
import Button from "../Buttons/Button";

export default function Services(){


    return(

        <div className="flex flex-col">
            <ServiceCard 
            serviceNumber = "01." 
            serviceTitle = "Framer landing page Design + Dev" 
            serviceDescription = "Starts from $1,500"
            />
            <ServiceCard 
            serviceNumber = "01." 
            serviceTitle = "Framer landing page Design + Dev" 
            serviceDescription = "Starts from $1,500"
            />
            <ServiceCard 
            serviceNumber = "01." 
            serviceTitle = "Framer landing page Design + Dev" 
            serviceDescription = "Starts from $1,500"
            />
            <ServiceCard 
            serviceNumber = "01." 
            serviceTitle = "Framer landing page Design + Dev" 
            serviceDescription = "Starts from $1,500"
            />
            <div className="flex justify-center gap-4 m-5">
            <Button

            cta="Book a Call"
            backgroundColor = "#000"
            backgroundColorHover = "#fff"
            textColor = "#fff"
            
            />
            <Button

            cta="Send an Email"
            backgroundColor = "#fff"
            backgroundColorHover = "#fff"
            textColor = "#000"
            
            />


            </div>
        </div>
    )
}