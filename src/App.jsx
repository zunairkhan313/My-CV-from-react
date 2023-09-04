import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button ,Container,Row,Col } from 'react-bootstrap';
import Image from './Comp/Image';
import Phone from './Comp/phone';
import Web from './Comp/Web';
import Email from './Comp/Email';
import In from './Comp/In';
import Loca from './Comp/Loca';
import BasicExample from './Comp/Prog';
import ScreenreaderLabelExample from './Comp/Pro';
import BasicExample1 from './Comp/Pro1';
import BasicExample2 from './Comp/Pro2';
import BasicExample3 from './Comp/Pro3';
import BasicExample4 from './Comp/Pro4';
import BasicExample5 from './Comp/Pro5';
import BasicExample6 from './Comp/Pro6';
import BasicExample7 from './Comp/Pro7';
import BasicExample8 from './Comp/Pro8';
import BasicExample9 from './Comp/Pro9';
import BasicExample10 from './Comp/Pro10';
import Git from './Comp/Git';





function App() {
  return (
    <div >
      <br />
      <Container id='main'>
      <Row>
        <Col xs lg ={4} md={4} sm={12} id='zunair'>
          <div className="App">
<br />
        <Image/>
          </div>
        <br />
        <div className="App">

        <h4 id='name'>Zunair Khan</h4>
        <p id='zunn'>Web and App Developer</p>
        </div>
        
        <div id='bord'>

        </div>
        <br />
        <div className='container'>

        <h5 id='contact'>CONTACT INFO</h5>
        <br />
    <div id='khan'>
        <Phone/>
        <p id='number'>
        +92 3310226169
        </p>
    </div>
    <div id='khan'>
        <Web/>
        <a id='link' href="https://www.w3schools.com" target="_blank">www.zunairkhan.com</a>
    </div>
    <div id='khan'>
        <Email/>
        <p id='email'><a id='email' href="mailto:zunairkhan742@gmail.com">Send me</a></p>
    </div>
    <div id='khan'>
        <In/>
        <p id='in'>
    <a id='in' href="https://www.linkedin.com/in/zunair-khan-a45808289?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bnd6dizrcRLWK1RzD1%2FhC2w%3D%3D" target='blank'>www.linkedin.com/me</a>
        </p>
    </div>
    <div id='khan'>
        <Git/>
        <p id='in'>
    <a id='Git' href="https://github.com/zunairkhan313" target='blank'>Github</a>
        </p>
    </div>
    <div id='khan'>
        <Loca/>
        <p id='loca'>
        
        Karachi,Pakistan
        </p>
    </div>
        <br />
        <h5 id='contact'>EDUCATION</h5>
        <br />
        <p id='bs'>2023-Present</p>
        <p id='BS'>Bachelors Degree in Computer <br /> Science </p>
        <p id='uni'>Federal Urdu University</p>
        <p id='bs'>2020-2022</p>
        <p id='BS'>Intermediate in Pre<br /> Engineering</p>
        <p id='uni'>Govt.Degree College Gulistan-e-Johor</p>
        <p id='bs'>2018-2019</p>
        <p id='BS'>Matriculation</p>
        <p id='uni'>Ali High School</p>
        <p id='bs'>2012-2015</p>
        <p id='BS'>Hafiz-e-Quran</p>
        <p id='uni'>Jamia Darul Uloom Madniyah</p>
        <br />
        <h5 id='contact'>LANGUAGE</h5>
        <br />
        <p id='uni'>English</p>
        <BasicExample/>
        <p id='urdu'>Urdu</p>
        <ScreenreaderLabelExample/>
        <br />
        </div>
          </Col>
        <Col xs lg={8} md={8} sm={12}>
       <div className='container'>
<br />
<h5 id='profile'>PROFILE</h5>
<p id='para'>Seeking to establish a career with a progressive organization where I gain and learn something and my abilities and performance can contribute to the organization leading to future career advancement.</p>
<br />
<h5 id='profile'>PROFESSIONAL SKILLS</h5>
<br />
<div>
  <p id='html'>HTML</p>
  <BasicExample1/>
</div>
<br />
<div>
  <p id='html'>CSS</p>
  <BasicExample2/>
</div>
<br />
<div>
  <p id='html'>JAVASCRIPT</p>
  <BasicExample3/>
</div>
<br />
<div>
  <p id='html'>BOOTSTRAP</p>
  <BasicExample4/>
</div>
<br />
<div>
  <p id='html'>FIREBASE</p>
  <BasicExample5/>
</div>
<br />
<div>
  <p id='html'>REACT.JS</p>
  <BasicExample6/>
</div>
<br />
<div>
  <p id='html'>REACT.NATIVE</p>
  <BasicExample7/>
</div>
<br />
<div>
  <p id='html'>MONGODB</p>
  <BasicExample8/>
</div>
<br />
<div>
  <p id='html'>NODE.JS</p>
  <BasicExample9/>
</div>
<br />
<div>
  <p id='html'>EXPRESS.JS</p>
  <BasicExample10/>
</div>
<br /><br />
<h5 id='profile'>EXPERIENCE</h5>
<br />
<ul>
  <li id='list'>I Have no Experience.</li><br />
  <li id='list'>I am Fresh.</li><br />
  <li id='list'>I have made different Projects , Post on Github.</li><br />
  <li id='list'>Experience in Teaching.</li>
</ul>


       </div>
        </Col>
      </Row>
   
    </Container>
    <br />
    </div>
  );
}

export default App;
