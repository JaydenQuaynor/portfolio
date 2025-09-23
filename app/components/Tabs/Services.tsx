import ServiceCard from "../Cards/ServiceCard";
import Button from "../Buttons/Button";

export default function Services(){


    return(

        <div className="flex flex-col">
                <ServiceCard 
                  serviceNumber="01." 
                  serviceTitle="Custom Website Design + Development" 
                  serviceDescription="Tailored sites that look sharp and drive conversions" 
                />
                    
                <ServiceCard 
                  serviceNumber="02." 
                  serviceTitle="AI Automations" 
                  serviceDescription="Automated workflows to save time and scale faster" 
                />
                    
                <ServiceCard 
                  serviceNumber="03." 
                  serviceTitle="Funnel Buildout" 
                  serviceDescription="High-converting funnels built to maximize sales" 
                />
                    
                <ServiceCard 
                  serviceNumber="04." 
                  serviceTitle="Content Creation" 
                  serviceDescription="Engaging content that builds brand and trust" 
                />
            <div className="flex justify-center gap-4 m-5">
            
          
            <a className="underline" href="mailto:aydenQuaynor@gmail.com">Send me an email : JaydenQuaynor@gmail.com</a>


            </div>
        </div>
    )
}