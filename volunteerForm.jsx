ReactDOM.render(<Form 
  hideSurname={false} 
  hideFirstName={false}
  hideAge={false}
  hideAreaofInterest={false}
  hideNameofBusiness={true}
  hideStallType={true}
  hideStallDetails={true}
  hideStallSize={true}
  hideCarorVan={true}
  hideContactNumber={false}
  hideEmailAddress={false}
  hideInterest={false}

/>, document.getElementById('root'));


const e = React.createElement;
function VolunteerForm(params) {
 // Display a "Like" <button>
return e(
    'button',
    {  },
    'Like'
  );   
}

const domContainer = document.querySelector('#volunteerForm');
ReactDOM.render(e(VolunteerForm), domContainer);
