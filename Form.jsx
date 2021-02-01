class Form extends React.Component {
  state={name: "", surname:"",age: "",areaofinterest:"", nameofbusiness:"",stalltype:"", stalldetails:"",  }

  //object literal = {} key:value pairs
  

handleSurnameOnChange(event){
this.setState({surname: event.target.value})
}
  renderSurname() {
    return (
        <div><p>Surname:</p>
              <input
             type="text"
             value={this.state.surname}
             onChange={this.handleSurnameOnChange.bind(this)}
             placeholder="Surname"
              /></div>
    )
  }
 handleFirstNameOnChange(event) {
console.log("woop woop")
this.setState({name: event.target.value})
//event what has just happen (name change). the element event happened on. value of current element 
 }
    renderFirstName() {
      return (
          <div><p>First Name:</p>
                <input
               type="text"
               value={this.state.name}
               onChange={this.handleFirstNameOnChange.bind(this)}
               placeholder="First Name"
                /></div>
      )
    }
    handleAgeOnChange(event) {
      console.log("woop woop")
      this.setState({age: event.target.value})
      //event what has just happen (name change). the element event happened on. value of current element 
       }

  renderAge(){
    return (
      <div><p>Age</p>
      <input 
      type="number"
      value={this.state.age}
      onChange={this.handleAgeOnChange.bind(this)}
      placeholder="Age"
      />
      </div>
    )
  }
  handleAreaOfInterestOnChange(event) {
    console.log("woop woop")
    this.setState({[event.target.name]: event.target.checked})
    //[]= hack to ensure that the outcome of the state is ussed rather than just the key of the state is used
    //event what has just happen (name change). the element event happened on. value of current element 
     }
renderAreaofInterest(){
  return (
    <div><p>Area of Interest</p>
     <div className = "bullets"><p></p>
        <p><label>Security <input name="aioSecurity" type="checkbox" value={this.state.name} onChange={this.handleAreaOfInterestOnChange.bind(this)}/></label></p>
        <p><label>Games and Sports <input name="aioGames" type="checkbox" value={this.state.name} onChange={this.handleAreaOfInterestOnChange.bind(this)}/></label></p>
        <p><label>Vendor Support <input name="aioSupport" type="checkbox" value={this.state.name} onChange={this.handleAreaOfInterestOnChange.bind(this)}/></label></p>
        <p><label>Information Stand <input name="aioInformation" type="checkbox" value={this.state.name} onChange={this.handleAreaOfInterestOnChange.bind(this)}/></label></p>
        <p></p>
        <p>
           <label>Event Setup <input name="aioSetup" type="checkbox" value={this.state.name} onChange={this.handleAreaOfInterestOnChange.bind(this)}/></label></p>
        <p><label>Post Event Takedown <input name="aioPost" type="checkbox" value={this.state.name} onChange={this.handleAreaOfInterestOnChange.bind(this)}/></label></p>
            </div>
    </div>
  )
}

handleNameOfBusinessonChange(event) {
  console.log("yay!")
  this.setState({nameofbusiness: event.target.value})
}
renderNameofBusiness(){
  return (
    <div>
       <p>Name of Business:</p>
        <input
          type="text"
          value={this.state.nameofbusiness}
          onChange={this.handleNameOfBusinessonChange.bind(this)}/>
    </div>
  )
}

handleStallTypeonChange(event) {
  console.log("celebrate")
  this.setState({stalltype: event.target.value})
}
renderStallType(){
  return (
    <div> <p>Stall Type:</p>
    <input
      type="text"
      value={this.state.stalltype}
      onChange={this.handleFirstNameOnChange.bind(this)}
    /></div>
  )
}

handleStallDetailsOnChange(event){
  console.log("working")
  this.setState({stalldetails: event.target.value})
}

renderStallDetails(){
  return (
    <div><p>Stall Details:</p>
    <input 
    type="text"
    value={this.state.stalldetails}
    onChange={this.handleStallDetailsOnChange.bind(this) }
    /></div>
  )
}
handleStallSizeOnChange(event){
  this.setState({stallsize: event.target.value})
}
renderStallSize(){
  return (
    <div><p>Stall Size:</p>
    <div className = "bullets">
    <p><label>1 Table<input name="StallSize1" type="checkbox" value={this.state.name} onChange={this.handleStallSizeOnChange.bind(this)}/></label></p> 
    <p><label>2 Table<input name="StallSize2" type="checkbox" value={this.state.name} onChange={this.handleStallSizeOnChange.bind(this)}/></label></p>
    <p><label>3 Table<input name="StallSize3" type="checkbox" value={this.state.name} onChange={this.handleStallSizeOnChange.bind(this)}/></label></p>
    </div>
    </div>
  )
}

handleCarOrVanOnChange(event){
  this.setState({carorvan: event.target.value})
}
renderCarorVan(){
  return (
    <div><p>Car or Van Onsite:</p>
    <div className = "bullets">
    <p><label>Car <input name="Car" type="checkbox" value={this.state.name} onChange={this.handleCarOrVanOnChange.bind(this)}/></label></p>
    <p><label>Van <input name="Van" type="checkbox" value={this.state.name} onChange={this.handleCarOrVanOnChange.bind(this)}/></label></p>
    </div>
    </div>
  )
}

handleContactNumberOnChange(event){
  this.setState({contactnumber: event.target.value})
}
renderContactNumber(){
return(
  <div><p>Contact Number</p><input type="text" value={this.state.contactnumber} onChange={this.handleContactNumberOnChange.bind(this)}/></div>
)
}

handleEmailAddressOnChange(event){
  this.setState({emailaddress: event.target.value})
}
renderEmailAddress(){
  return(
    <div><p>Email Address:</p><input type="text" value={this.state.emailaddress} onChange={this.handleEmailAddressOnChange.bind(this)}/></div>
  )
}

handleInterestOnChange(event){
  this.setState({interest: event.target.value})
}
renderInterest(){
  return(
    <div><p>Are you interested in volunteering for the Family Funday Only?</p>
    <div className= "bullets">
     <p><label>Yes <input name="interestyes" type= "checkbox" value={this.state.name} onChange={this.handleInterestOnChange.bind(this)}/></label></p>
     <p><label>No <input name="interestno" type="checkbox" value={this.state.name} onChange={this.handleInterestOnChange.bind(this)}/></label></p>
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
    url="http://127.0.0.1:3000/volunteer-pg"
  }
  fetch(url, {
    method: "POST", 
    body: JSON.stringify(this.state),
    headers: {
      'Content-Type': 'application/json'
}
  })
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

      <button type = "submit">Submit</button>
        
      </form>
    );
    
  }
}

