ReactDOM.render(

<div>
  <Form 
  hideSurname={false} 
  hideFirstName={false}
  hideAge={false}
  hideAreaofInterest={true}
  hideNameofBusiness={false}
  hideStallType={false}
  hideStallDetails={false}
  hideStallSize={false}
  hideCarorVan={false}
  hideContactNumber={false}
  hideEmailAddress={false}
  hideInterest={false}
 //False in this instance means no, so to you want to hide the surname? 
  //No = false Yes = true


/></div>, document.getElementById('root'));


const e = React.createElement;
function VendorForm(params) {
 // Display a "Like" <button>
return e(
    'button',
    {  },
    'Terms and Conditons'
  );   
}

const domContainer = document.querySelector('#vendorForm');
ReactDOM.render(e(VendorForm), domContainer);

