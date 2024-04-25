import "./Contacts.css"

//npm install dom-to-image     => https://github.com/tsayen/dom-to-image
//import domtoimage from 'dom-to-image';


var filepath_business_card = "business_card.png"
const link = document.createElement('a');
link.download = 'GenIoTech_Solutions.png';


// function htmlToPng(){
//     domtoimage.toBlob(document.getElementById('html-to-png'))
//     .then(function (blob) {
//         return URL.createObjectURL(blob);
//     });
//     return ""
// }


function download_business_card(){
    link.href = filepath_business_card;
    link.click();
}


function MyComponent({children, _filepath_business_card}) {
    filepath_business_card = _filepath_business_card
    return (
        <div className="block-content">
            <div className="contact-content">
                <div className="card" id="html-to-png">
                    <h2>GenIoTech Solutions</h2>
                    <div className="info">
                        {children}
                    </div>
                </div>
                <button onClick={download_business_card} className="mobile-button-blue contact-center-button">Завантажити візитку в png</button>
            </div>
        </div>
    );
}

export default MyComponent;
