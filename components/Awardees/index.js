import React from 'react'
import styles from './awardees.module.css'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Image from 'next/image';
import HeadingsComponent from '../Headings/index';
import Button from '@material-ui/core/Button';

const Awardees = () => {
    return (
        <div className={styles.awardsMain}>
            {/* <div>
                <HeadingsComponent data1='Best Teachers ' />
            </div> */}
            <div className={styles.cardMain}>
                <Card className={styles.card} >
                    <CardActionArea>
                        <Image src={'https://drive.google.com/uc?id=1pEbY61xAuLRwj2dYYydZql472SkZ_SKT'} alt="" height={250} width={380} />
                        <CardContent>
                            <h2 style={{ marginTop: 0 }}>Sri S. Sundaram</h2>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Best Teacher Awardee-1982, History
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className={styles.card} >
                    <CardActionArea>
                        <Image src={'https://drive.google.com/uc?id=1iOfAj4wtvKQvUTL046VIEOEbNwq58xeW'} alt="" height={250} width={380} />
                        <CardContent>
                            <h2 style={{ marginTop: 0 }}>Dr. K. R. Satyanarayana</h2>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Best Teacher Awardee-2002, Commerce & Management
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className={styles.card} >
                    <CardActionArea>
                        <Image src={'https://drive.google.com/uc?id=14-7J2j-fJUyXPSqmNgO3f67vmzLk8JqU'} alt="" height={250} width={380} />
                        <CardContent>
                            <h2 style={{ marginTop: 0 }}>Dr. C. Chennakesavulu</h2>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Best Teacher Awardee-2005, Hindi
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>

            <div className={styles.cardMain}>
                <Card className={styles.card} >
                    <CardActionArea>
                        <Image src={'https://drive.google.com/uc?id=1w84CagRKT91zhdDe1kSllPhUSmo4LvLj'} alt="" height={250} width={380} />
                        <CardContent>
                            <h2 style={{ marginTop: 0 }}>Dr. S. Sasikala</h2>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Best Teacher Awardee-2007, Botany.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className={styles.card} >
                    <CardActionArea>
                        <Image src={'https://drive.google.com/uc?id=1-paOP11yZNrNrc09TWk8SGP9UNAXt1eB'} alt="" height={250} width={380} />
                        <CardContent>
                            <h2 style={{ marginTop: 0 }}>Dr. V. Narayana Rao</h2>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Best Teacher Awardee-2012, Commerce & Management
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className={styles.card} >
                    <CardActionArea>
                        <Image src={'https://drive.google.com/uc?id=1260OlKXub2vgjNCP4g4p9Mxp4OXhbG12'} alt="" height={250} width={380} />
                        <CardContent>
                            <h2 style={{ marginTop: 0 }}>Dr. P. Krishna Murthy</h2>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Best Teacher Awardee-2011, Physics
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
            <div className={styles.cardMain}>
                <Card className={styles.card} >
                    <CardActionArea>
                        <Image src={'https://drive.google.com/uc?id=14nyqnMgMeBw8M3QwOW0DWSN8a8mxVYdV'} alt="" height={250} width={380} />
                        <CardContent>
                            <h2 style={{ marginTop: 0 }}>Dr. V. Subhashini</h2>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Best Lecturer in Zoology 2013-2014, Commissionerate of Collegiate Education Zoology
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className={styles.card} >
                    <CardActionArea>
                        <Image src={'https://drive.google.com/uc?id=1xWL8E7O5Gy54KOr0hRNRtMGcir6fHy1h'} alt="" height={250} width={380} />
                        <CardContent>
                            <h2 style={{ marginTop: 0 }}>Dr. V. Subhashini</h2>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Best Teacher Awardee-2016 <br></br>Zoology  
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className={styles.card} >
                    <CardActionArea>
                        <Image src={'https://drive.google.com/uc?id=12G2vnzMwiF6rZjqkKCt-rUS4NwuaBd1x'} alt="" height={250} width={380} />
                        <CardContent>
                            <h2 style={{ marginTop: 0 }}> Sri V. Tirupathi Rao</h2>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Best Librarian award 20151-2016  <br></br> Librarian
                            </Typography> 
                        </CardContent>
                    </CardActionArea>
                </Card>
                </div>
                <div className={styles.cardMain}>
                <Card className={styles.card} >
                    <CardActionArea>
                        <Image src={'https://drive.google.com/uc?id=1RA9-gCX4RnLyYKNpwfhNC8xOxKDuBq2C'} alt="" height={250} width={380} />
                        <CardContent>
                            <h2 style={{ marginTop: 0 }}>Sri N. Victor David Dinakaran</h2>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Best Educationist Award <br></br> INDIAN ICONIC EDUCATIONIST AWARD  <br></br> 2017-2018 English
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className={styles.card} >
                    <CardActionArea>
                        <Image src={'https://drive.google.com/uc?id=1aMjvyNQipi46LXroe2QQjvcKDzfwOJT8'} alt="" height={250} width={380} />
                        <CardContent>
                            <h2 style={{ marginTop: 0 }}>Sri P.L. Ramesh</h2>
                            <Typography variant="body2" color="textSecondary" component="p">
                            "Uthama Acharya puraskar"   <br></br> A National Award from Indian services 
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className={styles.card} >
                    <CardActionArea>
                        <Image src={'https://drive.google.com/uc?id=1O0lgAIUHJMaIHU2SjuCvXz8WqZIjctrc'} alt="" height={250} width={380} />
                        <CardContent>
                            <h2 style={{ marginTop: 0 }}> Sri Sambasivarao</h2>
                            <Typography variant="body2" color="textSecondary" component="p">
                                "Uthama Acharya puraskar"   <br></br> A National Award from Indian services 
                            </Typography> 
                        </CardContent>
                    </CardActionArea>
                </Card>
                </div>
                <h2>
                    BEST STUDENT AWARDS 
                </h2>
                <div className={styles.cardMain}>
                <Card className={styles.card} >
                    <CardActionArea>
                        <Image src={'https://drive.google.com/uc?id=1nFlSH-bpZjMVBISfLZFUiz4EluVBK7-o'} alt="" height={250} width={350} />
                        <CardContent>
                            <h2 style={{ marginTop: 0 }}>B. Philomeena </h2>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Pratibha Awardee II<sup>nd</sup>  <br></br> M.Sc Computer science (2013-15) 
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className={styles.card} >
                    <CardActionArea>
                        <Image src={'https://drive.google.com/uc?id=1qcudOEckJs4hEYmudqc7VKNnSgQ4SdlM'} alt="" height={250} width={350} />
                        <CardContent>
                            <h2 style={{ marginTop: 0 }}>Y. Guna Padmax</h2>
                            <Typography variant="body2" color="textSecondary" component="p">
                           Pratibha Awardee II<sup>nd</sup>  <br></br> M.Sc Chemistry (2013-15)
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className={styles.card} >
                    <CardActionArea>
                        <Image src={'https://drive.google.com/uc?id=1uPkRv6Kw8NeQdhIC-FzlfcP_idEwGKTU'} alt="" height={250} width={350} />
                        <CardContent>
                            <h2 style={{ marginTop: 0 }}>A. Sowjanya</h2>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Pratibha Awardee III B.Com (2012-15) 
                            </Typography> 
                        </CardContent>
                    </CardActionArea>
                </Card>
                </div>
                <div className={styles.cardMain}>
                <Card className={styles.card} >
                    <CardActionArea>
                        <Image src={'https://drive.google.com/uc?id=12uFRPIpEUVrW7LusxNA3FXen7pDkpMGc'} alt="" height={250} width={350} />
                        <CardContent>
                            <h2 style={{ marginTop: 0 }}>S. Anjali </h2>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Pratibha Awardee II<sup>nd</sup>  <br></br> MBA  (2013-15) 
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className={styles.card} >
                    <CardActionArea>
                        <Image src={'https://drive.google.com/uc?id=1waUkDXPAZzYbHn_hdKslmMMzvpJkW5kZ'} alt="" height={250} width={350} />
                        <CardContent>
                            <h2 style={{ marginTop: 0 }}>G. Hima kumari</h2>
                            <Typography variant="body2" color="textSecondary" component="p">
                           Pratibha Awardee II<sup>nd</sup>  <br></br> M.Sc Chemistry (2014-16)
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className={styles.card} >
                    <CardActionArea>
                        <Image src={'https://drive.google.com/uc?id=1Jzgk3BZptjb3IpdFvE-9o2VQrf2NH04Z'} alt="" height={250} width={350} />
                        <CardContent>
                            <h2 style={{ marginTop: 0 }}>B. Vasavi</h2>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Pratibha Awardee III<sup>rd </sup> MCA (2014-17) 
                            </Typography> 
                        </CardContent>
                    </CardActionArea>
                </Card>
                </div>
                <div className={styles.cardMain}>
                <Card className={styles.card} >
                    <CardActionArea>
                        <Image src={'https://drive.google.com/uc?id=17avsiGKHhd9fVnjjfRAVRUkgQuXcbwE8'} alt="" height={250} width={350} />
                        <CardContent>
                            <h2 style={{ marginTop: 0 }}>B. sunitha  </h2>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Pratibha Awardee II<sup>nd</sup>  <br></br> M.Sc Chemistry (2015-17) 
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className={styles.card} >
                    <CardActionArea>
                        <Image src={'https://drive.google.com/uc?id=1j1oTPpANQpN0hsOodsgEYo8i3qMyh4XE'} alt="" height={250} width={350} />
                        <CardContent>
                            <h2 style={{ marginTop: 0 }}>K. Sravya</h2>
                            <Typography variant="body2" color="textSecondary" component="p">
                           Pratibha Awardee II<sup>nd</sup>  <br></br> M.Sc Chemistry (2015-17)
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className={styles.card} >
                    <CardActionArea>
                        <Image src={'https://drive.google.com/uc?id=1zeeBwahHLO_wLbtQcW9ZnlRmLMVLt91c'} alt="" height={250} width={350} />
                        <CardContent>
                            <h2 style={{ marginTop: 0 }}>M. Radhika</h2>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Pratibha Awardee II<sup>nd</sup>  <br></br> M.Sc Chemistry (2015-17)
                            </Typography> 
                        </CardContent>
                    </CardActionArea>
                </Card>
                </div>
            {/* <div style={{ marginTop: "2rem", }}>
                <Button variant='contained' color='primary'
                    href="#outlined-buttons" >
                    See More
                </Button>
            </div> */}
        </div >
    )
}

export default Awardees
