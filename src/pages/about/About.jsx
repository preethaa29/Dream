import React from 'react';
import bg from "../../assets/about/istockphoto-1137054887-2048x2048.jpg";
import img1 from "../../assets/about/events.jpg";
import img2 from "../../assets/about/food.jpg";
import img3 from "../../assets/about/hobby.jpg";
import img4 from "../../assets/about/nature.jpg";
import img5 from "../../assets/about/technology.jpg";

const About = () => {
  const sectionStyle = {
    marginTop: '5rem',
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '1rem',
    lineHeight: '1.5'
  };

  const imageStyle = {
    height: '250px',
    width: '350px'
  };

  const textCenter = {
    textAlign: 'center'
  };

  const underline = {
    textDecoration: 'underline'
  };

  return (
    <div>
      <div>
        <div>
          <img style={{ width: '100%' }} src={bg} alt="" />
        </div>
        <br></br>
        <br></br>
        <div style={{ marginTop: '-75px' }}>
          <br></br>
          <h3 style={{ ...textCenter, fontSize: '2.5rem', fontWeight: '600', color: '#3490dc', fontFamily: 'serif' }}>
            Dream Craft Events
          </h3>
          <p style={{ ...textCenter, textTransform: 'uppercase', fontSize: '1.5rem' }}>
            Make your dreams come to life
          </p>
        </div>
      </div>
      <div style={sectionStyle}>
        <h2 style={{ ...textCenter, fontSize: '2rem', ...underline }}>Why choose us</h2>
        {/* 1 */}
        <div style={{ display: 'flex', gap: '1rem', flexDirection: 'row' }}>
          <div style={{ flex: '1 1 0' }}>
            <img style={imageStyle} src={img5} alt="" />
          </div>
          <div style={{ flex: '2 1 0' }}>
            <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', marginTop: '0.5rem' }}>Original</h4>
            <p style={{ fontSize: '0.875rem' }}>
              We have the sense fresh, new and original ideas that will ensure
              the event we organize is successful, unique and memorable. And We
              are “Dream Craft Events” With our young and creative minds, we
              always ensure that we bring out outstanding events that are easily
              distinguished from other events of the same field.
            </p>
          </div>
        </div>
        {/* 2 */}
        <div style={{ display: 'flex', gap: '1rem', flexDirection: 'row-reverse' }}>
          <div style={{ flex: '1 1 0' }}>
            <img style={imageStyle} src={img4} alt="" />
          </div>
          <div style={{ flex: '2 1 0' }}>
            <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', marginTop: '0.5rem' }}>Creative</h4>
            <p>
              We are creative in every aspect of the event; planning,
              promotional and publicity as well as execution. By being creative,
              our events are more outstanding and will leave a great impact not
              just to us, but to our clients as well.
            </p>
          </div>
        </div>
        {/* 3 */}
        <div style={{ display: 'flex', gap: '1rem', flexDirection: 'row' }}>
          <div style={{ flex: '1 1 0' }}>
            <img style={imageStyle} src={img1} alt="" />
          </div>
          <div style={{ flex: '2 1 0', marginLeft: '-8rem' }}>
            <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', marginTop: '0.5rem' }}>Maticulous</h4>
            <p>
              We are very particular in every aspect of the event management to
              guarantee the event we organise runs perfectly and efficiently.
            </p>
          </div>
        </div>
        {/* 4 */}
        <div style={{ display: 'flex', gap: '1rem', flexDirection: 'row-reverse', justifyContent: 'center' }}>
          <div style={{ flex: '1 1 0' }}>
            <img style={imageStyle} src={img2} alt="" />
          </div>
          <div style={{ flex: '2 1 0' }}>
            <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', marginTop: '0.5rem' }}>Event Services</h4>
            <p>
              With many years of experience in event organising, we understand
              that there many factors that lead to a well-organised and
              successful event. These aspects include events sponsorship, event
              marketing and promotions as well as producing event merchandising.
              Each of these aspects is managed carefully as they are the main
              components of the main event.
            </p>
          </div>
        </div>
        {/* 5 */}
        <div style={{ display: 'flex', gap: '1rem', flexDirection: 'row' }}>
          <div style={{ flex: '1 1 0' }}>
            <img style={imageStyle} src={img3} alt="" />
          </div>
          <div style={{ flex: '2 1 0' }}>
            <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', marginTop: '0.5rem' }}>Satisfaction</h4>
            <p>
              Of course, achieving our clients’ satisfaction is what motivates
              us to bring out the best events. We believe in the strengths of
              each of our team members and we have proved to exceed our clients’
              expectations and presenting them with successful events that raved
              fantastic reviews around the world!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
