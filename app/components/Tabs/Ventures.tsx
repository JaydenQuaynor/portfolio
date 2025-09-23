import InfoCard from "../Cards/InfoCard";

export default function Ventures(){


    return(

        <div className="flex flex-col gap-6 mt-4">

            <InfoCard
              logo="/images/logos/Screenshot 2025-09-09 at 12-46-46 Bridgeport Overhead Door Garage Door Repair & Installation in CT.png"
              logoAlt="Bptoverhead site example"
              title="BPT Overhead Doors"
              description="Local garage door repairs and installs, with clear service pages."
              buttonText="Visit Site"
              buttonUrl="https://bptoverhead.com/"
              mainImage="/images/sitepics/BPTSP.png"
              mainImageAlt="Desktop preview"
              status="live"
            />
            <InfoCard
              logo="/images/logos/casaLogo.png"
              logoAlt="Casa Taino Modualr site example"
              title="Casa Taino Modular"
              description="Framer site for modular homes—clean showcase and lead capture."
              buttonText="View Design"
              buttonUrl="https://flowing-follow-434889.framer.app/"
              mainImage="/images/sitepics/CasatainoSP.png"
              mainImageAlt="Desktop preview"
              status="inactive"
            />
            <InfoCard
              logo="/images/logos/otrlogo.png"
              logoAlt="Otr Health Club site example"
              title="(OTR) On the Rise Health Club"
              description="Fitness club site with classes, memberships, and quick contact."
              buttonText="Visit Site"
              buttonUrl="https://otrhealthclub.com/"
              mainImage="/images/sitepics/OtrSP.png"
              mainImageAlt="Desktop preview"
              status="live"
            />
            <InfoCard
              logo="/images/logos/regialogo.png"
              logoAlt="FlyMike site example"
              title="FlyMike Training Website"
              description="Boxing training landing page with offers and booking CTA."
              buttonText="View Design"
              buttonUrl="https://orange-today-842922.framer.app/"
              mainImage="/images/sitepics/NVIDIA_Overlay_ckshlfRAkh.png"
              mainImageAlt="Desktop preview"
              status="design"
            />

        </div>
    )
}