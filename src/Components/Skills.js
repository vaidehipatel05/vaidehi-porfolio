import React from 'react';
const Skills = () => {

  const skills = [
    "Python", "Java", "SQL",
    "PostgreSQL", "MySQL", "Neo4j", "NoSQL", "Snowflake", "MongoDB", "Cassandra",
    "Big Data", "Hadoop", "AWS", "Apache Spark", "ETL", "Apache Airflow",
    "Data Analysis", "Machine Learning", "Large Language Models", "Natural Language Processing", "Visualization and Modeling", "Transfer Learning", "Big Data Technologies",
    "MS Excel", "Tableau", "Power BI", "Git", "Docker", "AWS Cloud (ECR, S3, Glue, Lambda, Athena, SageMaker)", "JIRA" ,"BitBucket", "Rancher Desktop",
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