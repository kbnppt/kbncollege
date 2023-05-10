import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles, Theme, createStyles, makeStyles, } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { withWidth } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

const BotanyAchievements = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <h2 style={{ textDecoration: "underline" }}> Staff</h2>
            <Accordion square expanded={expanded === 'panel0'} onChange={handleChange('panel0')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel0' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                    style={{ backgroundColor: "darkblue", color: "white" }}
                >
                    <Typography >Dr. G. Ramesh</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box>
                        <h2 style={{ textDecoration: "underline" }}>2019-20:</h2>
                        <ul>
                            <li>Acted as Jury Member for State Level Science Fare, organized by Government of Andhra Pradesh at Amaravathi on “Periodic Table of Chemical Elements: Impact on Human welfare” on 24th September, 2019.</li>
                            <li>Attended as BOS Member for JMJ College, Tenali on 7th September, 2019.</li>
                            <li>Acted as Jury Member for Amaravathi Balostavam at SRR & CVR Govt. Degree College, Vijayawada from 29th to 31st August, 2019.</li>
                            <li>Acted as Resource Person for delivering Guest Lecture on “Endemism of Plants” at JMJ College, Tenali on 3rd August, 2019.</li>
                            <li>Attended One Day Workshop on “Organic Farming” at Guntur organized by Rythu Nestham Foundation on 21st July, 2019.</li>
                        </ul>
                        <h2 style={{ textDecoration: "underline" }}>2018-2019:</h2>
                        <ul>
                            <li>Attended as BOS Member for Maris Stella College, Vijayawada on 8th March, 2019.</li>
                            <li>Attended as BOS Member for Ch. S. D. St. Theresa’s College for Women, Eluru on 14th February, 2019.</li>
                            <li>Attended for One Day Seminar on Plant and People Towards a Parallel Journey, organized by Department of Botany, Andhra Loyola College, Vijayawada on 4th February, 2019.</li>
                            <li>Acted as Jury Member for Science INSPIRE (MANAK) organized by Department of School Education at St. Joseph’s English Medium School, Vijayawada from 27th to 29th January, 2019.</li>
                            <li>Acted as Jury Member for Dr. Sudha Science Quest, organized by St. John’s School, Vijayawada on 15th December, 2018.</li>
                            <li>Participated in the Poster Presentation in India International Science Festival organized by DST Government of India at Lucknow from 5th to 8th October, 2018.</li>
                            <li>Attended a Two – Day National Workshop on “Experimental Approach Vrikshaavaran” organized by Dept. of Botany, PB Siddhartha College, Vijayawada on 17th & 18th August, 2018.</li>
                            <li>Attended Two – Day Academies Lecture Workshop on “Biodiversity, Conservation for Sustainable Planet” organized by Department of Botany, Adikavi Nannayya University on 30th & 31st July, 2018.</li>
                        </ul>
                        <h2 style={{ textDecoration: "underline" }}>Paper Publication:</h2>
                        <ul>
                            <li>Chapter entitled “The Orchid Root: Anatomical and Ecological Adaptability with Special Reference to Bulbophyllum and Dendrobium” in the Book of BMPO 2018 Proceedings: Orchid Biology: Recent Trends and Biology, Springer International in 2019. (Accepted for Publication).</li>
                            <li>Chapter entitled “Orchid Seed Ultra Structure: Ecological and Taxonomical Implications with Reference to Epidendroideae (Orchidaceae) in the Book of BMPO 2018 Proceedings: Orchid Biology: Recent Trends and Biology, Springer International in 2019. (Accepted for Publication).</li>
                            <li>Published a paper entitled “Morpho-anatomical and molecular characters of Bulbophyllum and Dendrobium species found in Southern Ghats of India” in the Journal of “Current Horticulture” 6(1) ISSN No:2347-7377, page no 50-56 on January-June 2019.</li>
                        </ul>
                        <h2 style={{ textDecoration: "underline" }}>Any other:</h2>
                        <ul>
                            <li>Acted as Judge for 45th Jawaharlal Nehru National Science, Mathematics and Environment Exhibition for Children at Z.P. Boys High School, Gannavaram on 29th December, 2017.</li>
                        </ul>
                        <h2 style={{ textDecoration: "underline" }}>Publications:</h2>
                        <ul>
                            <h3 style={{ textDecoration: "underline" }}>National:</h3>
                            <li>RAMUDU, S., RAMESH, G. AND KHASIM, S.M. 2012. Molecular and Morphological Studies in Coelogyne nervosa Rich., an endemic Orchid from South India.  J. Orchid. Society of India (26) 53-58.</li>
                            <li>RAMESH, G. AND KHASIM, S.M. 2015. Molecular studies in Dendrobium species (Orchidaceae) collected from south India, orchid society of India. 61-65.</li>
                            <li>KHASIM, S.M. AND RAMESH, G. 2015. Molecular studies in some Dendrobiinae (Orchidaceae) using SDS-PAGE and RAPD markers, orchid society of India. (Accepted for publication).</li>
                            <li>RAMESH AND S.M. KHASIM, 2013. Morpho-Anatomical and Molecular Studies in Bulbophyllum and Dendrobium from Sikkim Himalaya. 100th Indian Science Congress, 139.</li>
                            <li>RAMESH AND S.M. KHASIM, 2017. Morpho-Anatomical and Molecular studies in Bulbophyllum and Dendrobium orchids from the Southern Ghats of India, Current Horticulture, Accepted for publication (August 2017).</li>
                        </ul>
                        <ul>
                            <h3 style={{ textDecoration: "underline" }}>Details of International Paper Published: International:</h3>
                            <li>KHASIM, S.M. AND RAMESH, G. 2010. Molecular and morphological studies in Vanda tessellate, an epiphytic orchid from Eastern Ghats of India. Proceedings of ISHS 1st International Orchid Symposium, Acta Horticulture (Belgium) 878: 63-70.</li>
                            <li>KHASIM, S.M., RAMUDU, J. AND RAMESH,G. 2011. The orchid diversity and conservation in India Proceedings of 20th World Orchid Conference, Singapore (Accepted for publication)</li>
                            <li>KHASIM, S.M. AND RAMESH, G. 2015. Molecular studies in some Dendrobiinae (Orchidaceae) using SDS-PAGE and RAPD markers, orchid society of India. (Accepted for publication).</li>
                            <li>KHASIM, S.M., RAMANA RAO, T,V., RAMESH, G. AND HEMALATHA, S. 2013. Structure and development of Fruit and Seed of Jatropha gossypiifolia B Bahadur et al., (eds.) Jatropha, challenges for a NEW ENERGY CROP : Volume 2: Genetic Improvement and Biotechnology, Springer Science.</li>
                            <li>RAMESH, G., RAMUDU, J., KHASIM, S.M. AND THAMMASIRI, K. 2016. Genetic diversity in some Indian Bulbophyllinae (Orchidaceae) with reference to Ecological adaptability and Phylogenetic significance.  1st International Symposium on Tropical and Subtropical ornamentals – Acta Horticulturae (Accepted for publication).</li>
                        </ul>
                        <h2 style={{ textDecoration: "underline" }}>Publication of Book:</h2>
                        <ul>
                            <li>“THE ORCHICHIDACEAE: MOLECULAR AND ANATOMICAL CHARACTERIZA-TION”, 2017, Lambert Academic Publishers, Germany</li>
                        </ul>
                        <h2 style={{ textDecoration: "underline" }}>Paper presentation:</h2>
                        <ul>
                            <li>Presented a paper entitled “Anatomical Challenges and Molecular Studies in Bulbophyllum and Dendrobium (Orchid) from Eastern Himalayas of India in the International Symposium on Biodiversity of Medicinal Plants & Orchids: Emerging Trends and Challenges BMPO 2018 organized by Acharya Nagarjuna Unievrsity, Guntur from 9th – 11th February, 2018.</li>
                        </ul>
                        <h2 style={{ textDecoration: "underline" }}>Participation:</h2>
                        <ul>
                            <h3 style={{ textDecoration: "underline" }}>2017-18:</h3>
                            <li>Attended Workshop on Ecological Data Collection & Analysis” organized by Maris Stella College, Vijayawada on 24th July, 2017.</li>
                        </ul>
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel1' ? <RemoveIcon style={{ color: "white" }} /> : <AddIcon style={{ color: "white" }} />}
                    style={{ backgroundColor: "darkblue", color: "white" }}
                >
                    <Typography >Dr. G. Kranthi Kumar</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box>
                        <h2 style={{ textDecoration: "underline" }}>2019-20:</h2>
                        <div>
                            <ul>
                                <h3 style={{ textDecoration: "underline" }}>Memberships:</h3>
                                <li>Technical Board Member for Asian Journal of Agricultural Research</li>
                                <li>Member for Journal of Green Reports Ariviyal Publishers</li>
                                <li>Reviewer Panel Member for the World Journal of Agricultural Research</li>
                                <li>Panel Member for Green Reports Journal</li>
                                <li>Member for The Indian Science Congress Association</li>
                                <li>Life Time Member for Eurasia Research Journal</li>
                                <li>Life Time Member for International Journal of Creative Research Thoughts</li>
                                <li>Life Time Member for Health Care & Biological Sciences Research Association (HBSRA).</li>
                                <li>Advisory Board Member in World Journal of Pharmaceutical Research (From 2019)</li>
                                <li>Editorial Board Member for International Journal of Pharmacy and Biological Science (From 2019)</li>
                            </ul>
                        </div>
                        <h2 style={{ textDecoration: "underline" }}>Book Publications:</h2>
                        <div>
                            <ul>
                                <li>Characterization of Rhizobacterial Strains from Vigna Trilobata, published by Lambert Academic Publications in 2019, ISBN No. 978-620-2-05215-3.</li>
                            </ul>
                        </div>
                        <h2 style={{ textDecoration: "underline" }}> Publications:</h2>
                        <div>
                            <ul>
                                <li>Published a paper entitled “Anti-Oxidant Activity and Production of Secondary Metabolities of Adult Plant and Invitro Calli of Anodendron Paniculatum” in the Journal of Applied and Natural Science, ISSN No. 2230-7605 2231-3272, Vol.11, Issue 3, Pg. No. 632-635, August, 2019.</li>
                                <li>Published a paper entitled “Studies on Phyto – Chemical Constituents and Anti-Bacterial activity of Endemic Medicinal Plant Anodendron Paniculatum” in the International Journal of Pharmacy and Biological Sciences, ISSN No. 2230-7605, 2321-3272, Vol.9, Issue 3, Pg. No. 244-248, July, 2019.</li>
                                <li>Published a paper entitled “Polygalacturonase Production by Aspergillus Nominus MR103 in Solid State Fermentation using Agro-Industrial Wastes” in the Journal of Applied and Natural Science, ISSN No.(P) 0974-9411, ISSN No. (E): 2321-5209, Vol.11, Issue 3, Pg. No. 305-310, 2019.</li>
                            </ul>
                        </div>
                    </Box>
                </AccordionDetails>
            </Accordion>
            {/* <h2 style={{ textDecoration: "underline" }}> Student Achievements</h2> */}
            <div>
                <h1 style={{ textDecoration: "underline" }}>Student Achievements</h1>
                <ul>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1ZRvADuqbX-tQQ-_HyyJrzoVB6ha5FVHK' target='__blank'>STUDENT ACHIVEMENTS(2018-2019)</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1s_SixRmuZHHIFryp_YSnOoc9baAzbYtS'>STUDENT ACHIVEMENTS(2017-2018)</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1vpFa_L0v6X3nG5IUhZSv2Mi639my4518' target='__blank'>STUDENT ACHIVEMENTS(2016-2017)</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1Xf9i3UjPF8L0MdGnJZB9VsQPDsd_CDJq' target='__blank'>STUDENT ACHIVEMENTS(2015-2016)</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1wNFzrU-I3EWXgKVdDRnKp6Hapdd3TFkK' target='__blank'>STUDENT ACHIVEMENTS(2014-2015)</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1H8BgvDwqEuBClhYSR-HDsm3gEZslJat-' target='__blank'>STUDENT ACHIVEMENTS(2013-2014)</a></li>
                    <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1nDQwQq99L0CYAcU9RzA89u49W_8v8p_o' target='__blank'>STUDENT ACHIVEMENTS(2012-2013)</a></li>
                </ul>
            </div>
        </div>


    )
}

export default BotanyAchievements;