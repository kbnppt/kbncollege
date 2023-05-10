import React from 'react'

const MBAMore = (props) => {

    const [apidata,setApiData] = React.useState(props?.data)

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
            <div>
                <h3>Best Practices</h3>
                <h4>BUSINESS LABS</h4>
                <ul>
                    <li style={{ color: "Highlight" }}> <a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('BEST%20PRACTICE.pdf')}`} target='__blank'>Continuous Business Lab hours for the students to hone their leadership, team building, inter-personal and employability skills among the students.</a></li>
                    <li style={{ color: "Highlight" }}> <a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('MBA%20BEST%20PRACTICE%202.pdf')}`} target='__blank'>HINDU News Paper Club</a></li>
                </ul>
                <div>
                    <h3>Innovative Practices</h3>
                    <ul>
                        <li style={{ color: "Highlight" }}> <a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('INNOVATIVE%20PRACTICES%202018-19.pdf')}`} target='__blank'>INNOVATIVE PRACTICES 2018-19</a></li>
                        <li style={{ color: "Highlight" }}> <a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('INNOVATIVE%20PRACTICES%20MBA.pdf')}`} target='__blank'>MEET THE CEO & MOOCS</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Add on programs</h3>
                    <p>INSERT table</p>
                </div>
                <div>
                    <h3>Consultancy Services</h3>
                    <ul>
                        <li style={{ color: "Highlight" }}> <a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('CONSULTANCY%20SERVICE.Business%20Brains%20-%202021-22%20-%20MBA.pdf')}`} target='__blank'>MASTER OF BUSINESS ADMINISTRATION(THE MBA PROGRAMME) on BUSINESS BRAINS</a></li>
                        <li style={{ color: "Highlight" }}> <a style={{ color: "Highlight" }} href={`https://drive.google.com/uc?id=${getImgData('MBA_INDUSTRY%20_CONSULTANCY.pdf')}`} target='__blank'>MBA INDUSTRY CONSULTANCY-LATEST FOR WEBSITE</a></li>
                    </ul>
                    BOS CERTIFICATE

                </div>
                <div>
                    <h3>BOS</h3>
                    <ul>
                        <li style={{ color: "Highlight" }}> <a style={{ color: "Highlight" }} href='https://drive.google.com/uc?id=1DIlgfrPm43Yt7P4LKPKAFalwGnBtyEcW' target='__blank'>BOS CERTIFICATE</a></li>
                    </ul>
                </div>
                <div>
                    <h3>VIDEOS</h3>
                    <ul>
                        <li style={{ color: "Highlight" }}> <a style={{ color: "Highlight" }} href='https://youtu.be/lj4yIiSr1jw' target='__blank'>Meet the CEO Programme
                            Organized by Department of MBA</a></li>
                    </ul>
                </div>




            </div>
        </div>
    )
}

export default MBAMore;