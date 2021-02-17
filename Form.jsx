class Form extends React.Component {
  state={name: "",
   surname:"",
   age: "",
   areaofinterest:"", 
   nameofbusiness:"",
   stalltype:"", 
   stalldetails:"",
   stallsize:"", 
   carorvan:"",
   contactnumber:"",
   emailaddress:"",
   Interestyes: true,
   Interestno: false,

    }

  //object literal = {} key:value pairs
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    console.log("handle?", name,value)

    this.setState({
      [name]: value
       //[]= hack to ensure that the outcome of the state is used rather than just the key of the state is used
    //event what has just happen (name change). the element event happened on. value of current element 
    });
  }

  renderSurname() {
    return (
        <div><p>Surname:</p>
              <input
            name="surname"
             type="text"
             value={this.state.surname}
             onChange={this.handleInputChange.bind(this)}
             placeholder="Surname"
              /></div>
    )
  }
//event what has just happen (name change). the element event happened on. value of current element 
    renderFirstName() {
      return (
          <div><p>First Name:</p>
                <input
                name="name"
               type="text"
               value={this.state.name}
               onChange={this.handleInputChange.bind(this)}
               placeholder="First Name"
                /></div>
      )
    }

  renderAge(){
    return (
      <div><p>Age</p>
      <input
      name="age" 
      type="number"
      value={this.state.age}
      onChange={this.handleInputChange.bind(this)}
      placeholder="Age"
      />
      </div>
    )
  }
   
renderAreaofInterest(){
  return (
    <div><p>Area of Interest</p>
     <div className = "bullets"><p></p>
        <p><label>Security <input name="aioSecurity"  checked={this.state.aioSecurity} type="checkbox"  onChange={this.handleInputChange.bind(this)}/></label></p>
        <p><label>Games and Sports <input name="aioGames" checked={this.state.aioGames} type="checkbox" onChange={this.handleInputChange.bind(this)}/></label></p>
        <p><label>Vendor Support <input name="aioSupport" checked={this.state.aioSupport} type="checkbox" onChange={this.handleInputChange.bind(this)}/></label></p>
        <p><label>Information Stand <input name="aioInformation" checked={this.state.aioInformation} type="checkbox"onChange={this.handleInputChange.bind(this)}/></label></p>
        <p></p>
        <p>
           <label>Event Setup <input name="aioSetup" checked={this.state.aioSetup} type="checkbox" onChange={this.handleInputChange.bind(this)}/></label></p>
        <p><label>Post Event Takedown <input name="aioPost" checked={this.state.aioPost} type="checkbox" onChange={this.handleInputChange.bind(this)}/></label></p>
            </div>
    </div>
  )
  }

renderNameofBusiness(){
  return (
    <div>
       <p>Name of Business:</p>
        <input
        name="nameofbusiness"
          type="text"
          value={this.state.nameofbusiness}
          onChange={this.handleInputChange.bind(this)}
          placeholder="e.g. Microsoft"/>
    </div>
  )
}

renderStallType(){
  return (
    <div> <p>Stall Type:</p>
    <input
    name="stalltype"
      type="text"
      value={this.state.stalltype}
      onChange={this.handleInputChange.bind(this)}
      placeholder="Catering / Education / Entertainment / Arts and Crafts ect"
    /></div>
  )

}

renderStallDetails(){
  return (
    <div><p>Stall Details:</p>
    <input 
    name="stalldetails"
    type="text"
    value={this.state.stalldetails}
    onChange={this.handleInputChange.bind(this)}
    placeholder="Additional description of stand e.g. Childrens items or Jamaican Food."
    /></div>
  )
}

renderStallSize(){
  return (
    <div><p>Stall Size:</p>
    <div className = "bullets">
    <p><label>1 Table<input name="StallSize1" checked={this.state.StallSize1} type="checkbox" onChange={this.handleInputChange.bind(this)}/></label></p> 
    <p><label>2 Table<input name="StallSize2" checked={this.state.StallSize2} type="checkbox" onChange={this.handleInputChange.bind(this)}/></label></p>
    <p><label>3 Table<input name="StallSize3" checked={this.state.StallSize3} type="checkbox" onChange={this.handleInputChange.bind(this)}/></label></p>
    </div>
    </div>
  )
}

renderCarorVan(){
  return (
    <div><p>Car or Van Onsite:</p>
    <div className = "bullets">
    <p><label>Car <input name="Car" checked={this.state.Car} type="checkbox" onChange={this.handleInputChange.bind(this)}/></label></p>
    <p><label>Van <input name="Van" checked={this.state.Van} type="checkbox" onChange={this.handleInputChange.bind(this)}/></label></p>
    </div>
    </div>
  )

}
renderContactNumber(){
return(
  <div><p>Contact Number</p>
  <input 
  name="contactnumber"
  type="text" 
  value={this.state.contactnumber} 
  onChange={this.handleInputChange.bind(this)}
  placeholder="07XXX XXX XXX"
  /></div>
)
}

renderEmailAddress(){
  return(
    <div><p>Email Address:</p>
    <input 
    name="emailaddress"
    type="text" 
    value={this.state.emailaddress} 
    onChange={this.handleInputChange.bind(this)}
    placeholder="example@myemail.com"
    /></div>
  )

}
renderInterest(){
  return(
    <div><p>Are you interested in attending the Family Funday Only?</p>
    <div className= "bullets">
     <p><label>Yes <input name="Interestyes" checked={this.state.Interestyes} type= "checkbox" onChange={this.handleInputChange.bind(this)}/></label></p>
     <p><label>No <input name="Interestno" checked={this.state.Interestno} type="checkbox" onChange={this.handleInputChange.bind(this)}/></label></p>
    </div>
    </div>
  )
}
formSubmit(event){
  event.preventDefault();
  let url; 
  if(this.props.type=="vendor"){
    url="http://127.0.0.1:3000/vendor-pg"
  }else{
    url="http://127.0.0.1:3000/volunteer-pg";
  
  }
  const anyareaofinterest = this.state.aioSecurity || this.state.aioGames || this.state.aioSupport || this.state.aioInformation ||this.state.aioSetup ||this.state.aioPost;
  const stallsize = this.state.StallSize1 || this.state.StallSize2 || this.state.StallSize3;
  const carorvan = this.state.Car || this.state.Van;
  const interest = this.state.interestyes || this.state.interestno
  console.log(this.state)

  if (this.state.name === ""){
    alert("Please complete name")}

  else if(this.state.surname === ""){
  alert("Please complete surname")}

  else if(!this.props.hideAge && (!Number(this.state.age))) {
    alert("Your age must be a number")} 
  
  else if (!this.props.hideAreaofInterest && !(anyareaofinterest)) {
      alert("Please select at least one area of interest.")}

  else if (!this.props.hideNameofBusiness && !(this.state.nameofbusiness)) {
    alert("Please complete the business name")}

  else if (!this.props.hideStallType && !(this.state.stalltype)){
    alert("Please enter the stall type")}

  else if (!this.props.hideStallSize && !(stallsize)) {
      alert("Please select a stall size.")}

  else if (!this.props.hideCarorVan && !(carorvan)){
    alert("Please select a vehicle.")}
  
  else if (this.state.contactnumber === ""){
      alert("Please give a contact number")}

  else if (this.state.emailaddress === ""){
    alert("Please give us an email address ")
  }
  else if (!(this.state.Interestyes && this.state.Interestno) && !(this.props.hideInterest)){
    alert("Please let us know which events you would like to ")
  }

  else{
    console.log("Interest",this.state.Interest)
    console.log("hideInterest",this.props.hideInterest)
    fetch(url, {
      method: "POST", 
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
  }
    }).then(data =>{
alert("Thank you for submitting your form. We will be in touch with you shortly.")

window.location = "/Arawak Community Trust.html"}

//this.state.submited = true

//set state call for that

//render method value of the above

// condition of showing the value
    )}
  
 
  }
 render() {
    return (
      
      <form onSubmit={this.formSubmit.bind(this)}>
        <h1>Hello and thank you for your submission in advance.</h1>

        {!this.props.hideFirstName && this.renderFirstName()}
        
        {!this.props.hideSurname && this.renderSurname()}

        {!this.props.hideAge && this.renderAge()}
        
        {!this.props.hideAreaofInterest && this.renderAreaofInterest()}
           
        {!this.props.hideNameofBusiness && this.renderNameofBusiness()}

        {!this.props.hideStallType && this.renderStallType()}

        {!this.props.hideStallDetails && this.renderStallDetails()}

        {!this.props.hideStallSize && this.renderStallSize()}

        {!this.props.hideCarorVan && this.renderCarorVan()}

        {!this.props.hideContactNumber && this.renderContactNumber()}

        {!this.props.hideEmailAddress && this.renderEmailAddress()}

        {!this.props.hideInterest && this.renderInterest()}

      <button type = "submit">Submit Form</button>
        
      </form>
    );
    
  }
}