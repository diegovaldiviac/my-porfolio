import { H2, H4 } from "../components/Headings";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJava, faNodeJs, faPython, faLinux, faPhp,
    faDocker, faReact, faGithubSquare, faJira, faConfluence, faAws, faSymfony, faWatchmanMonitoring,
    faStackOverflow} from '@fortawesome/free-brands-svg-icons';
import { faCode, faTerminal, faDatabase, faFish, faGem } from '@fortawesome/free-solid-svg-icons';


export default function SkillsSection() {
  return (
    <div className="section-container">
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
                <div className="skill-card node">
                    <FontAwesomeIcon icon={faNodeJs} style={{ fontSize: '40px' }}/>
                    <p>Node</p>
                </div>
                <div className="skill-card node">
                    <FontAwesomeIcon icon={faFish} style={{ fontSize: '40px' }}/>
                    <p>SQL</p>
                </div>
                <div className="skill-card react">
                    <FontAwesomeIcon icon={faJava} style={{ fontSize: '40px' }}/>
                    <p>Java</p>
                </div>
                <div className="skill-card python">
                    <FontAwesomeIcon icon={faPython} style={{ fontSize: '40px' }}/>
                    <p>Python</p>
                </div>
                <div className="skill-card js">
                    <FontAwesomeIcon icon={faStackOverflow} style={{ fontSize: '40px' }}/>
                    <p>C#</p>
                </div>
                <div className="skill-card react">
                    <FontAwesomeIcon icon={faPhp} style={{ fontSize: '40px' }}/>
                    <p>PHP</p>
                </div>
                <div className="skill-card html">
                    <FontAwesomeIcon icon={faGem} style={{ fontSize: '40px' }}/>
                    <p>Ruby</p>
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
                    <div className="skill-card html">
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
                    <div className="skill-card js">
                        <FontAwesomeIcon icon={faLinux} style={{ fontSize: '40px' }}/>
                        <p>Linux</p>
                    </div>
                    <div className="skill-card react">
                    <FontAwesomeIcon icon={faTerminal} style={{ fontSize: '40px' }}/>
                    <p>Terraform</p>
                    </div>
                    <div className="skill-card node">
                    <FontAwesomeIcon icon={faDatabase} style={{ fontSize: '40px' }}/>
                    <p>PostgreSQL</p>
                    </div>
                    <div className="skill-card js">
                    <FontAwesomeIcon icon={faSymfony} style={{ fontSize: '40px' }}/>
                    <p>Symfony</p>
                    </div>
                    <div className="skill-card html">
                    <FontAwesomeIcon icon={faWatchmanMonitoring} style={{ fontSize: '40px' }}/>
                    <p>Grafana</p>
                    </div>
                </div>
            </div>
      </div>
  );
}