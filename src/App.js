import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  // const raudonas="raudonas";
  return (
    <div class="container">
      <h1 class="display-5 text-center">Programavimo kursai</h1>

      {/* <div class="card h-200"> */}
        <div class="row text-center mt-5 h-100">
          <div class="col-md-4">
            <div class="card text-bg-primary mt-3 p-1">
              <div class="card-header fw-bold">React kursai</div>
              <div class="card-body d-flex justify-content-center">
                <p class="pt-3">nuo</p>
                <p class="fs-4 fw-bold p-2">9.99</p>
                <p class="pt-3">Eur/mėn.</p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card text-bg-primary mt-3 p-1">
              <div class="card-header fw-bold">Angular.Js kursai</div>
              <div class="card-body d-flex justify-content-center">
                <p class="pt-3">nuo</p>
                <p class="fs-4 fw-bold p-2">29.99</p>
                <p class="pt-3">Eur/mėn.</p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card text-bg-primary mt-3 p-1">
              <div class="card-header fw-bold">PHP kursai</div>
              <div class="card-body d-flex justify-content-center">
                <p class="pt-3">nuo</p>
                <p class="fs-4 fw-bold p-2">49.99</p>
                <p class="pt-3">Eur/mėn.</p>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}

      <div class="bg-dark bg-opacity-25 text-emphasis-dark">
          <h1 class="display-6 text-start mt-3 text-emphasis-secondary p-2 ms-4 mt-2 mb-1">Mūsų dėstytojai</h1>

          <hr></hr>
          <div class="d-flex flex-row flex-wrap  justify-content-evenly gap-1">
            <div class="card mb-3 col-5">
                <div class="row g-0">
                  <div class="col-md-3 m-3 flex-wrap flex-shrink-0">
                    <img src="https://www.shutterstock.com/image-vector/woman-avatar-character-female-portrait-260nw-2154201797.jpg" class="img-fluid rounded-circle img-thumbnail" alt="profile"></img>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body fs-6 fw-normal text-sm-start flex-grow-1">
                      <h5 class="card-title">Michael Deo</h5>
                      <p class="card-text">Ui Ux Designer<br>
                      </br>795 Folsom Ave, Suite 600. San Francisco, CADGE<br>
                      </br>94107</p>
                    
                    </div>
                  </div>
                </div>
              </div>

              <div class="card mb-3 col-5">
                <div class="row g-0">
                  <div class="col-md-3 m-3 flex-wrap flex-shrink-0">
                    <img src="https://www.shutterstock.com/image-vector/woman-avatar-character-female-portrait-260nw-2154201797.jpg" class="img-fluid rounded-circle img-thumbnail" alt="profile"></img>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body flex-grow-1">
                      <h5 class="card-title">Michael Deo</h5>
                      <p class="card-text">Ui Ux Designer<br>
                      </br>795 Folsom Ave, Suite 600. San Francisco, CADGE<br>
                      </br>94107</p>
                    
                    </div>
                  </div>
                </div>
              </div>
             
              <div class="card mb-3 col-5">
                <div class="row g-0">
                  <div class="col-md-3 m-3 flex-wrap flex-shrink-0">
                    <img src="https://www.shutterstock.com/image-vector/woman-avatar-character-female-portrait-260nw-2154201797.jpg" class="img-fluid rounded-circle img-thumbnail" alt="profile"></img>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body flex-grow-1">
                      <h5 class="card-title">Michael Deo</h5>
                      <p class="card-text">Ui Ux Designer<br>
                      </br>795 Folsom Ave, Suite 600. San Francisco, CADGE<br>
                      </br>94107</p>
                    
                    </div>
                  </div>
                </div>
              </div>

              <div class="card mb-3 col-5">
                <div class="row g-0">
                  <div class="col-md-3 m-3 flex-wrap flex-shrink-0">
                    <img src="https://www.shutterstock.com/image-vector/woman-avatar-character-female-portrait-260nw-2154201797.jpg" class="img-fluid rounded-circle img-thumbnail" alt="profile"></img>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body flex-grow-1">
                      <h5 class="card-title">Michael Deo</h5>
                      <p class="card-text">Ui Ux Designer<br>
                      </br> 795 Folsom Ave, Suite 600. San Francisco, CADGE<br>
                      </br>94107</p>
                    
                    </div>
                  </div>
                </div>
              </div>
           </div>
        </div>
      {/* </div> */}

    </div>
  );
}

export default App;
