import React from 'react';
import cn from 'classnames';


// TODO: accessibility

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: {
        name: 'home',
        scrollTo: null
      },
      showHamburger: false,
      showDrawer: false
    };
  }

  componentDidMount() {
    const width = window.innerWidth;
    if (width > 750) {
      this.setState({ showDrawer: false });
    } else {
      this.setState({
        showDrawer: false,
        showHamburger: true
      });
    }

    window.addEventListener('resize', () => {
      const width = window.innerWidth;
      const {
        showHamburger
      } = this.state;

      if (width > 750 && showHamburger) {
        this.setState({
          showDrawer: false,
          showHamburger: false
        });
      } else if (width < 750 && !showHamburger) {
        this.setState({
          showHamburger: true
        });
      }
    });
  }

  handleNav = (target) => {
    this.setState({ page: target });
  }

  render() {
    const templateStyle = {
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'Roboto, sans-serif'
    };

    const {
      page
    } = this.state;

    const {
      name
    } = page;

    let content = <div />;

    switch (name) {
      case 'home':
        content = <Home onNav={this.handleNav} />
        break;
      case 'practice':
        content = <PracticeAreas />;
        break;
      case 'services':
        content = <Services />;
        break;
      case 'classes':
        content = <Classes />;
        break;
      case 'resources':
        content = <Resources />;
        break;
      case 'docs':
        content = <ClientDocuments />;
        break;
      case 'fees':
        content = <Fees />;
        break;
    }

    return (
      <div
        style={templateStyle}
      >
        <Header
          showHamburger={this.state.showHamburger}
          active={name}
          onNav={this.handleNav}
        />
        <Body
          page={page}
        >
          {content}
        </Body>
        <Footer
          onNav={this.handleNav}
        />
      </div>
    );
  }
}

class Body extends React.Component {

  componentDidMount() {
    const {
      page
    } = this.props;

    if (page.scrollTo) {
      setTimeout(() => document.getElementById('top').scrollIntoView(), 0);
    }
  }

  componentDidUpdate() {
    const {
      page
    } = this.props;

    if (page.scrollTo !== null || page.scrollTo !== undefined) {
      if (typeof page.scrollTo === 'string') {
        setTimeout(() => document.getElementById(page.scrollTo).scrollIntoView({ behavior: "smooth" }), 0);
      }

      if (typeof page.scrollTo === 'number') {
        setTimeout(() => window.scrollTo(0, page.scrollTo), 0);
      }
    }
  }

  render() {
    const {
      page
    } = this.props;

    const bodyStyle = {
      minHeight: `calc(100vh - 125px)`
    };

    const n = page.name;
    const classes = cn({
      'moreServices': n === 'services',
      'moreResources': n === 'resources',
      'moreDocuments': n === 'docs',
      'moreFees': n === 'fees',
      'moreClasses': n === 'classes',
      'morePractice': n === 'practice'
    });

    return (
      <div
        className={classes}
        style={bodyStyle}
      >
        <div
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

const Header = (props) => {
  const inlineStyle = {
    position: 'fixed',
    left: 0,
    top: 0,
    height: 50,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#EDEAE5',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    zIndex: 10,
  };

  const menuStyle = {
    cursor: 'pointer'
  }

  const {
    active,
    onNav,
    showHamburger
  } = props;

  const renderHamburger = () => {
    return (
      <div className='header-nav header-hamburger' style={{marginLeft: 20}}>
        <span>
          <svg width="34" height="34" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path fill="#000000" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" /></svg>
        </span>
      </div>
    );
  }

  console.log(showHamburger)

  if (showHamburger) {
    inlineStyle.justifyContent = 'space-between';
    return (
      <div
        style={inlineStyle}
      >
        {renderHamburger()}
        <div
          onClick={() => onNav({ name: 'home', scrollTo: 'top' })}
          className={cn('navMenu', 'signature', 'link', { 'navMenu--active': active === 'home' })}
          style={{...menuStyle, marginRight: 20 }}
        >
          Stephanie Smith, Psy.D.
        </div>
      </div>
    );
  }

  return (
    <div
      style={inlineStyle}
    >
      <div
        onClick={() => onNav({ name: 'home', scrollTo: 'top' })}
        className={cn('navMenu', 'signature', 'link', { 'navMenu--active': active === 'home' })}
        style={menuStyle}
      >
        Stephanie Smith, Psy.D.
      </div>
      <div
        onClick={() => onNav({ name: 'home', scrollTo: 'meet' })}
        className={cn('navMenu', 'link', { 'navMenu--active': active === 'help' })}
        style={menuStyle}
      >
        Meet Dr. Smith
      </div>
      <div
        onClick={() => onNav({ name: 'home', scrollTo: 'practice' })}
        className={cn('navMenu', 'link', { 'navMenu--active': active === 'help' })}
        style={menuStyle}
      >
        Practice Areas
      </div>
      <div
        onClick={() => onNav({ name: 'home', scrollTo: 'services' })}
        className={cn('navMenu', 'link', { 'navMenu--active': active === 'services' })}
        style={menuStyle}
      >
        Services
      </div>
      <div
        onClick={() => onNav({ name: 'home', scrollTo: 'classes' })}
        className={cn('navMenu', 'link', { 'navMenu--active': active === 'classes' })}
        style={menuStyle}
      >
        Classes
      </div>
      <div
        onClick={() => onNav({ name: 'home', scrollTo: 'contact' })}
        className={cn('navMenu', 'link', { 'navMenu--active': active === 'contact' })}
        style={menuStyle}
      >
        Contact
      </div>
    </div>
  );
};

const Footer = (props) => {
  const {
    onNav
  } = props;
  return (
    <div
      className='footer'
    >
      <div>
        <div
        >
          Stephanie Smith, Psy.D.
        </div>
        <div        >
          Alhambra Blvd
        </div>
        <div
        >
          (916) 555-5555
        </div>
      </div>
      <div>
        <span className='link'
          onClick={() => onNav({ name: 'resources', scrollTo: 0 })}
        >Additional Resources</span>
        <span className='link'
          onClick={() => onNav({ name: 'docs', scrollTo: 0 })}>Client Documents</span>
        <span className='link'
          onClick={() => onNav({ name: 'fees', scrollTo: 0 })}
        >Fees for Services</span>
      </div>
    </div>
  );
};


const Home = (props) => {
  const {
    onNav
  } = props;
  return (
    <div>
      <div className='backdrop'>
        <div className='hero' />
      </div>
      <div className='content' id='top'>
        <div className='hero-content'>
          <blockquote>
            <h1>
              "And the day came when the risk to remain tight as a bud was more painful than the risk it took to blossom."
              </h1>
            <footer>- Anais Nin
              </footer>
          </blockquote>
        </div>
        <div className='meet card-2' id='meet'>
          <div className='profile'>
            <img className='profilePhoto card-1' src='res/profile.jpg' />
          </div>
          <div className='bio'>
            <h2 className='bioTitle'>
              Meet Dr. Stephanie Smith
              </h2>
            <h3 className='bioSubtitle'>
              Clinical Psychologist
              </h3>
            {meetSteph}
          </div>
        </div>
        <div className='practiceAreas' id='practice'>
          <h2>Practice Areas</h2>
          <div className='areas'>
            <div className='area card-1'>
              <div className='areaOverlay' />
              <div className='areaImage areaEatingConcerns' />
              <div className='areaText'>
                <div>
                  Eating<br /> Concerns
                  </div>
              </div>
            </div>
            <div className='area card-1'>
              <div className='areaOverlay' />
              <div className='areaImage areaLifestyle' />
              <div className='areaText'>
                <div>
                  Lifestyle<br /> Changes
                  </div>
              </div>
            </div>
            <div className='area card-1'>
              <div className='areaOverlay' />
              <div className='areaImage areaTransitions' />
              <div className='areaText'>
                <div>
                  Life<br /> Transitions
                  </div>
              </div>
            </div>
            <div className='area card-1'>
              <div className='areaOverlay' />
              <div className='areaImage areaRelationships' />
              <div className='areaText'>
                <div>
                  Relationship<br /> Challenges
                  </div>
              </div>
            </div>
            <div className='area card-1'>
              <div className='areaOverlay' />
              <div className='areaImage areaMedicalProblems' />
              <div className='areaText'>
                <div>
                  Medical<br /> Problems
                  </div>
              </div>
            </div>
            <div className='area card-1'>
              <div className='areaOverlay' />
              <div className='areaImage areaStress' />
              <div className='areaText'>
                <div>
                  Stress<br /> Management
                  </div>
              </div>
            </div>
          </div>
          <div className='readMore'>
            <button className='readMore button' onClick={() => onNav({ name: 'practice', scrollTo: 0 })}>
              READ MORE
            </button>
          </div>
        </div>
        <div className='services card-2' id='services'>
          <div className='servicesDescription'>
            <h2>
              Services
              </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor bibendum quam at efficitur. Sed pharetra id velit nec elementum. Morbi tincidunt sapien nisi, nec porttitor augue semper ac. Vestibulum pulvinar cursus urna, id varius mauris pellentesque in. Aenean ac neque purus. Sed egestas consectetur ipsum. Cras non semper ligula, quis suscipit odio. Cras dictum pharetra auctor.
              </p>
            <div className='readMore' style={{ marginTop: 'auto', justifyContent: 'flex-start' }}>
              <button
                className='button'
                onClick={() => onNav({ name: 'services', scrollTo: 0 })}
              >
                READ MORE
              </button>
            </div>
          </div>
          <div className='servicesImage'>
          </div>
        </div>
        <div className='classes' id='classes'>
          <div className='classesDescription'>
            <h2>
              Mood & Food
              </h2>
            <p>
              Get in my belly
              </p>
            <div className='readMore' style={{ marginTop: 'auto', justifyContent: 'flex-start' }}>
              <button
                className='button'
                onClick={() => onNav({ name: 'classes', scrollTo: 0 })}
              >
                READ MORE
              </button>
            </div>
          </div>
        </div>
        <div className='contact card-2' id='contact'>
          <h2>Change begins today</h2>
          <h3>Request a consultation</h3>
          <form>
            <div class="group">
              <input type="text" required />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Name</label>
            </div>
            <div class="group">
              <input type="email" required />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Email</label>
            </div>
            <div class="group">
              <input type="phone" required />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Phone</label>
            </div>
            <div class="group">
              <textarea type="text" required />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Message</label>
            </div>
          </form>
          <div class='readMore'>
            <button className='button'>SEND</button>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Home */


/** Pages */

const PracticeAreas = () => {
  return (
    <React.Fragment>
      <PageTitle
        title='Practice Areas'
      />
      <Card1
        body={practiceAreas}
      />
    </React.Fragment>
  )
}

const Services = () => {
  return (
    <React.Fragment>
      <PageTitle
        title='Services'
      />
      <Card1
        body={services}
      />
    </React.Fragment>
  );
}

const Classes = () => {
  return (
    <React.Fragment>
      <PageTitle
        title={'Classes'}
      />
      <Card1
        body={classes}
      />
    </React.Fragment>

  );
}

const ClientDocuments = () => {
  return (
    <React.Fragment>
      <PageTitle
        title={'Client Documents'}
      />
      <Card1
        body={clientDocuments}
      />
    </React.Fragment>
  );
}

const Resources = () => {
  return (
    <React.Fragment>
      <PageTitle
        title={'Resources'}
      />
      <Card1
        body={resources}
      />
    </React.Fragment>

  );
}

const Fees = () => {
  return (
    <React.Fragment>
      <PageTitle
        title={'Fees'}
      />
      <Card1
        body={fees}
      />
    </React.Fragment>

  );
}



/** Pages contents */

const meetSteph = (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus elit eget orci pellentesque, nec finibus dolor laoreet. Etiam enim ex, sodales id tortor vel, vestibulum vehicula velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer vitae ipsum et mi semper aliquam. Vivamus eget gravida sem, et consectetur elit. Vivamus ut consequat magna. Maecenas in justo maximus, mattis nisl vitae, venenatis elit. Integer eu ipsum massa. Sed sagittis lacus vel cursus tempor. Cras id egestas turpis.
  </p>
);

const practiceAreas = (
  <React.Fragment>
    <h3>Eating Concerns</h3>
    <p>
      Individuals noticing mindless, stress, emotional, or binge eating behaviors are welcome to consider both individual and class-based therapies with me. My approach to these concerns recognizes the complex role eating can play as a mechanism of coping for individual, family, and culturally systemic issues. We work together to acknowledge the fullness of this role as well as it's history, while honoring the desire that may exist to change. Through our work we can begin to develop new and healthier coping strategies as a natural outcome of increased awareness and self-compassion. I tailor my approach to the needs and style of the individual with whom I am working.
</p>

    <h3>Lifestyle Changes</h3>

    <p>
      Most of us can relate to the running mental list of things we know we "should" be doing in order to be healthier. Maybe this is moving our bodies more, eating differently, improving  sleep habits, or disconnecting from technology. Maybe it could be these things plus many more! While certainly excellent habits, looking at a list of personal wellness "to dos" can be overwhelming. In fact, we often avoid thinking about these healthy living items because it can feel hopeless. Together we can create a plan of small steps to work towards connecting behavior changes with your deepest values. Things that may have felt forced in the past can become things we are eager for. I will leverage my training in Lifestyle Medicine to help set manageable and research supported aims to produce real improvements in your health.
</p>

    <h3>Phase of Life Issues/Life Transitions</h3>
    <p>
      Though the phrase, "the only thing constant is change" is one familiar to many of us, this can be little comfort during the turmoil of a significant transition. Changes in life circumstances can impact us on every level of our being and external life. Seeking therapy during these times can be both anchor and guide light. I will support you to process the loss of how things have been. When you are ready, we will set consciously developed goals for the phase of life that you find yourself in now. We will work together to identify healthy core components of who you are evolving to be and center our attention to nurture this growth. There is no set timeline of how long an adjustment period lasts. I will help you to move into the next part of your life in the healthful ways, as quickly as is reasonable, and in complete respect for your own pace.
</p>

    <h3>Relationship Challenges</h3>
    <p>
      Romantic, family, social, and occupational relationships can all be sources of significant pleasure and consequently, significant pain. There are a multitude of reasons relationships can become troubled. Many of the roots of these reasons can be traced to communication clarity. While we cannot change other people, we can identify personal qualities in ourselves that we wish to change for the wellbeing of a current or future relationship. Working towards identifying these areas, creating mindful awareness around them, and making values based changes can provide both personal benefits and improvements to the relationship. We can work together to identify and optimize these changes in a compassionate and respectful environment while prioritizing effective and clear communication as the cornerstone to improved relationships.
</p>
    <h3>Medical Problems</h3>
    <p>
      There is no doubt that our physical wellbeing impacts our psychological wellbeing and vice versa. Whether you are looking for support in improving your management of a medical problem, handling the stress around it, or believe there may be lifestyle changes that will reverse the condition, I would be happy to support this aspect of your health. I am a trained health psychologist and work regularly with both chronic and acute medical conditions. I have personal and professional experience with the impacts physical health can have not only on oneself, but also on those around us. I believe support can make a substantive difference in managing a health concern as well as the emotional and social impacts of this. I will work with you to accept those realities that are unchanging as well as recognize opportunities for positive growth.
</p>
    <h3>Exceptions to the above</h3>
    <p>
      Due to the part time nature of my private practice, I am unfortunately unable at this time to work with those who have active and acute suicidal or homicidal thoughts or are engaging in self-harming behaviors. While it is not uncommon for these thoughts or behaviors to be part of the lives of those who fall into one or more of the categories above, I am unable to be available with the consistency or regularity that is needed to help support active and acute safety concerns. Should an active and acute safety concern occur during our work together, I will work together with you to find appropriate care that can meet your needs. It is likely that with stabilization there is potential to return to our work together if that is determined to be in your best interest. I am happy to discuss this in further detail and welcome any questions or concerns.
    </p>
  </React.Fragment>
);

const services = (
  <React.Fragment>
    <p>
      I provide both individual therapy appointments as well as classes.
    </p>
    <h3>Telephone Consult</h3>
    <p>
      As our first contact for either of these services I offer a complementary 15-minute phone consultation. This is an opportunity for us to connect about the issues that bring you into care, and to determine whether working together is the best fit for your needs. I can answer any questions that you may have about coming into care and set up your first appointment or class.<br />
      {/* <i>15-min initial telephone consult&#x2014; free of charge</i> */}
    </p>
    <h3>Initial Appointment</h3>
    <p>
      An initial individual therapy appointment is a 60-minute appointment. During this appointment I will review your complete intake form with you to ensure that I have an appropriate understanding of some of your history, what brings you into care, and your goals for our work together. We will also use this appointment to create some initial goals for care and to set up our expectations for treatment.
      <br />
      {/* <i>60-min initial individual appointment&#x2014; $150 *</i> */}
    </p>
    <h3>Return Appointments</h3>
    <p>
      Return appointments are 50-minute appointments. During return appointments we will work together on your goals and I will support you through the process. We will regularly check in about the progress of care and make adjustments as needed to ensure that we are working effectively together.
      <br />
      {/* <i>50-min return individual appointment&#x2014; $150 *</i> */}
    </p>
    <h3>Classes</h3>
    <p>
      Classes are 90 minutes in length. Due to space needed, classes are held at a nearby location separate from the main therapy office. More information about class and class content can be found under the "Classes" tab. Though classes take place over 4 sessions, the full fee must be paid in advance of the first session. After this payment, no additional charges are incurred for the remainder of the classes unless an additional service is requested or provided.
      <br />
      {/* <i>4-session (360-min) class series&#x2014; $160 *</i> */}
    </p>
    <h3>TeleMental Health</h3>
    <p>
      On occasion it may be indicated for us to engage in tele-health either over the phone or through video communication. These services are offered to individuals only after they have been initially established in-person through at least one in-person appointment. Due to licensing requirements, I am unable to provide these services to anyone out-of-state or country at the time of service. There are a variety of platforms available for this service and, though convenient, it is important to be aware that they are not HIPAA compliant. Completing the Informed Consent form acknowledges your understanding of this and acceptance of the risk should we utilize this format of care.
      <br />
      {/* <i>5 to 25 minutes&#x2014; $75 *</i><br /> */}
      {/* <i>26-50 minutes&#x2014; $150 *</i> */}
    </p>
    <br />
    <p>
      <i>
        * You will be expected to pay for each session before/at the start of session, unless we agree otherwise. Payment may be made through cash, check, or HIPAA compliant application. Use of the HIPAA compliant application incurs an additional $5 charge. I am an "out of network provider" for insurance networks but will provide you a Superbill which you may use to request reimbursement.
      </i>
    </p>
  </React.Fragment>
);

const fees = (
  <React.Fragment>
    <p>
      Please note that you will be expected to pay for each session before/at the start of session, unless we agree otherwise. Payment may be made through cash, check, or HIPAA compliant application. Use of the HIPAA compliant application incurs an additional $5 charge. I am an "out of network provider" for insurance networks but will provide you a Superbill which you may use to request reimbursement.
    </p>
    <h3>Telephone Consult</h3>
    <p>
      <i>15-min initial telephone consult&#x2014; free of charge</i>
    </p>
    <h3>Initial Appointment</h3>
    <p>
      <i>60-min initial individual appointment&#x2014; $150</i>
    </p>
    <h3>Return Appointments</h3>
    <p>
      <i>50-min return individual appointment&#x2014; $150</i>
    </p>
    <h3>Classes</h3>
    <p>
      <i>4-session (360-min) class series&#x2014; $160</i>
    </p>
    <h3>TeleMental Health</h3>
    <p>
      <i>5 to 25 minutes&#x2014; $75</i><br />
      <i>26-50 minutes&#x2014; $150</i>
    </p>
    <br />
    <p>
      <i>
      </i>
    </p>
  </React.Fragment>
);

const classes = (
  <React.Fragment>
    <h3>
      Mood & Food
    </h3>
    <p>
      Mood & Food is a class designed for individuals struggling with overeating, mindless eating, stress eating, emotional eating, shame around eating, or binge eating. The course is structured into 4 classes each lasting 90 minutes. The class centers on presented material though questions and participation are welcome and encouraged. Class materials also include handouts and at-home practice exercises. During the course of the classes we will cover topics including: what emotional eating is, cultural implications, environmental impacts, set point theory, emotional vs physical hunger, binge eating cycle, interpersonal dynamics around food, self-talk, behavior analysis & behavior change, mindful eating, loving limits, self-compassion, managing difficult emotions, habit formation, stages of change, and healthy eating guidelines. By the end of the class series participants will be able to recognize opportunities for, prepare for, and make positive changes in their relationships with themselves, food, and their environment.
    </p>
  </React.Fragment>
);

const resources = (
  <React.Fragment>
    <p>
      The below are resources that I find to be clinically valuable. I have no affiliation with any of the individuals or entities indicated below. These resources are provided purely due to my perception of their clinical benefit. I receive no compensation of any kind for sharing these resources.
    </p>
    <h3>Webpages</h3>
    <p>
      <a href="https://anxietycanada.com/" target="_blank">Anxiety Canada</a> is an excellent web resource for evidence based information about anxiety. The website is written in clear language that is thoughtful, easy to understand, and helpful.
    </p>
    <p>
      <a href="https://maps.anxietycanada.com/courses/my-anxiety-plan-map-for-adults/" target="_blank">My Anxiety Plan</a> is the online course associated with Anxiety Canada. It is a free course that provides excellent information in addition to practical tools and practices for managing anxiety and anxiety-based conditions.
    </p>
    <p>
      <a href="https://brenebrown.com/" target="_blank">Brene Brown</a> is an author, researcher, and speaker that I highly recommend. The link is to her main webpage. Below are specific resources of hers that I recommend.
    </p>
    <p>
      <a href="https://ggsc.berkeley.edu/" target="_blank">The Greater Good Science Center</a>- Berkeley is a center of research and innovation focusing on making positivity and positive change accessible to all.
    </p>
    <p>
      <a href="https://www.edx.org/course/the-science-of-happiness-0" target="_blank">The Science of Happiness</a> is the online course from the Greater Good Science Center. It is a free 8-week course that provides tools to happier experiences and greater meaning in life.
    </p>
    <p>
      <a href="https://ggia.berkeley.edu/" target="_blank">Greater Good in Action</a> provides doable practices for making concrete and impactful positive changes
    </p>

    <h3>Videos</h3>

    <a href="https://www.ted.com/talks/brene_brown_on_vulnerability?utm_campaign=tedspread&utm_medium=referral&utm_source=tedcomshare" target="_blank">The Power of Vulnerability- Brene Brown</a><br />
    <a href="https://www.ted.com/talks/brene_brown_listening_to_shame?utm_campaign=tedspread&utm_medium=referral&utm_source=tedcomshare" target="_blank">Listening to Shame- Brene Brown</a><br />
    <a href="https://player.vimeo.com/video/261348709" target="_blank">SuperSoul Sessions: The Anatomy of Trust- Brene Brown</a><br />
    <a href="https://brenebrown.com/videos/" target="_blank">Additional Brene Brown</a><br />
    <a href="https://youtu.be/IvtZBUSplr4" target="_blank">The Space Between Self-Esteem and Self-Compassion- Kristin Neff</a><br />
    <a href="https://self-compassion.org/videos/" target="_blank">Additional Kristin Neff</a><br />
    <a href="https://www.ted.com/talks/sandra_aamodt_why_dieting_doesn_t_usually_work?utm_campaign=tedspread&utm_medium=referral&utm_source=tedcomshare" target="_blank">Why Dieting Doesn't Usually Work- Sandra Aamodt</a><br />

    <h3>Audio Recordings</h3>

    <a href="https://centerformsc.org/practice-msc/guided-meditations-and-exercises/" target="_blank">Mindful Self Compassion Meditations</a><br />
    <a href="https://www.uclahealth.org/marc/mindful-meditations" target="_blank">UCLA Meditations (Also available in Spanish!)</a><br />

    <h3>Books</h3>
    <a href="https://geneenroth.com/books/" target="_blank">Women, Food, and God by Geneen Roth</a><br />
    <a href="https://brenebrown.com/books-audio/" target="_blank">The Gifts of Imperfection by Brene Brown</a><br />
    <a href="https://brenebrown.com/books-audio/" target="_blank">Daring Greatly by Brene Brown</a><br />
    <a href="https://brenebrown.com/books-audio/" target="_blank">Rising Strong by Brene Brown</a><br />
  </React.Fragment>
);

const clientDocuments = (
  <React.Fragment>
    <p>
      The following forms are for your review. If we have scheduled an in-person appointment, please read carefully each of the forms below. Please print, complete, and bring the first three forms to our first appointment. We will review them together. If you would like for your health information to be shared with another individual or group, or would like me to gather information from them, please print, complete, and bring the Release of Information form to your next appointment.
    </p>
    <ul>
      <li>
        <a href="./res/Informed Consent.pdf" download target="_blank">Informed Consent</a>
      </li>
      <li>
        <a href="./res/Intake Form.pdf" download target="_blank">Intake Form</a>
      </li>
      <li>
        <a href="./res/Receipt of Forms.pdf" download target="_blank">Receipt of Forms</a>
      </li>
      <li>
        <a href="./res/Privacy Policy.pdf" download target="_blank">Privacy Policy</a>
      </li>
      <li>
        <a href="./res/ROI.pdf" download target="_blank">Release of Information</a>
      </li>

    </ul>
  </React.Fragment>
);



const Card1 = (props) => {
  const title = props.title ?
    (
      <div className='card-title'>
        {props.title}
      </div>
    ) : undefined;

  return (
    <div
      className='card card-1'
    >
      {title}
      <div className='card-body'>
        {props.body}
      </div>
    </div>
  );
}





const PageTitle = (props) => {
  return (
    <div className='page-title' id='top'>
      <div className='title'>
        {props.title}
      </div>
    </div>
  );
}