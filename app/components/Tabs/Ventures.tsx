import InfoCard from "../Cards/InfoCard";

export default function Ventures(){


    return(

        <div className="flex flex-col gap-6 mt-4">

            <InfoCard
              logo="/images/logos/Screenshot 2025-09-09 at 12-46-46 Bridgeport Overhead Door Garage Door Repair & Installation in CT.png"
              logoAlt="Bptoverhead site example"
              title="BPT Overhead Doors"
              description="Designed a professional website with dedicated service pages, simple navigation, and clear calls-to-action to highlight their expertise and attract local customers."
              buttonText="Visit Site"
              buttonUrl="https://bptoverhead.com/"
              mainImage="/images/sitepics/BPTSP.png"
              mainImageAlt="Desktop preview"
            />
            <InfoCard
              logo="/images/logos/casaLogo.png"
              logoAlt="Casa Taino Modualr site example"
              title="Casa Taino Modular"
              description="Create stunning Framer websites in minutes with our Clean & Responsive Templates, and establish an online presence effortlessly."
              buttonText="Check out other Projects"
              buttonUrl="https://example.com"
              mainImage="/images/sitepics/CasatainoSP.png"
              mainImageAlt="Desktop preview"
            />
            <InfoCard
              logo="/images/logos/otrlogo.png"
              logoAlt="Otr Health Club site example"
              title="FramerIt"
              description="Create stunning Framer websites in minutes with our Clean & Responsive Templates, and establish an online presence effortlessly."
              buttonText="Visit Site"
              buttonUrl="https://otrhealthclub.com/"
              mainImage="/images/sitepics/OtrSP.png"
              mainImageAlt="Desktop preview"
            />
            <InfoCard
              logo="/images/logos/regialogo.png"
              logoAlt="Regia site example"
              title="RegiaHQ Content Agency"
              description="Create stunning Framer websites in minutes with our Clean & Responsive Templates, and establish an online presence effortlessly."
              buttonText="Visit Site"
              buttonUrl="https://example.com"
              mainImage="/images/sitepics/RegiaSP.png"
              mainImageAlt="Desktop preview"
            />

        </div>
    )
}