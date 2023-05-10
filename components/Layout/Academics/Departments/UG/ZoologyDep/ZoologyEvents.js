import React from 'react'
import {getRequiredImgs} from '../../../../../Api/index'

const ZoologyEvents = () => {
    const [apidata,setApiData] = React.useState([])

    const initialLoad = async() =>{
        let govt_folderId = '1hHuKyZla9FnZ-vnA_i2zaLDYI24C78Kk';
        let data = await getRequiredImgs(govt_folderId);
        setApiData(data?.files)
    }


    React.useEffect(()=>{
        initialLoad()
    },[])


    const getImgData = (data) =>{
        let value = data?.split('%20')?.join(' ');
        let filterValue = apidata?.find((e)=>e?.name == value);
        if(filterValue){
            return filterValue?.id
        }
        return '1mOfBNITDbkyBcSwLI0A87bJY5nvNNm4E'
    }
    return (
        <div>
            <h1>ACADEMIC YEAR 2020-2021:</h1>
            <ul>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('webinar%20on%20biology%20biotechnology%20and%20biodiversity(bbb)%2003-10-20')}`} target='__blank'>Webinar On Biology,Biotechnology and Biodiversity(BBB) On 3rd October,2020</a></li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('webinar%20on%20biology%20biotechnology%20and%20biodiversity(bbb)%2003-10-20')}`} target='__blank'>Webinar on Biotechnology and Its Applications on 20th July, 2020</a></li>
            </ul>
            <h1>ACADEMIC YEAR 2019-2020</h1>
            <ul>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('1-World%20Heart%20Day%202019.pdf')}`} target='__blank'>Programme on “World Heart Day” on 28th September, 2019 in association with NSS Unit.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('2-WORLD%20DEAF%20DAY.pdf')}`} target='__blank'>Awareness Programme on “World Deaf Day” on 26th September, 2019.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('3-WORLD%20ALZHIEMERS.pdf')}`} target='__blank'>World Alzheimer’s Day on 21st September, 2019</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('4-GUEST%20LECTURE%20-%2030.08.2019.pdf')}`} target='__blank'>Guest Lecture on “Enzymes in Biological Processes” on 30th August, 2019.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('rr.pdf')}`} target='__blank'>Resource Person: Dr. Debashis Das, IISc, Bangalore.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('ZOOLOGY%20SCIENCE%20EXPO%20-%202019.pdf')}`} target='__blank'>Science Expo from 21st to 23rd August, 2019</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('6-GUEST%20LECTURE-29.7.2019.pdf')}`} target='__blank'>Guest Lecture on “Management of Dairy Animals” on 27th July, 2019. Resource Person: Dr. G. Srividya, Asst. Prof. Dept. of Veterinary Pharmacology and Toxicology, NTR College of Veterinary Science, Gannavaram.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('7-COP%20PROGRAMME.pdf')}`} target='__blank'>Career Orientation Programme to B.Sc. (CBZ) Students on “Scope of Zoology in Higher Studies” by Dr. V. Subhashini, Head, Dept. of Zoology on 24th June, 2019.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('8-G.L-22.06.2019.pdf')}`} target='__blank'>Guest Lecture on “Environmental Foot Prints and Sustainable Development” on 22nd June, 2019. Resource Person: Prof. K. Kameswara Rao, Former Prof. Dept. of Environmental Studies, Andhra University, Visakhapatnam.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('9-BLOOD%20GROUPING%20PHOTOS.pdf')}`} target='__blank'>Blood Grouping & BMI to All 1st Year Degree Students of KBN in association with Red Ribbon Club from 22nd to 26th July, 2019.</a> </li>
            </ul>
            <h1>ACADEMIC YEAR 2018-2019</h1>
            <ul>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('conversionofsparrows.pdf')}`} target='__blank'>Awareness Programme on “Conservation of Sparrows” in view of World Sparrows Day on 20th March, 2019.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('foldscope.pdf')}`} target='__blank'>Guest Lecture on “Fold Scope Microscope” on 16th February, 2019. Resource Person: Dr. Ch. Tulasi Masthanamma, Lecturer in Zoology, Govt. College for Women, Guntur.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('abhijith.pdf')}`} target='__blank'>Interaction Session with Prof. Abhijith Das, IIT, Khargpur, on 9th February, 2019</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('fishfood.pdf')}`} target='__blank'>Hand on Training Programme on “Preparation of Fish Food” for B.Sc. III CBZ Students on 7th December, 2018.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('Field%20Trip.pdf')}`} target='__blank'>Field Visit to “Live Stock Research Station, Sri Venkateswara Veterinary University, LAM FARM, Guntur, AP” on 1st October, 2018.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('SCIENCE%20EXPO.pdf')}`} target='__blank'>Science Expo – 2018 from 9th to 11th August, 2018.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('BLOOD%20GROUPING.pdf')}`} target='__blank'>Blood Grouping to I & II year Degree students from 11th – 14th July, 2018</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('Career%20Orientation%20Programme.pdf')}`} target='__blank'>Career Orientation Programme on “Scope of Zoology in Higher Education” to II & III Year B.Sc. (CBZ) Students on 5th July, 2018.</a> </li>

            </ul>
            <h1>ACADEMIC YEAR 2017-2018</h1>
            <ul>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('1-19.2.2018.pdf')}`} target='__blank'>Community Awareness Programme on “Know your Blood Group” is conducted at Ambapuram Village on 19th February, 2018.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('2-%2014.2.2018.pdf')}`} target='__blank'>A Guest Lecture on “Animal Welfare, Environment & Veganism” by Mr. Ravi Keerthi, Secretary, Jeevakarunya Ashramam on 14th February, 2018.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('4-27.1.2018.pdf')}`} target='__blank'>Field Trip to “Agricultural College, Bapatla & RK Shrimp Farms, Mutthayapalem, Bapatla” on 3rd February, 2018.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('4-27.1.2018.pdf')}`} target='__blank'>Career Orientation Programme on “Career Options in Zoology” by Dr. V. Subhashini, HoD, Zoology on 27th January, 2018.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('5-16.11.2017.pdf')}`} target='__blank'>One Day Workshop on “Medical Coding” by Smt. K. Swathi, Managing Director, VAWE Institute of Technical Training on 16th November, 2017.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('6-26.9.2017.pdf')}`} target='__blank'>Organized an Awareness Programme on “Prevention & Control of Deafness”(In view of Day of the Deaf) on 26th September, 2017.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('7-15.9.17.pdf')}`} target='__blank'>Field Trip to “Proddutur Poultry Farm”, Kankipadu on 15th September, 2017.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('8-%2030.8.2017.pdf')}`} target='__blank'>Organized an Awareness Programme on “SAVE THE RIVERS” on 30th& 31st August, 2017.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('9-20.7-17.pdf')}`} target='__blank'>Observed & celebrated Mendel’s (Father of Genetics) 195th Birthday & conducted “Competition on Mendel’s contributions” on 20th July, 2017.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('10-21.6.17.pdf')}`} target='__blank'>Awareness Programme on “International Yoga Day” by Smt. Lalitha, Lecturer, Sri. Bapanayya School, Vijayawada& Dr. K. Surya Kumari, Lecturer, PSCMR College of Eng. & Tech, VJA on 21st June, 2017.
                </a> </li>
            </ul>
            <h1>ACADEMIC YEAR 2016-2017</h1>
            <ul>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('11-28.1.2017.pdf')}`} target='__blank'>Field Trip to Gilakaladindi (Machilipatnam) on 28th January 2016.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('12-5-9.1.2017.pdf')}`} target='__blank'>DST Sponsored INSPIRE (Five Day Residential Science Camp) Programme from 5th – 9th January, 2017.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('14%20-%209.12.2016.pdf')}`} target='__blank'>Inauguration of Internship Programme on “Medical Transcription”. Chief Guest: Sri. J. Panduranga Rao, Director, Academic & Planning on 9th December, 2016.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('13-14.12.2016.pdf')}`} target='__blank'>Awareness Programme on “Energy Conservation (In view of Energy Conservation Day)” by Dr. P. B. Sandhya Sri, HOD, Dept. of Physics on 14th December, 2016.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('15-1.12.2016.pdf')}`} target='__blank'>Awareness Programme on “AIDS” in view of World AIDS Day on 1st December, 2016.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('17%20-%2024.9.16.pdf')}`} target='__blank'>Guest Lecture on “Medical & Medical Transcription” on 24th September 2016 by Sri. P. Satyanarayana, Certified Medical Coder.</a> </li>

                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('18-%201.7.16.pdf')}`} target='__blank'>Guest Lecture on “Coastal Marine Biodiversity of India” by Prof. C. Annapurna, Marine Biological Laboratory, Department of Zoology, Andhra University on 1st July, 2016.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('BLOOD%20GROUPING.pdf')}`} target='__blank'>International Day of Yoga Celebrations on 2nd June 2016. Resource Person: Sri. Sudhakar, Yoga Trainer.</a> </li>


            </ul>
            <h1>ACADEMIC YEAR 2015-2016</h1>
            <ul>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('20-%2019.3.2016.pdf')}`} target='__blank'>Awareness Programme on Conservation & Protection of Sparrows in view of World Sparrows Day (20.03.2016) on 19th March, 2016.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('21-1.2.16.pdf')}`} target='__blank'>Guest Lecture on Geospatial Technology in Habitat Location and Conservation of Species by Ramachandra Prasad. Pillutla, Assistant Professor, Departmental of Spatial Lab, IIIT, Hyderabad on 1st February, 2016.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('22%20-%2010.12.2015.pdf')}`} target='__blank'>Field Trip to Kaikaluru Fish Farms, Atapaka Bird Sancturary & Kolleru lake on 10th December, 2015.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('23-%207.11.2015.pdf')}`} target='__blank'>Conducted an Invited lecture on Role of Biotechnology in Genetically Modified Products by Dr. K. Yogi, Mansanto India Ltd, Tech. Development Company, Guntur on 7th November, 2015.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('24--13.10.2015.pdf')}`} target='__blank'>FIELD TRIP TO Nilagiri Education Society, Vermi Composting centre Atmakuru,Mangalgiri Mandal, Guntur on 13th October, 2015.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('25-%2029.9.2015.pdf')}`} target='__blank'>Conducted Awareness Programme on Physiology of Heart in view of World Hearts Day and explained about the working mechanism of heart to other group students on 29th September, 2015.</a> </li>

                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('26-20.8.2015.pdf')}`} target='__blank'>Organized Role Play on Mosquito bite on 20th August, 2015.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('27-29.7.2015.pdf')}`} target='__blank'>Conducted awareness programme on “Tigers Day”. In view of it Intra Collegiate Seminar Competitions are conducted on 29th July, 2015. </a> </li>
            </ul>
            <h1>ACADEMIC YEAR 2014-2015</h1>
            <ul>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('28%20-%2027.2.2015.pdf')}`} target='__blank'>Conducted PPT Competitions on Role of Science inSwatch Andhra Pradesh in view of National Science Day Celebrations on 27thFebruary, 2015.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('29-6&7.1.2015.pdf')}`} target='__blank'>Organized International Conference on Genomics and Stem Cells on 6th & 7th January, 2015.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('30-8.12.2014.pdf')}`} target='__blank'>Field Trip to Uppalapadu Bird Sanctuary on 8th December, 2014 (I, II, III CBZ Students).</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('31-21.11.2014.pdf')}`} target='__blank'>Guest Lecture on “Super Cyclone” Resource Person: Prof. K. P. R. Vital Murthy, Retd. Prof. of Oceanography and Meteorology, Andhra University on 24th November, 2014.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('32-20.10.2014.pdf')}`} target='__blank'>Conducted Awareness program on Breast Cancer & its Prevention by Dr. N. Subba Rao (Oncologist) in collaboration with Roots Health Foundation Vijayawada on 20th October, 2014.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('33-%2011-13.9.2014.pdf')}`} target='__blank'>Conducted Hands on Training Program on FIRST AID from 11.08.2014 to 13.08 2014 and were issued certificates. Resource person- Dr. Kola Vijaya Sekhar Associate Professor, NTR Health University, Vijayawada. –15 students of B.Sc. CBZ were trained in First Aid.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('34-%2016.8.2014.pdf')}`} target='__blank'>Conducted an Invited Lecture on Importance ofFirst Aid in daily Life. Resource person: Dr. Kola Vijaya Sekhar, Assoc. Prof. NTR Health University, Vijayawada on 16thAugust, 2014.</a> </li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('35%20-%2022.7.2014.pdf')}`} target='__blank'>Conducted Essay Writing Competitions in view of Johann Gregor Mendel’s 192nd Birth Anniversary Celebrations on 22ndJuly, 2014</a> </li>
            </ul>
            <h1>ACADEMIC YEAR 2013-2014:</h1>
            <ul>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('36-5.3.2014.pdf')}`} target='__blank'>Guest Lecture by P. Suresh Asst. Director of Fisheries on Role of weeds in aquaculture on 5thMarch, 2014.</a></li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('37%20-28.2.2014.pdf')}`} target='__blank'>Organized National Science Day Celebrations and conducted Essay Writing, PPT Competitions for CBZ Students on 28th February, 2014.</a></li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('38%20-22.2.14.pdf')}`} target='__blank'>Guest Lecture by Dr. Veera Bramachari Asst. Prof. in Biotechnology, Krishna University on Role of Biotechnology on Fisheries on 22nd February, 2014.</a></li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('39%20-7.2.2014.pdf')}`} target='__blank'>Field Trip to CIFA on 7th February, 2014.</a></li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('40%20-13.11.2013.pdf')}`} target='__blank'>Guest Lecture by Sri Sk. Chand Basha on “Epidemics of Dengue Fever” on 13th November, 2013.</a></li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('41-7-11.10.2013.pdf')}`} target='__blank'>DST Sponsored INSPIRE (Five Day Residential Science Camp) Programme from 7th – 11th October, 2013.</a></li>
            </ul>
            <h1>ACADEMIC YEAR 2012-2013:</h1>
            <ul>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('42%20-1.3.2013.pdf')}`} target='__blank'>Field Trip to CIFA (Central Institute of Fresh Water Aquaculture) on 1st March, 2013.</a></li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('43-7.2.13.pdf')}`} target='__blank'>Guest Lecture on “Applications of Biotechnology in Aquaculture” by Dr. B. Vijaya Lakshmi, Asst. Prof in Bio Technology, Krishna University on 7th February, 2013.</a></li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('44-1.12.12.pdf')}`} target='__blank'>World AIDS Day on 1st December, 2012.</a></li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('45-29.11.12.pdf')}`} target='__blank'>National Seminar on “Climate Change – A Challenge to Sustainable Development” NSCCSD – 2012) on 29th& 30thNovember, 2012.</a></li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('46-2-7.10.2012.pdf')}`} target='__blank'>Observed & Celebrated World Wild Life Week Celebrations from 2nd- 7th October, 2012.</a></li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('47-23.9.12.pdf')}`} target='__blank'>Awareness Programme on Epidemic diseases Prevention & Control by Sri V. Jagan Mohan Rao, Retired. HOD, Zoology on 23rd September, 2012.</a></li>
                <li style={{ color: "Highlight" }}><a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('48-18.7.2012.pdf')}`} target='__blank'>Career Guidance Programme on State & Central Services by Sk. Chand Basha on 18th July, 2012.</a></li>
            </ul>

        </div>
    )
}

export default ZoologyEvents;