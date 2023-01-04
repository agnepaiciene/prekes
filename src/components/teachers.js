function Teacher(props) {
  const photo = props.teachers.photo;
  const firstname = props.teachers.firstname;
  const lastname = props.teachers.lastname;
  const lesson = props.teachers.lesson;
  const address = props.teachers.address;

  return (
    <div class="col-5 card mb-3 flex-grow-1 rounded-1">
      <div class="row g-0">
        <div class="col-md-4 d-flex justify-content-center align-items-center px-2 py-2">
          <img src={photo} class="img-fluid rounded-start" alt="test"></img>
        </div>
        <div class="col-md-8">
          <div class="card-body fs-6 fw-normal text-sm-start flex-grow-1">
            <p class="p-1"><b>{firstname}</b>{lastname}</p> 
       
            {lesson} 
            <br></br>
            {address}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Teacher;
