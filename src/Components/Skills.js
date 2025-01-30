import React from 'react';
const Skills = () => {

  const skills = [
    "Python", "Java", "SQL",
    "PostgreSQL", "MySQL", "Neo4j", "NoSQL",
    "Hadoop", "Apache Spark", "ETL", "Apache Airflow", "TensorFlow", "PyTorch", "Sklearn", "Hugging Face Transformer", "Large Language Models", 
    "NLP", "CNN", "Transfer Learning", "GANs", "Retrieval-Augmented Generation", "LangChain", "AutoEncoders", "CI/CD pipeline setup", "automated testing", "containerization with Docker", "Kubernetes",
    "Data Analysis", "Machine Learning", "Large Language Models", "Natural Language Processing", "Visualization and Modeling", "Big Data Technologies",
    "MS Excel", "Tableau", "Power BI", "Git", "Docker", "AWS (Glue ETL, SageMaker, ECR, Lambda, S3, RDS, Athena, CloudWatch, Amplify)", "JIRA" ,"BitBucket", "Rancher Desktop",
  ];
  return (
    <section id="skills" class="skills section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Skills</h2>
        </div>
        <div>
          <ul>
              {
                skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))
              }
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Skills;