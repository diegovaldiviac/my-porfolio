import Box from "../components/Box";
import { H2, H4 } from "../components/Headings";
import TextItem from "../components/TextItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faJava, faNodeJs, faPython, faLinux, faDev, faPhp,
    faDocker, faReact, faGithubSquare, faJira, faConfluence, faAws, 
    faStackOverflow} from '@fortawesome/free-brands-svg-icons';
import { faCode, faCloud } from '@fortawesome/free-solid-svg-icons';


function SkillCategory(props: { title: string; skills: string[] }) {
  const skillItems = props.skills.map((skill, index) => (
    <TextItem key={index} title={skill} />
  ));

  return (
    <div className="pb-3 pt-1">
      <H4>{props.title}</H4>
      <div>{skillItems}</div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <div className="skills-container">
        <H2>{"Skills"}</H2>
        
        <div className="divide-y">
            <H4>{"Programming Languages"}</H4>
            <div className="grid-skills" > 
                <div className="skill-card html">
                    <FontAwesomeIcon icon={faHtml5} style={{ fontSize: '40px' }}/>
                    <p>HTML</p>     
                </div>
                <div className="skill-card css">
                    <FontAwesomeIcon icon={faCss3Alt} style={{ fontSize: '40px' }}/>
                    <p>CSS</p>
                    
                </div>
                <div className="skill-card js">
                    <FontAwesomeIcon icon={faJsSquare} style={{ fontSize: '40px' }}/>
                    <p>JavaScript</p>
                </div>
                <div className="skill-card node">
                    <FontAwesomeIcon icon={faNodeJs} style={{ fontSize: '40px' }}/>
                    <p>Node</p>
                </div>
                <div className="skill-card python">
                    <FontAwesomeIcon icon={faPython} style={{ fontSize: '40px' }}/>
                    <p>Python</p>
                </div>
                <div className="skill-card react">
                    <FontAwesomeIcon icon={faJava} style={{ fontSize: '40px' }}/>
                    <p>Java</p>
                </div>
                <div className="skill-card js">
                    <FontAwesomeIcon icon={faStackOverflow} style={{ fontSize: '40px' }}/>
                    <p>C#</p>
                </div>
                <div className="skill-card react">
                    <FontAwesomeIcon icon={faPhp} style={{ fontSize: '40px' }}/>
                    <p>PHP</p>
                </div>
            </div>
        </div>
        <div className="divide-y">
            <H4>{ "Tools / Frameworks" }</H4>
            <div className="grid-skills"> 
                    <div className="skill-card css">
                        <FontAwesomeIcon icon={faDocker} style={{ fontSize: '40px' }}/>
                        <p>Docker</p>     
                    </div>
                    <div className="skill-card js">
                        <FontAwesomeIcon icon={faGithubSquare} style={{ fontSize: '40px' }}/>
                        <p>GitHub</p>
                        
                    </div>
                    <div className="skill-card react">
                        <FontAwesomeIcon icon={faJira} style={{ fontSize: '40px' }}/>
                        <p>Jira</p>
                    </div>
                    <div className="skill-card python">
                        <FontAwesomeIcon icon={faConfluence} style={{ fontSize: '40px' }}/>
                        <p>Confluence</p>
                    </div>
                    <div className="skill-card js">
                        <FontAwesomeIcon icon={faCode} style={{ fontSize: '40px' }}/>
                        <p>Postman</p>
                    </div>
                    <div className="skill-card react">
                        <FontAwesomeIcon icon={faReact} style={{ fontSize: '40px' }}/>
                        <p>React</p>
                    </div>
                    <div className="skill-card html">
                        <FontAwesomeIcon icon={faAws} style={{ fontSize: '40px' }}/>
                        <p>AWS</p>
                    </div>
                    <div className="skill-card react">
                        <FontAwesomeIcon icon={faLinux} style={{ fontSize: '40px' }}/>
                        <p>Linux</p>
                    </div>
                </div>
            </div>
      </div>
  );
}