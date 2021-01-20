class Form extends React.Component {
  renderSurname() {
    return (
        <div><p>Surname:</p>
              <input
             type="text"
              /></div>
    )
  }
 
    renderFirstName() {
      return (
          <div><p>First Name:</p>
                <input
               type="text"
                /></div>
      )
    }
    
  renderAge(){
    return (
      <div><p>Age</p>
      <input type="number"/></div>
    )
  }

renderAreaofInterest(){
  return (
    <div><p>Area of Interest</p>
     <div className = "bullets"><p></p>
        <p><label>Security <input type="checkbox"/></label></p>
        <p><label>Games and Sports <input type="checkbox"/></label></p>
        <p><label>Vendor Support <input type="checkbox"/></label></p>
        <p><label>Information Stand <input type="checkbox"/></label></p>
        <p></p>
        <p>
           <label>Event Setup <input type="checkbox"/></label></p>
        <p><label>Post Event Takedown <input type="checkbox"/></label></p>
            </div>
    </div>
  )
}

renderNameofBusiness(){
  return (
    <div>
       <p>Name of Business:</p>
        <input
          type="text"/>
    </div>
  )
}

renderStallType(){
  return (
    <div> <p>Stall Type:</p>
    <input
      type="text"
    /></div>
  )
}

renderStallDetails(){
  return (
    <div><p>Stall Details:</p><input type="text"/></div>
  )
}

renderStallSize(){
  return (
    <div><p>Stall Size:</p><input type="text"/> </div>
  )
}

renderCarorVan(){
  return (
    <div><p>Car or Van Onsite:</p>
    <div className = "bullets">
    <p><label>Car <input type="checkbox"/></label></p>
    <p><label>Van <input type="checkbox"/></label></p>
    </div>
    </div>
  )
}

renderContactNumber(){
return(
  <div><p>Contact Number</p><input type="number"/></div>
)
}

renderEmailAddress(){
  return(
    <div><p>Email Address:</p><input type="text"/></div>
  )
}

renderInterest(){
  return(
    <div><p>Are you only interested in volunteering for the Family Funday Only?</p>
    <input type="text"/></div>
  )
}
formSubmit(event){
  event.preventDefault();
  const data={form:"myformdata"}
  fetch("http://127.0.0.1:3000/vendor-pg", {
    method: "POST", 
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
}
  })
}
 render() {
    return (
      
      <form onSubmit={this.formSubmit.bind()}>
        <h1>Hello</h1>

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

