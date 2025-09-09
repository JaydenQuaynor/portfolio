import ClientCard from "../Cards/ClientCard";



export default function Clients(){


    return(

        <div className="">
            <ClientCard
            testimonial = {`The Basics Template is awesome! It's user-friendly & visually appealing. I was able to customize it effortlessly, which saved me so much time. Highly recommend it to anyone looking for simplicity and efficiency in their projects!`} 
            logoPfp = "/images/basepfp.png" 
            clientName  = "Emily Johnson"  
            companyName = "@framer"
            companyUrl = "#"
            />
            <ClientCard
            testimonial = {`I absolutely love the Basics Template! It’s perfect for organizing my tasks and projects. The layout is clean, making it easy to navigate. I appreciate the attention to detail. This template has become an essential tool in my daily routine!`} 
            logoPfp = "/images/headshot.jpg" 
            clientName  = "Michael Smith"  
            companyName = "@contra"
            companyUrl = "#"
            />
 

        </div>
    )
}