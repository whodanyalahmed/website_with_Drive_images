// Client ID and API key from the Developer Console
import React, { Component } from "react";

var SCOPE = "https://www.googleapis.com/auth/drive.file";
var discoveryUrl = "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest";
const CLIENT_ID =
  "865545624424-8ifs0efkpsf6kkdjhrbb4hkrhuii0rj5.apps.googleusercontent.com";
const API_KEY = "AIzaSyCASW2xv550CqmJUrogiCnzKaQc153coX0";
const authorizeButton = document.getElementById("signin-btn");
const signoutButton = document.getElementById("signout-btn");
class App extends Component {
  state = {
    name: "",
    googleAuth: "",
  };
  componentDidMount() {
    var script = document.createElement("script");
    script.onload = this.handleClientLoad;
    script.src = "https://apis.google.com/js/api.js";
    document.body.appendChild(script);
  }

  initClient = () => {
    try {
      window.gapi.client
        .init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          scope: SCOPE,
          discoveryDocs: [discoveryUrl],
        })
        .then(() => {
          this.setState({
            googleAuth: window.gapi.auth2.getAuthInstance(),
          });

          this.state.googleAuth.isSignedIn.listen(
            this.updateSigninStatus(this.state.googleAuth.isSignedIn.get())
          );
          authorizeButton.addEventListener("click", this.signInFunction());
          signoutButton.addEventListener("click", this.signOutFunction());
        });
    } catch (e) {
      console.log(e);
    }
  };

  signInFunction = () => {
    this.state.googleAuth.signIn();
    this.updateSigninStatus(this.state.googleAuth.isSignedIn.get());
  };

  signOutFunction = () => {
    this.state.googleAuth.signOut();
    this.updateSigninStatus(this.state.googleAuth.isSignedIn.get());
  };
  appendPre = (message) => {
    var pre = document.getElementById("content");
    var textContent = document.createTextNode(message + "\n");
    pre.appendChild(textContent);
  };
  listFiles = () => {
    window.gapi.client.drive.files
      .list({
        // only search for images
        q: "'1ZtT-VQoj0V-4YqT7hUcFZioalqbzjdEv' in parents and mimeType contains 'image' and trashed=false",
        pageSize: 1000,
        fields: "nextPageToken, files(id, name)",
      })
      .then(function (response) {
        // this.appendPre("Files:");
        var files = response.result.files;
        if (files && files.length > 0) {
          for (var i = 0; i < files.length; i++) {
            var file = files[i];
            // this.appendPre(file.name + " (" + file.id + ")");
            // add ImageComponent in span of ImagesData
            // length of list
            console.log(file);
          }
        }
      });
  };

  updateSigninStatus = (isSignedIn) => {
    this.setSigninStatus();
    if (isSignedIn) {
      authorizeButton.style.display = "none";
      signoutButton.style.display = "block";
      this.listFiles();
    } else {
      authorizeButton.style.display = "block";
      signoutButton.style.display = "none";
    }
  };

  setSigninStatus = async () => {
    var user = this.state.googleAuth.currentUser.get();
    console.log(user);
    if (user.wc == null) {
      this.setState({
        name: "",
      });
    } else {
      var isAuthorized = user.hasGrantedScopes(SCOPE);
    }
  };

  handleClientLoad = () => {
    window.gapi.load("client:auth2", this.initClient);
  };
  render() {
    return (
      <div className="App">
        <div>
          UserName: <strong>{this.state.name}</strong>
        </div>
        <button id="signin-btn">Sign In</button>
        <button id="signout-btn">Sign Out</button>
        {/* <span id="content" style="white-space: pre-wrap"></span> */}
      </div>
    );
  }
}

export default App;
