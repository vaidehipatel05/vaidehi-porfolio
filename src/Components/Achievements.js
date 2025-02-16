import Card from "react-bootstrap/Card";
import React from 'react';

// Import your custom images (update paths accordingly)
import marketingIcon from "./images/iso.jpg";
import onboardingIcon from "./images/vp_mic.png";
import achievementIcon from "./images/RnRwinners.png";
import volunteerIcon from "./images/goodera.png";
import volunteerIcon1 from "./images/samhouse.png";
import volunteerIcon3 from "./images/envi.png";
import volunteerIcon4 from "./images/uglyindia.png";

const Achievements = () => {
    const items = [
        {
            img: onboardingIcon,
            cardTitle: "Onboarding Partner, VMware Women Connecting Women, VMware Inc",
            cardSubtitle: "Active member of VMware Women Connecting Women, advocating for diversity and inclusion in workplace. Shared expertise with two female interns annually, offering support in professional growth, providing career advice, and facilitating networking opportunities.",
            cardText: "Bengaluru, India <br/> Jan 2021 – July 2023",
        },
        
        
        {
            img: achievementIcon,
            cardTitle: "Achieve Our Best - FY22 Q2 RnR Winner",
            cardSubtitle: "VMware Inc",
            cardText: "Bengaluru, India <br/> Jun 2022",
        },
        {
            img: volunteerIcon,
            cardTitle: "Volunteered to create STEM quiz cards for young girls of Central Alabama",
            cardSubtitle: "Goodera",
            cardText: "San Mateo, CA <br/> Jul 2024",
        },
        {
            img: volunteerIcon1,
            cardTitle: "Volunteered in kitchen and pantry program to prepare and package food",
            cardSubtitle: "San Mateo Samaritan House",
            cardText: "San Mateo, CA <br/> Aug 2024",
        },
        {
            img: volunteerIcon3,
            cardTitle: "Environmental Conservation with SayTrees and Rotary Club",
            
            cardSubtitle: "Volunteered for a sapling plantation event at the Sport Authority of India (SAI) in Bangalore. Alongside students from Ramagondanahalli Government School, Whitefield, we collaborated with SayTrees and Rotary Bangalore IT Corridor for this initiative, planting 100 saplings.",
            cardText: "Bangalore, India <br/> Feb 2023",
        },
        {
            img: volunteerIcon4,
            cardTitle: "The Ugly Indian (NGO)",
            cardSubtitle: "Volunteered to Beautify Urban Spaces. The activity was collective effort to contribute to society by beautifying Bengaluru with colors.",
            cardText: "Bangalore, India <br/> Dec 2021",
        },
        {
            img: marketingIcon,
            cardTitle: "Coordinator - Finance and Marketing",
            cardSubtitle: "Indian Students Organization, San Jose State University",
            cardText: "San Jose, CA <br/> Aug 2023 - Aug 2024",
        },
    ];

    return (
        <section id="achievements" className="about background-alt">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Leadership</h2>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {items.map((data, i) => (
                        <div className="col" key={i}>
                            <Card className="h-100" 
                                style={{ 
                                    background: "black", 
                                    borderColor: "whitesmoke" 
                                }}>
                                <a href={data.img} target="_blank" rel="noopener noreferrer">
                                    <Card.Img 
                                        variant="top" 
                                        src={data.img} 
                                        style={{ 
                                            height: "200px", 
                                            objectFit: "cover",
                                            cursor: "pointer" 
                                        }} 
                                    />
                                </a>
                                
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title style={{ color: "whitesmoke", fontSize: "18px" }}>
                                        {data.cardTitle}
                                    </Card.Title>
                                    <Card.Subtitle style={{ color: "whitesmoke", fontSize: "16px" }}>
                                        {data.cardSubtitle}
                                    </Card.Subtitle>
                                    
                                    <Card.Text 
                                        style={{ 
                                            color: "whitesmoke", 
                                            marginTop: "auto",
                                            paddingTop: "1rem" 
                                        }}>
                                        <div dangerouslySetInnerHTML={{ __html: data.cardText }} />
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Achievements;

