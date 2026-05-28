import './index.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { GoCheckCircle } from "react-icons/go";
import { GiSkills } from "react-icons/gi";
import { MdPermIdentity } from "react-icons/md";
import { GrContact } from "react-icons/gr";
import { PiGearSixBold } from "react-icons/pi";
import { FaMeta } from "react-icons/fa6";






function App() {
  return (
    <>
      <header>
        <nav className='navbar'>
          <ul>
            <li> <a class='nav-btn' id='about2' href='#about'>About</a></li>
            <li> <a class='nav-btn' id='skills2' href='#skills'>Skills</a></li>
            <li> <a class='nav-btn' id='experience2' href='#experience'>Experience</a></li>
            <li> <a class='nav-btn' id='education2' href='#education'>Education</a></li>
            <li> <a class='nav-btn' id='projects2' href='#projects'>Projects</a></li>
            <li> <a class='nav-btn' id='contact2' href='#contact'>Contact</a></li>
          </ul>
        </nav>
      </header>
       {/* navbar ends  */}

      <main>
        <section class='hero'>
          <div class='heroText'>
          <p class='greeting'>
            <p class='name'> Sam Myers </p>  
            <p> Data   |   Design   |   Support  </p>
          </p>
          <div>
            <FaGithub class='socials'/>
            <FaLinkedin class='socials'/>
            </div>
          </div>
          <div class='heroImg'>
          <img class='photo' src="./headshot4.png"></img>
          </div>
        </section>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(246, 223, 225)" fillOpacity="1" d="M0,192L20,165.3C40,139,80,85,120,90.7C160,96,200,160,240,160C280,160,320,96,360,74.7C400,53,440,75,480,90.7C520,107,560,117,600,122.7C640,128,680,128,720,112C760,96,800,64,840,64C880,64,920,96,960,128C1000,160,1040,192,1080,176C1120,160,1160,96,1200,80C1240,64,1280,96,1320,144C1360,192,1400,256,1420,288L1440,320L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"></path></svg>

        <section id='about'>
          <h1><MdPermIdentity /> About Me </h1>
          <div class='about-text'>
          <p>
            I’m a technical support and data operations professional with a background spanning AI data workflows, SaaS support, and higher education. I enjoy building thoughtful systems, solving complex problems, and making technology feel more intuitive and human.
            My experience includes technical support, SQL-based troubleshooting, AI data labeling and quality analysis, and frontend development using HTML, CSS, JavaScript, and React. With a foundation in applied linguistics and education, I bring a strong focus on communication, clarity, and user experience to every project I work on.
            I’m currently focused on growing at the intersection of support, systems, and frontend development.<br /> <br />

          
               In my free time, I design and sew my own clothes and have participated in several fashion shows. I love experimenting with new textiles and unlocking whatever interesting qualities they may bring to the garments I make. I am also a distance and trail runner, and you can catch me every fall running the Squam Ridge Race in the White Mountains.
          </p>
          <div class='sticky'>
            <img class='sticky-img' src='./sticky.jpeg'></img>
          </div>
          </div>
        </section>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="rgb(211, 199, 218)" fillOpacity="1" d="M0,320L21.8,298.7C43.6,277,87,235,131,208C174.5,181,218,171,262,181.3C305.5,192,349,224,393,218.7C436.4,213,480,171,524,138.7C567.3,107,611,85,655,80C698.2,75,742,85,785,80C829.1,75,873,53,916,69.3C960,85,1004,139,1047,165.3C1090.9,192,1135,192,1178,202.7C1221.8,213,1265,235,1309,234.7C1352.7,235,1396,213,1418,202.7L1440,192L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path>
</svg>

        <section id='skills'>
          <h1><GiSkills /> Skills</h1>
          <p>
            <ul>
            <li><strong>Client Support:</strong> I am passionate about building and maintaining strong client relationships through thoughtful, compassionate, and accessible support.</li>

            <li><strong>IT Troubleshooting:</strong> In addition to working in fast-paced application support environments, I have spent years developing my technical troubleshooting skills through teaching digital literacy and educational technology to ESL students.</li>

            <li><strong>SQL:</strong> I have used SQL to diagnose client issues, retrieve and analyze customer data, and build dashboards to better understand user behavior and operational trends. I genuinely enjoy query building and continuously expanding my SQL knowledge.</li>

            <li><strong>HTML + CSS:</strong> Over the last several years, I have independently developed my frontend development skills with a focus on building clean, responsive, and accessible user interfaces. I am comfortable using Flexbox, Grid, and media queries to create adaptable layouts across screen sizes.</li>

            <li><strong>JavaScript:</strong> Over the last several years, I have independently studied JavaScript and developed experience with event handling, DOM manipulation, API interaction, and core data structures.</li>

            <li><strong>Technical Writing:</strong> While working at Hustle, I contributed to user-facing help documentation and support resources. This experience strengthened my ability to communicate technical concepts clearly and translate complex workflows into accessible language.</li>

            <li><strong>Data Analysis:</strong> My background in data analysis began during my MA studies in Applied Linguistics, where I worked extensively with research datasets, pattern analysis, and data-driven problem solving. Since then, I have continued building experience through AI data operations work using SQL, Google Sheets, Excel, and Periscope dashboards to analyze trends, troubleshoot issues, and support operational workflows.</li>

           <li><strong>Spanish Proficiency:</strong> Through years spent living in Spanish-speaking countries alongside a BA in Spanish, I have developed high-intermediate proficiency in spoken and written Spanish.</li>
          </ul>
          </p>
        </section>

        <section id='experience'>
          <h1> <GoCheckCircle /> Experience</h1>
          <ul>
            <li><div class='job'><img class='icons' src='./hustle_texting_logo.jpeg'></img><div class='job-blurb'><strong> Support Specialist - Hustle</strong>
            <p>Hustle is a peer-to-peer texting application. As a support specialist I diagnosed and resolved user technical issues, wrote and edited help articles, and used SQL to analyze data and deliver insights for problem solving. I enjoy working in support because I feel I have a natural ability to break down difficult concepts and explain them to users with empathy.</p></div></div></li>
            <li><div class='job'><img class='icons' src='./meta_logo.jpeg'></img><div class='job-blurb'><strong> Data Labeling Analyst - Meta</strong>
            <p>At Meta, I utilize my critical thinking skills to analyze large data sets and provide clear annotation. I regularly provide feedback to team leads on ways to improve guidlines and project operations in order to promote consistency across projects.</p></div></div></li>
            <li><div class='job'><img class='icons' src='./gsu-icon.jpeg'></img><div class='job-blurb'><strong> Lecturer + Curriculum Designer - Georgia State University</strong>
            <p>In the Intensive English Program at Georgia State, I worked as a lecturer and curiculum designer. I designed and taught courses, modified curricula, mentored students and conducted meta-linguistic research. My time working as an educator, especially to ESL students, provided me with a keen ability to communicate concepts in the most accessible way.</p></div></div></li>
          </ul>

        </section>

        <section id='education'>
          <h1> <MdCastForEducation /> Education
</h1>
          <ul>
            <li>MA in Applied Linguistics - Georgia State University</li>
            <li>BA in Modern Language - Spanish - University of MA Lowell</li>
          </ul>
        </section>

        <section id='projects'>
          <h1><PiGearSixBold /> Projects (image carousel)</h1>
          <ul>
            <li><strong>Rock, Paper, Scissors</strong></li>
            <li><strong>BattleShip</strong></li>
            <li><strong>Image Carousel</strong></li>
            <li><strong>Tic Tac Toe</strong></li>
            <li><strong>Weather App</strong></li>
          </ul>
          
        </section>
        <section id='contact'>
          <h1><GrContact /> Contact</h1>
          <form action="https://formspree.io/f/mqejnaoy" method="POST">
          <label for="fname">First Name</label> <br />
          <input type="text" id='fname' name='fname'></input><br />
          <label for="lname">Last Name</label> <br />
          <input type="text" id='lname' name='lname'></input><br />
          <label for="email">Email</label> <br />
          <input type="text" id='email' name='email'></input><br />
          <label for="message">Message</label> <br />
          <textarea id='message' name='message' rows='5' cols='50'></textarea><br />
          <button type="submit">Send</button>
          </form>

        </section>
      </main>
      <footer>
          <div class='foot'>
          Thanks for visiting.  <br />

          Data | Design | Support  <br />

          GitHub • LinkedIn • Resume • Contact  <br />

          © 2026 Sam Myers  <br />
          Built with React + Vite  <br />
        </div>
        <div class='quote'>
        "All that you touch You Change. All that you Change Changes you" <br />
        -Octavia Butler
        </div>
      </footer>
    </>
  );
}

export default App;