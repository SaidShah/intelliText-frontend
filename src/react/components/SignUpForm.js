import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody,MDBModalFooter,MDBIcon, MDBCardHeader} from 'mdbreact';


const SignUpForm = () => (
  <div className="form-container">
  <MDBContainer>
      <MDBRow>
        <MDBCol >
          <MDBCard>
            <MDBCardBody>
              <form>
              <MDBCardHeader className="form-header deep-blue-gradient rounded">
                <h3 className="my-3 text-align-center">
                  <MDBIcon icon="lock" /> Sign up
                </h3>
              </MDBCardHeader>
                <div className="grey-text">
                  <MDBInput
                    label="Your name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Confirm your email"
                    icon="exclamation-triangle"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="light-blue" type="submit">
                    Register
                  </MDBBtn>
                </div>
              </form>
              <MDBModalFooter>
                <div className="font-weight-light">
                  <a href="/login">Already a member? Log in</a>
                </div>
              </MDBModalFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
);

export default SignUpForm;
