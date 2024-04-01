import leadershipIcon from "./images/leadership_icon.png"; // Assuming you have a generic leadership icon image
import Card from "react-bootstrap/Card";
import React from 'react';

const Achievements = () => {
    const items = [
        {
            img: leadershipIcon,
            cardTitle: "Chief Coordinator - Marketing",
            cardSubtitle: "Indian Students Organization, San Jose State University",
            cardText: "San Jose, CA <br/> Aug 2023 - Present",
        },
        {
            img: leadershipIcon,
            cardTitle: "Onboarding Partner",
            cardSubtitle: "VMware Women Connecting Women, VMware Inc",
            cardText: "Bengaluru, India <br/> Jan 2021 – July 2023",
        },
    ];
    return (
        <section id="achievements" class="about background-alt">
            <div class="container" data-aos="fade-up">
                <div class="section-title">
                    <h2>Leadership</h2>
                </div>
                <div class="row">
                    {items.map((data, i) => (
                        <div
                            class="col-sm-6 d-flex justify-content-center"
                            key={i}
                        >
                            <Card
                                style={{
                                    width: "18rem",
                                    background: "black",
                                    padding: "20px",
                                    margin: "10px",
                                    borderColor:"whitesmoke"
                                }}
                                className="text-center"
                            >
                                <Card.Img variant="top" src={data.img} />
                                <Card.Body>
                                    <Card.Title
                                        style={{
                                            color: "whitesmoke",
                                            fontSize: "18px",
                                        }}
                                    >
                                        {data.cardTitle}
                                    </Card.Title>
                                    <Card.Subtitle
                                        style={{
                                            color: "whitesmoke",
                                            fontSize: "16px",
                                        }}
                                    >
                                        {data.cardSubtitle}
                                    </Card.Subtitle>
                                    <br></br>
                                    <Card.Text style={{ color: "whitesmoke" }}>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: data.cardText,
                                            }}
                                        ></div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <br></br>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
