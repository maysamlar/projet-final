import React from 'react'
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
const May = () => {
  return (
    <div>
    <div className="row1" style={{background: "#ececec",height: "550px"}}>
        <div className="row" >
          <div className="customers">
            <h2 id='your'>What <b>our customers</b> are saying</h2>
            <div id="myCarousel" className="carousel slide" data-ride="carousel" style={{marginTop:"66px"}}>
             <div className='red1'>
              <ol className="carousel-indicators"style={{marginTop:"66px"}}>
                <li data-target="#myCarousel" data-slide-to={0} className="active" />
                <li data-target="#myCarousel" data-slide-to={1} />
                <li data-target="#myCarousel" data-slide-to={2} />
              </ol>   
              {/* Wrapper for carousel items */}
              <div className="carousel-inner"style={{marginTop:"66px"}}>
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="media">
                        <img src="https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-9/37802813_1791646974263809_7074797286772965376_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8vG4lota9nUAX-OKHik&_nc_ht=scontent.ftun1-2.fna&oh=00_AfDSKDGe2kb8-vrUhg5HAGC3TRuRA6BDNKglTEBpP2Po4w&oe=641C25A7" className="mr-3" alt="" />
                        <div className="media-body">
                          <div className="testimonial">
                            <p style={{color:"black"}}>Lorem ipsum dolor sit amet, consec adipiscing elit. Nam eusem scelerisque tempor, varius quam luctus dui. Mauris magna metus nec.</p>
                            <p className="overview"><b>BelGacem talel</b>, Media Analyst</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="media">
                        <img src="https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/234829729_102151078845313_6530140775538446164_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=aLoy9L2IUhIAX-CKbkN&_nc_ht=scontent.ftun1-2.fna&oh=00_AfDanGjz1D02HEMONGgU0ZgJJBM2opkll-cKneYuKrVX7w&oe=6404D56B" className="mr-3" alt="" />
                        <div className="media-body">
                          <div className="testimonial">
                            <p style={{color:"black"}}>Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra.</p>
                            <p className="overview"><b>Khalil Omar</b>, Web Developer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>			
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="media">
                        <img src="https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-9/125013363_1507697176091687_8826372293799687186_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=4hf9VCqKDHMAX-07Opd&tn=Lg80ResmLc-_5dyS&_nc_ht=scontent.ftun1-2.fna&oh=00_AfATcI_TgRDuwBV3HFxujrToAGMM5sVZRgT7N_PEVu0iyA&oe=641C2C83" className="mr-3" alt="" />
                        <div className="media-body">
                          <div className="testimonial">
                            <p style={{color:"black"}}>Lorem ipsum dolor sit amet, consec adipiscing elit. Nam eusem scelerisque tempor, varius quam luctus dui. Mauris magna metus nec.</p>
                            <p className="overview"><b>Jaadari afifa</b>, Seo Analyst</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="media">
                        <img src="https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/311327541_10229315022885058_4480372823618680141_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=kKZi8E9HHA4AX9L-q6Q&_nc_ht=scontent.ftun1-2.fna&oh=00_AfBneoMOccyU8onZRp-0JUCNG8C1n7dOqJQ4xrxHKdNnUg&oe=6404BFC3" className="mr-3" alt="" />
                        <div className="media-body">
                          <div className="testimonial">
                            <p style={{color:"black"}}>Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra.</p>
                            <p className="overview"><b>Benslimane slim</b>,  Web Developer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>			
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="media">
                        <img src="https://scontent.ftun1-2.fna.fbcdn.net/v/t1.15752-9/310494086_504379408375206_1837640043142300949_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Dh5eKdb3N38AX90itXp&_nc_ht=scontent.ftun1-2.fna&oh=03_AdSnopIUcag867eA06FtIPvI9ex8uNP7Xyo7G04Kd2OrDw&oe=641C0857" className="mr-3" alt="" />
                        <div className="media-body">
                          <div className="testimonial">
                            <p style={{color:"black"}}>Lorem ipsum dolor sit amet, consec adipiscing elit. Nam eusem scelerisque tempor, varius quam luctus dui. Mauris magna metus nec.</p>
                            <p className="overview"><b>Hajji nourhane</b>,  Web Designer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="media">
                        <img src="https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/322204975_1292701838245330_2229891865224934959_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=SV4rfnLDMNIAX8WaqNl&_nc_ht=scontent.ftun1-2.fna&oh=00_AfDtYrh90JQ3BhOCa4Rz6Dn5ORweyl8yYHHGVv5-UjXOhA&oe=6405E894" className="mr-3" alt="" />
                        <div className="media-body">
                          <div className="testimonial">
                            <p style={{color:"black"}}>Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra.</p>
                            <p className="overview"><b>Saidi Nesrine</b>, UX Analyst</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>			
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
      <div className='one1'><h1 id="one1"> 
      <Link  style={{ textDecoration:"none" ,color:"black" }} to="/galerie" > <span>B</span>est<span> P</span>roducts   </Link> </h1>   </div> 
      <div className='fly'>
        

<div className='fly1'>

         <Card style={{ width: '37rem' }}>
     <a href='/'><Card.Img id="photo" variant="top" src="	https://grandcarrentalv1.b-cdn.net/wp-content/uploads/2017/01/Mercedes-C-Class-Estate-1.jpg" />
      <Card.Body>
        <Card.Title id='photo3'>Mercedes Benz</Card.Title>
      </Card.Body> </a> 
    </Card>
    <Card style={{ width: '37rem' }}>
    <a href='/'> <Card.Img  id="photo" variant="top" src="	https://grandcarrentalv1.b-cdn.net/wp-content/uploads/2017/01/2016-Lexus-RX-350-BM-01.jpg" />
      <Card.Body>
        <Card.Title id='photo3'>Lexus</Card.Title>
       
      </Card.Body></a> 
    </Card>
    <Card style={{ width: '37rem' }}>
    <a href='/'>  <Card.Img id="photo" variant="top" src="https://grandcarrentalv1.b-cdn.net/wp-content/uploads/2017/01/Audi-A4-Avant-1.jpg" />
      <Card.Body>
        <Card.Title id='photo3'>Audit</Card.Title>
       
      </Card.Body></a> 
    </Card></div>
    <div className='fly2'>
    <Card style={{ width: '37rem' }}>
    <a href='/'>    <Card.Img id="photo1" variant="top" src="https://grandcarrentalv1.b-cdn.net/wp-content/uploads/2017/01/bmw-3-series-sedan-wallpaper-1920x1200-05.jpg" />
      <Card.Body>
        <Card.Title id='photo3'>BMW</Card.Title>
       
    
      </Card.Body></a> 
    </Card>
     <Card style={{ width: '37rem'   }}>
     <a href='/'>  <Card.Img id="photo1" variant="top" src="https://grandcarrentalv1.b-cdn.net/wp-content/uploads/2017/01/2016-MINI-Cooper-S-Clubman-ALL4.jpg" />
      <Card.Body>
        <Card.Title id='photo3'>Mini</Card.Title>
       
      
      </Card.Body></a> 
    </Card>
    <Card style={{ width: '37rem' }}>
    <a href='/'>    <Card.Img id="photo1" variant="top" src="	https://grandcarrentalv1.b-cdn.net/wp-content/uploads/2017/01/P14_0596_a4_rgb-1.jpg" />
      <Card.Body>
        <Card.Title id='photo3'>Porshe</Card.Title>
       
      </Card.Body></a> 
    </Card></div>
    </div>  
  <div className='for'>
<div id="form1"> Contact </div> 
<h2 id="form2"> <Link to="/contacte">NEED HELP?  <span>CONTACT US</span></Link></h2>

      </div>
     
      </div>  

  )
}

export default May