const e = React.createElement;
function VendorForm(params) {
 // Display a "Like" <button>
return e(
    'button',
    {  },
    'Like'
  );   
}

const domContainer = document.querySelector('#vendorForm');
ReactDOM.render(e(VendorForm), domContainer);

