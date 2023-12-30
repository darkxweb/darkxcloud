import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    I am Khijendra a <span>UI UX Designer</span>
                  </h2>
                  <p>
                  Hi! I'm Khijendra Dighore, a UI/UX Designer with a strong passion and dedication to my work. With 6 months of valuable experience gained through an enriching internship, I have acquired the skills and knowledge necessary to contribute to the success of your project. I thoroughly enjoy every step of the design process, from discussions and collaboration to the final implementation.


                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Website : <span>www.darkxweb.vercel.app</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>khijendradighore19357@gmail.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree : <span>B.Voc(Software Development)</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone : <span>+91 7666892394</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City : <span>Bramhapuri</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Freelance : <span>Available</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a
                        href="/assets/resume.pdf"
                        target="_target"
                        className="btn"
                      >
                        Download CV
                      </a>
                      <a
                        href="#contact"
                        data-section-index={0}
                        className="btn hire-me"
                      >
                        Hire Me
                      </a>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>User Research and Empathy</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">&#x2714;</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Information Architecture and Wireframing</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">&#x2714;</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Visual Design and Aesthetics</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">&#x2714;</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Prototyping and Interaction Design</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">&#x2714;</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        {/* <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                           <i className="fa fa-calendar" /> Primary School
                          </h6>
                          <h4 className="timeline-title">
                            SSC - 2019 Batch Passed Out
                          </h4>
                          <p className="timeline-text">
                          Aditya Birla Public School, Awarpur<br/>Percentage - 69.80
                          </p>
                        </div> */}
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> Secondary School 
                          </h6>
                          <h4 className="timeline-title">
                          Shri Shivaji English School & Junior College, Nandafata
                          </h4>
                          <p className="timeline-text">
                            2019 - 2021<br/><strong>HSC - General Science</strong><br/>Grade - 69.20%
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> Graduation
                          </h6>
                          <h4 className="timeline-title">
                            St. Vincent Pallotti College of Engineering & Technology, Nagpur
                          </h4>
                          <p className="timeline-text">
                            2021 - Present<br/><strong>Bachelor of Vocation - Software Development</strong><br/>CGPA - 8.40 [4th Sem]
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> Internship [On-site] - 6 mo.
                          </h6>
                          <h4 className="timeline-title">UI UX Designer</h4>
                          <p className="timeline-text">
                            <strong>Company Name</strong> - Dataventics Software Solutions Pvt Ltd<br/><strong>Skills</strong> - UI UX Designing, Design Thinking, User Research, Creative Ideation, Wireframing, Prototyping, Product Design...<br/><strong>Tools</strong> - Figma, Framer AI, Adobe XD, Adobe Photoshop, Canva, Pacdora AI...    
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> Internship [Remote] - 1 mo.
                          </h6>
                          <h4 className="timeline-title">Web Developer</h4>
                          <p className="timeline-text">
                            <strong>Company Name</strong> - Oasis Infobyte/ InternPe/ Asterisc Technocrat CodeClause<br/><strong>Skills</strong> - Web Development...&nbsp;&nbsp;&nbsp;&nbsp;<strong>Tools</strong> - VSCode
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        {/* <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2020 to Present
                          </h6>
                          <h4 className="timeline-title">Wordpress</h4>
                          <p className="timeline-text">
                            Since 2020 I started to learn Wordpress. I can
                            install, Customize, &amp; fix bug on wordpress.{" "}
                          </p>
                        </div> */}
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
