import React from 'react';
// import default react-pdf entry
// import { Document, Page, pdfjs } from "react-pdf";
// // import pdf worker as a url, see `next.config.js` and `pdf-worker.js`
// import workerSrc from "../../../pdf-worker";
// import report1 from '../../../public/images/assets.pdf/2021-22.pdf';

const AnnualReports = () => {
    // const [state, setState] = React.useState(false)
    // const [file, setFile] = useState("./sample.pdf");
    // const [numPages, setNumPages] = useState(null);

    // function onFileChange(event) {
    // setFile(event.target.files[0]);
    // }

    // function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    // setNumPages(nextNumPages);
    // }
    return (
        <div>
            <h3>Annual Reports</h3>
            {/* <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                {Array.from({ length: numPages }, (_, index) => (
                    <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                    />
                ))}
            </Document> */}
            <ul>
                <li><a href={'#'} target="_blank">Annual Report of 2021-22</a></li>
                {/* {state && <iframe src={report1} />} */}
                {/* <li><a href="/public/images/assets.pdf/2020-21.pdf" target="_blank">Annual Report of 2020-21</a></li> */}
                <li><a href="#" target="_blank">Annual Report of 2019-20</a></li>
                <li><a href="#" target="_blank">Annual Report of 2018-19</a></li>
                <li><a href="#" target="_blank">Annual Report of 2017-18</a></li>
                <li><a href="#" target="_blank">Annual Report of 2016-17</a></li>
                <li><a href="#" target="_blank">Annual Report of 2015-16</a></li>
                <li><a href="#" target="_blank">Annual Report of 2014-15</a></li>
                <li><a href="#" target="_blank">Annual Report of 2013-14</a></li>
                <li><a href="#" target="_blank">Annual Report of 2012-13</a></li>
                <li><a href="#" target="_blank">Annual Report of 2011-12</a></li>
                <li><a href="#" target="_blank">Annual Report of 2010-11</a></li>
            </ul>
        </div>
    );
};

export default AnnualReports;
