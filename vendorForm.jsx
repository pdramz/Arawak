class MyForm extends React.Component {
  render() {
    return (
      <form>
        <h1>Hello</h1>
        <p>First Name:</p>
        <input
          type="text"
        />
          <p>Surname:</p>
        <input
          type="text"
        />
          <p>Name of Business:</p>
        <input
          type="number"
        />
          <p>Stall Type:</p>
        <input
          type="text"
        />
        <p>Stall Details:</p>
        <input
          type="text"
        />
        <p>Stall Size:</p>
        <input
          type="text"
        />
        <p>Car or Van Onsite:</p>
        <input
          type="text"
        />
          <p>Contact Number:</p>
        <input
          type="text"
        />
          <p>Email Address:</p>
        <input
          type="text"
        />
          <p>Are you only interested in being a Vendor for the Family Funday Only?:</p>
        <input
          type="text"
        />
        <p></p>
      </form>
    );
    
  }
}
ReactDOM.render(<MyForm />, document.getElementById('root'));


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

