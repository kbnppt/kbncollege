import React from 'react'
import styles from './awards.module.css'
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Image from 'next/image';
import HeadingsComponent from '../Headings/index';
import Button from '@material-ui/core/Button';
import Slider from "react-slick";


const Awards = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        pauseOnHover: false,
        autoplaySpeed: 4000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div className={styles.awardsMain}>
            <div>
                <HeadingsComponent data2='BEST TEACHERS & Pratibha Awardees' />
            </div>

            <div className={styles.cardMain}>
                <Slider {...settings}>

                    <div className={styles.card} style={{ boxShadow: 'none', background: '#f9fafa' }} >
                        <div className={styles.border_gradient}>
                            <Image src={'https://drive.google.com/uc?id=1pEbY61xAuLRwj2dYYydZql472SkZ_SKT'} alt="" height={250} width={250} />
                        </div>

                            <CardContent>
                                <h2 style={{ marginTop: 0 }}>Sri S. Sundaram</h2>
                                <Typography className={styles.awardsName} variant="body2" color="textSecondary" component="p">
                                    Best Teacher Awardee
                                </Typography>
                                <Typography  className={styles.studentYear} variant="body2" color="textSecondary" component="p">
                                    1982, History
                                </Typography>
                            </CardContent>
                    </div>

                    <div className={styles.card} style={{ boxShadow: 'none', background: '#f9fafa' }} >
                        <div className={styles.border_gradient}>
                            <Image src={'https://drive.google.com/uc?id=1iOfAj4wtvKQvUTL046VIEOEbNwq58xeW'} alt="" height={250} width={250} />
                        </div>

                            <CardContent>
                                <h2 style={{ marginTop: 0 }}>Dr. K. R. Satyanarayana</h2>
                                <Typography className={styles.awardsName} variant="body2" color="textSecondary" component="p">
                                    Best Teacher Awardee
                                </Typography>
                                <Typography  className={styles.studentYear} variant="body2" color="textSecondary" component="p">
                                2002, Commerce & Management
                                </Typography>
                            </CardContent>
                    </div>

                    <div className={styles.card} style={{ boxShadow: 'none', background: '#f9fafa' }} >
                        <div className={styles.border_gradient}>
                            <Image src={'https://drive.google.com/uc?id=14-7J2j-fJUyXPSqmNgO3f67vmzLk8JqU'} alt="" height={250} width={250} />
                        </div>

                            <CardContent>
                                <h2 style={{ marginTop: 0 }}>Dr. C. Chennakesavulu</h2>
                                <Typography className={styles.awardsName} variant="body2" color="textSecondary" component="p">
                                    Best Teacher Awardee
                                </Typography>
                                <Typography  className={styles.studentYear} variant="body2" color="textSecondary" component="p">
                                2005, Hindi
                                </Typography>
                            </CardContent>
                    </div>

                    <div className={styles.card} style={{ boxShadow: 'none', background: '#f9fafa' }} >
                        <div className={styles.border_gradient}>
                        <Image src={'https://drive.google.com/uc?id=1w84CagRKT91zhdDe1kSllPhUSmo4LvLj'} alt="" height={250} width={250} />
                        </div>
                        <CardContent>
                            <h2 style={{ marginTop: 0 }}>Dr. S. Sasikala</h2>
                            <Typography  className={styles.awardsName} variant="body2" color="textSecondary" component="p">
                                Best Teacher Awardee
                            </Typography>
                            <Typography  className={styles.studentYear} variant="body2" color="textSecondary" component="p">
                            2007, Botany.
                                </Typography>
                        </CardContent>
                    </div>
                    
                    <div className={styles.card} style={{ boxShadow: 'none', background: '#f9fafa' }} >
                        <div className={styles.border_gradient}>
                            <Image src={'https://drive.google.com/uc?id=1-paOP11yZNrNrc09TWk8SGP9UNAXt1eB'} alt="" height={250} width={250} />
                        </div>
                            <CardContent>
                                <h2 style={{ marginTop: 0 }}>Dr. V. Narayana Rao</h2>
                                <Typography  className={styles.awardsName} variant="body2" color="textSecondary" component="p">
                                    Best Teacher Awardee
                                </Typography>
                                <Typography  className={styles.studentYear} variant="body2" color="textSecondary" component="p">
                                2012, Commerce & Management
                                    </Typography>
                            </CardContent>
                    </div>

                    <div className={styles.card} style={{ boxShadow: 'none', background: '#f9fafa' }} >
                        <div className={styles.border_gradient}>
                            <Image src={'https://drive.google.com/uc?id=1260OlKXub2vgjNCP4g4p9Mxp4OXhbG12'} alt="" height={250} width={250} />
                        </div>
                            <CardContent>
                                <h2 style={{ marginTop: 0 }}>Dr. P. Krishna Murthy</h2>
                                <Typography  className={styles.awardsName} variant="body2" color="textSecondary" component="p">
                                    Best Teacher Awardee
                                </Typography>
                                <Typography  className={styles.studentYear} variant="body2" color="textSecondary" component="p">
                                2011, Physics
                                    </Typography>
                            </CardContent>
                    </div>
           {/* prathiba */}

                    <div className={styles.card} style={{ boxShadow: 'none', background: '#f9fafa' }} >

                        <div className={styles.border_gradient}>
                            <Image src={'https://drive.google.com/uc?id=1nFlSH-bpZjMVBISfLZFUiz4EluVBK7-o'} alt="" height={250} width={250} />
                        </div>
                        <CardContent>
                            <h2 style={{ marginTop: 0 }}>B.Philomeena</h2>
                            <Typography className={styles.awardsName} variant="body2" color="textSecondary" component="p" >
                                Pratibha Awardee
                            </Typography>
                            <Typography className={styles.studentYear} variant="body2" color="textSecondary" component="p">
                                II M.Sc Computer Science (2013-15)
                            </Typography>
                        </CardContent>

                    </div>

                    <div className={styles.card} style={{ boxShadow: 'none', background: '#f9fafa' }} >

                        <div className={styles.border_gradient}>
                            <Image src={'https://drive.google.com/uc?id=1qcudOEckJs4hEYmudqc7VKNnSgQ4SdlM'} alt="" height={250} width={250} />
                        </div>
                        <CardContent>
                            <h2 style={{ marginTop: 0 }}>Y.Guna Padma</h2>
                            <Typography className={styles.awardsName} variant="body2" color="textSecondary" component="p">
                                Pratibha Awardee
                            </Typography>
                            <Typography className={styles.studentYear} variant="body2" color="textSecondary" component="p">
                                II M.Sc Chemistry (2013-15)
                            </Typography>
                        </CardContent>

                    </div>

                    <div className={styles.card} style={{ boxShadow: 'none', background: '#f9fafa' }} >

                        <div className={styles.border_gradient}>
                            <Image src={'https://drive.google.com/uc?id=1uPkRv6Kw8NeQdhIC-FzlfcP_idEwGKTU'} alt="" height={250} width={250} />
                        </div>
                        <CardContent>
                            <h2 style={{ marginTop: 0 }}>A.Sowjanya</h2>
                            <Typography className={styles.awardsName} variant="body2" color="textSecondary" component="p">
                                Pratibha Awardee
                            </Typography>
                            <Typography className={styles.studentYear} variant="body2" color="textSecondary" component="p">
                                III B.com (2012-15)
                            </Typography>
                        </CardContent>

                    </div>

                    <div className={styles.card} style={{ boxShadow: 'none', background: '#f9fafa' }} >

                        <div className={styles.border_gradient}>
                            <Image src={'https://drive.google.com/uc?id=12uFRPIpEUVrW7LusxNA3FXen7pDkpMGc'} alt="" height={250} width={250} />
                        </div>
                        <CardContent>
                            <h2 style={{ marginTop: 0 }}>S.Anjali</h2>
                            <Typography className={styles.awardsName} variant="body2" color="textSecondary" component="p">
                                Pratibha Awardee
                            </Typography>
                            <Typography className={styles.studentYear} variant="body2" color="textSecondary" component="p">
                                III MBA (2013-15)
                            </Typography>
                        </CardContent>

                    </div>

                    <div className={styles.card} style={{
                        boxShadow: 'none',
                        background: '#f9fafa'
                    }} >
                        <div className={styles.border_gradient}>
                            <Image src={'https://drive.google.com/uc?id=1waUkDXPAZzYbHn_hdKslmMMzvpJkW5kZ'} alt="" height={250} width={250} />
                        </div>
                        <CardContent>
                            <h2 style={{ marginTop: 0 }}>G.Hima Kumari</h2>
                            <Typography className={styles.awardsName} variant="body2" color="textSecondary" component="p">
                                Pratibha Awardee
                            </Typography>
                            <Typography className={styles.studentYear} variant="body2" color="textSecondary" component="p">
                                II M.Sc Chemistry  (2014-16)
                            </Typography>
                        </CardContent>

                    </div>

                    <div className={styles.card} style={{
                        boxShadow: 'none',
                        background: '#f9fafa'
                    }} >
                        <div className={styles.border_gradient}>
                            <Image src={'https://drive.google.com/uc?id=1Jzgk3BZptjb3IpdFvE-9o2VQrf2NH04Z'} alt="" height={250} width={250} />
                        </div>
                        <CardContent>
                            <h2 style={{ marginTop: 0 }}>B.Vasavi</h2>
                            <Typography className={styles.awardsName} variant="body2" color="textSecondary" component="p">
                                Pratibha Awardee
                            </Typography>
                            <Typography className={styles.studentYear} variant="body2" color="textSecondary" component="p">
                                III MCA (2014-17)
                            </Typography>
                        </CardContent>

                    </div>
                </Slider>
            </div>
            {/* <div className={styles.cardMain}>

            </div > */}

            <div style={{ marginTop: "2rem", }}>
                <Button variant='contained' color='primary'
                    href="/bestteachers" >
                    See More
                </Button>
            </div>
        </div >
    )
}

export default Awards
