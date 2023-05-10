import React from "react";
import { Button, Container, makeStyles } from "@material-ui/core";
import Header from "../Header/MainNavigation";
import HeadingComponent from "../Headings/index";
import { Card } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
// import Autocomplete from "@material-ui/lab/Autocomplete";
import List from "@material-ui/core/List";
// import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    textAlign: "justify",
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
    width: "100%",
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
  inputStyle: {
    display: "flex",
    justifyContent: "center",
    margin: "60px",
    marginTop:0,
    // alignItems: "center",
  },
  CardStyle: {
    // minHeight:'300px',
    height: "400px",
    // minHeight: "150px",
    padding: "5px",
    paddingTop:'2rem',
    margin: "15px",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor:"#bee6f47a"
  },
}));

const SearchFunctionality = () => {
  const classes = useStyles();

  const [searchResults, setsearchResults] = React.useState([]);
  const [searchData, setsearchData] = React.useState("");

  const navStrip1 = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/about" },
    { title: "Administration", link: "/administration" },
    { title: "Academics", link: "/academics" },
    { title: "IQAC", link: "/iqac" },
    { title: "NIRF", link: "/nirf" },
    { title: "ARIIA", link: "/ariia" },
    { title: "Placements", link: "/placements" },
    { title: "Contact Us", link: "/contact-us" },
    { title: "Kosa", link: "/kosa" },
    { title: "Examination Cell", link: "/examination-cell" },
    { title: "Testimonials", link: "/testimonials" },
    { title: "Student Services", link: "/student-services" },
    { title: "Covid-19 Best Practices", link: "/covid-19-best-practices" },
    { title: "Faq", link: "/faqs" },
    { title: "Online services", link: "/student-services/#online-services" },
    {
      title: "UNNT BHARAT ABHIYAN 2.0",
      link: "/student-services/#UNNT-BHARAT-ABHIYAN-2.0",
    },
    {
      title: "UGC Women's Studies Center",
      link: "/student-services/#UGC-Women's-Studies-Center",
    },
    { title: "Statutroy Cells", link: "/student-services/#Statutroy-Cells" },
    { title: "Red Ribbon Club", link: "/student-services/#Red-Ribbon-Club" },
    { title: "Consumer Club", link: "/student-services/#Consumer-Club" },
    { title: "NCC", link: "/student-services/#NCC" },
    { title: "NSS", link: "/student-services/#NSS" },
    {
      title: "Dramatic Association",
      link: "/student-services/#Dramatic-Association",
    },
    { title: "Eco Club", link: "/student-services/#Eco-Club" },
    { title: "covid-19 best practices", link: "/covid-19-best-practices" },
    {
      title: "Digital Library",
      link: "/about/#Campus-at-a-Glance#Digital-Library",
    },
    {
      title: "Museums",
      link: "/about/#Campus-at-a-Glance#Campus-at-a-Glance#Museums",
    },
    {
      title: "Indoor Sports",
      link: "/about/#Campus-at-a-Glance#Indoor-Sports",
    },
    {
      title: "Outdoor Sports",
      link: "/about/#Campus-at-a-Glance#Outdoor-Sports",
    },
    {
      title: "Infrastructure",
      link: "/about/#Campus-at-a-Glance#Infrastructure",
    },
    { title: "Bank", link: "/about/#Campus-at-a-Glance#Bank" },
    { title: "Canteen", link: "/about/#Campus-at-a-Glance#Canteen" },
    { title: "Divyangian", link: "/about/#Campus-at-a-Glance#Divyangian" },
    {
      title: "ICT-Facilities",
      link: "/about/#Campus-at-a-Glance#ICT-Facilities",
    },
    {
      title: "Utility Store",
      link: "/about/#Campus-at-a-Glance#Utility-Store",
    },
    { title: "Language Lab", link: "/about/#Campus-at-a-Glance#Language-Lab" },
    { title: "Homeo Clinic", link: "/about/#Campus-at-a-Glance#Homeo-Clinic" },
    { title: "Kalanikethan", link: "/about/#Campus-at-a-Glance#Kalanikethan" },
    { title: "Girls Hostel", link: "/about/#Campus-at-a-Glance#Girls-Hostel" },
    { title: "Boys Hostel", link: "/about/#Campus-at-a-Glance#Boys-Hostel" },
    {
      title: "Yoga & Meditation Centre",
      link: "/about/#Campus-at-a-Glance#Yoga-Meditation-Centre",
    },
    { title: "History of the College", link: "/about/#History-of-the-College" },
    { title: "Vision & Mission", link: "/about/#Vision-&-Mission" },
    { title: "Campus at a Glance", link: "/about/#Campus-at-a-Glance" },
    { title: "Goals & Objectives", link: "/about/#Goals-&-Objectives" },
    { title: "Code of Conduct", link: "/about/#Code-of-Conduct" },
    { title: "KBNC Certificates", link: "/about/#KBNC Certificates" },
    { title: "Annual Report", link: "/about/#Annual-Report" },
    {
      title: "Organization Structure",
      link: "/administration/#Organization-Structure",
    },
    { title: "Statutory Bodies", link: "/administration/#Statutory-Bodies" },
    {
      title: "Decentralization of Admin",
      link: "/administration/#Decentralization-of-Admin",
    },
    { title: "BOS Members", link: "/administration/#BOS-Members" },
    { title: "Policy Documents", link: "/administration/#Policy-Documents" },
    { title: "Strategic Plan", link: "/administration/#Strategic-Plan" },
    { title: "Principal's Desk", link: "/administration/#Principal's-Desk" },
    {
      title: "Succession List of Principals",
      link: "/administration/#Succession-List-of-Principals",
    },
    { title: "syllabus", link: "/academics/#Syllabus" },
    {
      title: "Undergraduate Programmes",
      link: "/academics/#Syllabus#Undergraduate-Programmes",
    },
    {
      title: "Post-Graduate Programmes",
      link: "/academics/#Syllabus#Post-Graduate-Programmes",
    },
    {
      title: "Diploma Programmes",
      link: "/academics/#Syllabus#Diploma-Programmes",
    },
    { title: "Departments", link: "/academics/#Departments" },
    {
      title: "Department of Telugu",
      link: "/academics/#Departments#Department-of-Telugu",
    },
    {
      title: "Department of English",
      link: "/academics/#Departments#Department-of-English",
    },
    {
      title: "Department of Hindi",
      link: "/academics/#Departments#Department-of-Hindi",
    },
    {
      title: "Department of Botany",
      link: "/academics/#Departments#Department-of-Botany",
    },
    {
      title: "Department of Zoology",
      link: "/academics/#Departments#Department-of-Zoology",
    },
    {
      title: "Department of Chemistry",
      link: "/academics/#Departments#Department-of-Chemistry",
    },
    {
      title: "Department of Mathematics & Statistics",
      link: "/academics/#Departments#Department-of-Mathematics-&-Statistics",
    },
    {
      title: "Department of Physics & Electronics",
      link: "/academics/#Departments#Department-of-Physics-&-Electronics",
    },
    {
      title: "Department of Computer Science & Applications",
      link: "/academics/#Departments#Department-of-Computer-Science-&-Applications",
    },
    {
      title: "Department of Library Science",
      link: "/academics/#Departments#Department-of-Library-Science",
    },
    {
      title: "Department of Commerce And Management",
      link: "/academics/#Departments#Department-of-Commerce-and-Management",
    },
    {
      title: "Department of Physical Education",
      link: "/academics/#Departments#Department-of-Physical-Education",
    },
    {
      title: "Department of MBA",
      link: "/academics/#Departments#Department-of-MBA",
    },
    {
      title: "M.Sc(CS)",
      link: "/academics/#Departments#Department-of-M.Sc(CS)",
    },
    { title: "MCA", link: "/academics/#Departments#Department-of-MCA" },
    { title: "M.COM", link: "/academics/#Departments#Department-of-M.COM" },
    {
      title: "M.Sc(Organic & Analytical Chemistry)",
      link: "/academics/#Departments#Department-of-M.Sc(Organic-&-Analytical-Chemistry)",
    },
    { title: "KBNLMS", link: "/academics/#KBNLMS" },
    { title: "e-Resources", link: "/academics/#e-Resources" },
    { title: "IQAC Reports", link: "/iqac/#AQAR-Reports" },
    { title: "AQAR Reports", link: "/iqac/#IQAC-Reports" },
    { title: "AAA Reports", link: "/iqac/#AAA-Report" },
    {
      title: "IQAC Minutes of Meeting",
      link: "/iqac/#IQAC-Minutes-of-Meeting",
    },
    { title: "Quality Initiatives", link: "/iqac/#Quality-Initiatives" },
    {
      title: "FDP Programmes",
      link: "/iqac/#Quality-Initiatives#FDP-Programmes",
    },
    {
      title: "International Seminars",
      link: "/iqac/#Quality-Initiatives#International-Seminars",
    },
    {
      title: "National Seminars",
      link: "/iqac/#Quality-Initiatives#National-Seminars",
    },
    { title: "Workshops", link: "/iqac/#Quality-Initiatives#Workshops" },
    {
      title: "Add On Programmes",
      link: "/iqac/#Quality-Initiatives#Add-On-Programmes",
    },
    {
      title: "Bridge Courses",
      link: "/iqac/#Quality-Initiatives#Bridge-Courses",
    },
    { title: "TLI methods", link: "/iqac/#Quality-Initiatives#TLI-methods" },
    {
      title: "Interaction Meets",
      link: "/iqac/#Quality-Initiatives#Interaction-Meets",
    },
    {
      title: "Orientation Programmes",
      link: "/iqac/#Quality-Initiatives#Orientation-Programmes",
    },
    { title: "Parents Meet", link: "/iqac/#Quality-Initiatives#Parents-Meet" },
    {
      title: "College Activity Register",
      link: "/iqac/#College-Activity-Register",
    },
    {
      title: "Research Promotion and Monitoring Cell",
      link: "/iqac/#Research-Promotion-and-Monitoring-Cell",
    },
    { title: "ARIIA 2020-21", link: "/ariia#ARIIA-2020-21" },
    { title: "IIC MENU", link: "/ariia#IIC-MENU" },
    { title: "ABOUT NISP", link: "/ariia#About-NISP" },
  ];

  const handleSearch = (value) => {
    setsearchData(value);

    if (value?.trim()?.length > 0) {
      let filteredValues = navStrip1?.filter((e) =>
        e?.title?.toLowerCase()?.includes(value?.toLowerCase())
      );
      // console.log("__search", filteredValues);
      if (filteredValues) {
        return setsearchResults(filteredValues);
      }
    } else {
      return setsearchResults([]);
    }
  };

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.headerStyle}>
        <Container>
          <HeadingComponent data1="Search" data2="" Color={true} />
        </Container>
      </div>
      <Container>
        <Card className={classes.CardStyle}>
          <h3 style={{textAlign:'center'}}>How can we help?</h3>
          <div className={classes.inputStyle}>
            <div
              style={{
                position: "relative",
                //  border: "1px solid blue"
              }}
            >
              <TextField
                variant="outlined"
                // value={this.state.lable}
                // onChange={(e) => handlechange(e.target.value)}
                // onChange={(e)=> this.handlechange(e.target.value)}
                placeholder="Search…"
                style={{
                  color: "#000",
                  // marginLeft: "10px",
                  width: "300px",
                  // border: "1px solid blue",
                  borderRadius: "10px",
                  boxShadow: "0 5px 5px 8px rgb(77 145 155 / 18%)",
                }}
                value={searchData}
                onChange={(e) => handleSearch(e.target.value)}
                inputProps={{ "aria-label": "search" }}
              />
              {searchResults.length > 0 && (
                <div
                  style={{
                    position: "absolute",
                    zIndex: 99,
                    minHeight: "80px",
                    maxHeight: "230px",
                    minWidth: "300px",
                    overflow: "scroll",
                    borderRadius: "6px",
                    boxShadow: "0 2px 5px 1px rgb(64 60 67 / 16%)",
                    background: "#fff ",
                  }}
                >
                  <List component="nav" aria-label="secondary mailbox folders">
                    {searchResults?.map((e, i) => {
                      return (
                        <React.Fragment key={i}>
                          <ListItem
                            button
                            onClick={() => window.open(e.link, "_blank")}
                          >
                            <ListItemText
                              style={{ color: "#000" }}
                              primary={e.title}
                            />
                          </ListItem>
                        </React.Fragment>
                      );
                    })}
                  </List>
                </div>
              )}

              <div></div>
            </div>

            <div>
              <Button
                variant="contained"
                color="primary"
                style={{ height: "53px", width: "120px", marginLeft: "15px" }}
                onClick={() => handleSearch(searchData)}
              >
                Search
              </Button>
            </div>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default SearchFunctionality;
