import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import Header from "../components/Header/MainNavigation";
import HeadingComponent from "../components/Headings/index";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Head from "next/head";
import Footer from "../components/Footer/animatedfooter";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  allBlocks: {
    height: "210px",
    padding: "4rem 0",
    background: "#050e3e",
    [theme.breakpoints.down("sm")]: {
      height: "300px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "370px",
    },
  },
  headerStyle: {
    display: "flex",
    justifyContent: "space-between",
    padding: "2rem 0 1rem 0",
    textAlign: "center",
    background: "#050e3e",
    color: "#fff",
    textTransform: "uppercase",
  },
  verticalTabsRoot: {
    display: "block",
    padding: "2rem 0",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  horizontalTabsRoot: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  cardRoot: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  placementHeading: {
    // fontSize: '35px',
    margin: "0px",
    color: "#07358a",
  },
  contentOne: {
    fontSize: "1rem",
  },
  objectivesContent: {
    display: "flex",
    paddingTop: "12px",
  },
  arrowIcon: {
    marginTop: "4px",
    marginRight: "10px",
  },
  arrowwithContent: {
    fontSize: "1rem",
    margin: "0px",
  },
  camDriveContent: {
    fontSize: "1rem",
    margin: "0px",
    color: "#4c81b7",
  },
  galleryMain: {
    border: "1px solid #07358a",
    backgroundColor: "#07358a",
  },
  galleryHeading: {
    margin: "5px",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: "28px",
    color: "white",
  },
  recruitersMain: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "30px",
  },
}));

const SportsFacility = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <>
      <Head>
        <title>
          SportsFacility - Kakaraparti Bhavanarayana College (Autonomous)
        </title>
      </Head>
      <main>
        <div className={classes.root}>
          <Header />
          {/* <div className={classes.allBlocks} /> */}
          <div className={classes.headerStyle}>
            <Container>
              <HeadingComponent data1="SportsFacility" data2="" Color={true} />
            </Container>
          </div>
          <div className={classes.horizontalTabsRoot}>
            {/* <HorizontalCutomTabs data={data} shadowProp={true} /> */}
            <Card className={classes.cardRoot} variant="outlined">
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  SportsFacility
                </Typography>
                <Typography variant="h5" component="h2">
                  be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  adjective
                </Typography>
                <Typography variant="body2" component="p">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">mobile</Button>
              </CardActions>
            </Card>
          </div>
          
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              margin: "50px 0px",
              flexWrap:"wrap"
            }}
          >
             <div className={classes.GalleryStyle}>
              <Image
                src={"/images/Gallery/Sports_Facilities/1.jpg"}
                alt=""
                width={350}
                height={200}
                style={{ padding: "10px 0px" }}
              />
            </div>
            <div className={classes.GalleryStyle}>
            <Image
              src={"/images/Gallery/Sports_Facilities/2.jpg"}
              alt=""
              width={350}
              height={200}
            />
            </div>
            <div className={classes.GalleryStyle}>
            <Image
              src={"/images/Gallery/Sports_Facilities/3.jpg"}
              alt=""
              width={350}
              height={200}
            />
            </div>
            <div className={classes.GalleryStyle}>
            <Image
              src={"/images/Gallery/Sports_Facilities/4.jpg"}
              alt=""
              width={350}
              height={200}
            />
            </div>
            <div className={classes.GalleryStyle}>

            <Image
              src={"/images/Gallery/Sports_Facilities/5.jpg"}
              alt=""
              width={350}
              height={200}
            />
            </div>
            <div className={classes.GalleryStyle}>

            <Image
              src={"/images/Gallery/Sports_Facilities/6.jpg"}
              alt=""
              width={350}
              height={200}
            />
            </div>
            <div className={classes.GalleryStyle}>

            <Image
              src={"/images/Gallery/Sports_Facilities/CRICKET BOWLI.png"}
              alt=""
              width={350}
              height={200}
            />
            </div>
            <div className={classes.GalleryStyle}>

            <Image
              src={"/images/Gallery/Sports_Facilities/P_20170413_182228.jpg"}
              alt=""
              width={350}
              height={200}
            />
            </div>
            <div className={classes.GalleryStyle}>

            <Image
              src={"/images/Gallery/Sports_Facilities/P_20170413_182231.jpg"}
              alt=""
              width={350}
              height={200}
            />
            </div>
            <div className={classes.GalleryStyle}>

            <Image
              src={"/images/Gallery/Sports_Facilities/P_20170413_182238.jpg"}
              alt=""
              width={350}
              height={200}
            />
            </div>
            <div className={classes.GalleryStyle}>

            <Image
              src={"/images/Gallery/Sports_Facilities/P_20170413_182243.jpg"}
              alt=""
              width={350}
              height={200}
            />
            </div>
            <div className={classes.GalleryStyle}>

            <Image
              src={"/images/Gallery/Sports_Facilities/P_20170413_182245.jpg"}
              alt=""
              width={350}
              height={200}
            />
            </div>
            <div className={classes.GalleryStyle}>

            <Image
              src={"/images/Gallery/Sports_Facilities/P_20170413_182301.jpg"}
              alt=""
              width={350}
              height={200}
            />
            </div>
            <div className={classes.GalleryStyle}>

            <Image
              src={"/images/Gallery/Sports_Facilities/VVR_8394.JPG"}
              alt=""
              width={350}
              height={200}
            />
            </div>
            <div className={classes.GalleryStyle}>

            <Image
              src={"/images/Gallery/Sports_Facilities/VVR_8395.JPG"}
              alt=""
              width={350}
              height={200}
            />
            </div>
            <div className={classes.GalleryStyle}>

            <Image
              src={"/images/Gallery/Sports_Facilities/VVR_8396.JPG"}
              alt=""
              width={350}
              height={200}
            />
            </div>
            <div className={classes.GalleryStyle}>

            <Image
              src={"/images/Gallery/Sports_Facilities/VVR_8397.JPG"}
              alt=""
              width={350}
              height={200}
            />
            </div>
            <div className={classes.GalleryStyle}>

            <Image
              src={"/images/Gallery/Sports_Facilities/VVR_8398.JPG"}
              alt=""
              width={350}
              height={200}
            />
            </div>
            <div className={classes.GalleryStyle}>

            <Image
              src={"/images/Gallery/Sports_Facilities/VVR_8399.JPG"}
              alt=""
              width={350}
              height={200}
            />
            </div>
            <div className={classes.GalleryStyle}>

            <Image
              src={"/images/Gallery/Sports_Facilities/VVR_8400.JPG"}
              alt=""
              width={350}
              height={200}
            />
            </div>
            <div className={classes.GalleryStyle}>

            <Image
              src={"/images/Gallery/Sports_Facilities/VVR_8401.JPG"}
              alt=""
              width={350}
              height={200}
            />
            </div>
            <div className={classes.GalleryStyle}>

            <Image
              src={"/images/Gallery/Sports_Facilities/VVR_8402.JPG"}
              alt=""
              width={350}
              height={200}
            />
            </div>
            <div className={classes.GalleryStyle}>

            <Image
              src={"/images/Gallery/Sports_Facilities/VVR_8403.JPG"}
              alt=""
              width={350}
              height={200}
            />
            </div>
            <div className={classes.GalleryStyle}>

            <Image
              src={"/images/Gallery/Sports_Facilities/VVR_8404.JPG"}
              alt=""
              width={350}
              height={200}
            />
            </div>
            <div className={classes.GalleryStyle}>

            <Image
              src={"/images/Gallery/Sports_Facilities/VVR_8405.JPG"}
              alt=""
              width={350}
              height={200}
            />
            </div>
            <div className={classes.GalleryStyle}>

            <Image
              src={"/images/Gallery/Sports_Facilities/VVR_8406.JPG"}
              alt=""
              width={350}
              height={200}
            />
            </div>
            <div className={classes.GalleryStyle}>

            <Image
              src={"/images/Gallery/Sports_Facilities/VVR_8524.JPG"}
              alt=""
              width={350}
              height={200}
            />
            </div>
            <div className={classes.GalleryStyle}>

            <Image
              src={"/images/Gallery/Sports_Facilities/VVR_8525.JPG"}
              alt=""
              width={350}
              height={200}
            />
            </div>
            <div className={classes.GalleryStyle}>

            <Image
              src={"/images/Gallery/Sports_Facilities/VVR_8526.JPG"}
              alt=""
              width={350}
              height={200}
            />
            </div>
            <div className={classes.GalleryStyle}>

            <Image
              src={"/images/Gallery/Sports_Facilities/VVR_8527.JPG"}
              alt=""
              width={350}
              height={200}
            />
            </div>
            <div className={classes.GalleryStyle}>

            <Image
              src={"/images/Gallery/Sports_Facilities/VVR_8528.JPG"}
              alt=""
              width={350}
              height={200}
            />
            </div>
            <div className={classes.GalleryStyle}>

            <Image
              src={"/images/Gallery/Sports_Facilities/VVR_8544.JPG"}
              alt=""
              width={350}
              height={200}
            />
            </div>
            <div className={classes.GalleryStyle}>

            <Image
              src={"/images/Gallery/Sports_Facilities/VVR_8545.JPG"}
              alt=""
              width={350}
              height={200}
            />
            </div>
          </div>
          {/* <div className={classes.galleryMain}>
            <h2 className={classes.galleryHeading}>OUR RECRUITERS</h2>
          </div> */}
          {/* <Container style={{ padding: "30px 0px" }}>
            <div className={classes.recruitersMain}>
              <Card variant="outlined">
                <Image
                  src={"/images/accenture.jpg"}
                  alt=""
                  width={150}
                  height={100}
                />
              </Card>
              <Card variant="outlined">
                <Image
                  src={"/images/axis.png"}
                  alt=""
                  width={150}
                  height={100}
                />
              </Card>
              <Card variant="outlined">
                <Image
                  src={"/images/apollo.png"}
                  alt=""
                  width={150}
                  height={100}
                />
              </Card>
              <Card variant="outlined">
                <Image
                  src={"/images/delloit.png"}
                  alt=""
                  width={150}
                  height={100}
                />
              </Card>
              <Card variant="outlined">
                <Image
                  src={"/images/flipkart.png"}
                  alt=""
                  width={150}
                  height={100}
                />
              </Card>
              <Card variant="outlined">
                <Image
                  src={"/images/hcl.png"}
                  alt=""
                  width={150}
                  height={100}
                />
              </Card>
              <Card variant="outlined">
                <Image
                  src={"/images/icicibank.png"}
                  alt=""
                  width={150}
                  height={100}
                />
              </Card>
            </div>
            <div className={classes.recruitersMain}>
              <Card variant="outlined">
                <Image
                  src={"/images/hgs1.jpg"}
                  alt=""
                  width={150}
                  height={100}
                />
              </Card>
              <Card variant="outlined">
                <Image
                  src={"/images/justdial.png"}
                  alt=""
                  width={150}
                  height={100}
                />
              </Card>
              <Card variant="outlined">
                <Image
                  src={"/images/genpact.png"}
                  alt=""
                  width={150}
                  height={100}
                />
              </Card>
              <Card variant="outlined">
                <Image
                  src={"/images/yesbank.png"}
                  alt=""
                  width={150}
                  height={100}
                />
              </Card>
              <Card variant="outlined">
                <Image
                  src={"/images/capital.png"}
                  alt=""
                  width={150}
                  height={100}
                />
              </Card>
              <Card variant="outlined">
                <Image
                  src={"/images/firstsource.png"}
                  alt=""
                  width={150}
                  height={100}
                />
              </Card>
              <Card variant="outlined">
                <Image
                  src={"/images/ilm.png"}
                  alt=""
                  width={150}
                  height={100}
                />
              </Card>
            </div>
            <div className={classes.recruitersMain}>
              <Card variant="outlined">
                <Image
                  src={"/images/infoyis.png"}
                  alt=""
                  width={150}
                  height={100}
                />
              </Card>
              <Card variant="outlined">
                <Image
                  src={"/images/innov.png"}
                  alt=""
                  width={150}
                  height={100}
                />
              </Card>
              <Card variant="outlined">
                <Image
                  src={"/images/magna.png"}
                  alt=""
                  width={150}
                  height={100}
                />
              </Card>
              <Card variant="outlined">
                <Image
                  src={"/images/paytm.png"}
                  alt=""
                  width={150}
                  height={100}
                />
              </Card>
              <Card variant="outlined">
                <Image
                  src={"/images/phasis.png"}
                  alt=""
                  width={150}
                  height={100}
                />
              </Card>
              <Card variant="outlined">
                <Image
                  src={"/images/sinvey.png"}
                  alt=""
                  width={150}
                  height={100}
                />
              </Card>
              <Card variant="outlined">
                <Image
                  src={"/images/tcs.png"}
                  alt=""
                  width={150}
                  height={100}
                />
              </Card>
            </div>
          </Container> */}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default SportsFacility;
