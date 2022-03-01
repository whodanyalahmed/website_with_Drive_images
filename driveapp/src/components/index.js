// Client ID and API key from the Developer Console
import React, { Component } from "react";

var SCOPE = "https://www.googleapis.com/auth/drive.file";
var discoveryUrl = "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest";
const CLIENT_ID =
  "865545624424-8ifs0efkpsf6kkdjhrbb4hkrhuii0rj5.apps.googleusercontent.com";
const API_KEY = "AIzaSyCASW2xv550CqmJUrogiCnzKaQc153coX0";

var authorizeButton = document.getElementById("authorize_button");
var signoutButton = document.getElementById("signout_button");

// componentDidMount() {
// var script = document.createElement("script");
// script.onload = this.handleClientLoad;
// script.src = "https://apis.google.com/js/api.js";
// document.body.appendChild(script);
// }
var list = [];

class App extends Component {
  // add
  componentDidMount() {
    var script = document.createElement("script");
    script.onload = this.handleClientLoad;
    script.src = "https://apis.google.com/js/api.js";
    document.body.appendChild(script);
  }
  // call componentDidMount

  handleClientLoad = () => {
    window.gapi.load("client:auth2", this.initClient);
  };

  /**
   *  Initializes the API client library and sets up sign-in state
   *  listeners.
   */

  initClient = () => {
    try {
      window.gapi.client
        .init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: discoveryUrl,
          scope: SCOPE,
        })
        .then(
          function () {
            // Listen for sign-in state changes.
            window.gapi.auth2
              .getAuthInstance()
              .isSignedIn.listen(this.updateSigninStatus);

            // Handle the initial sign-in state.
            this.updateSigninStatus(
              window.gapi.auth2.getAuthInstance().isSignedIn.get()
            );
            authorizeButton.onclick = this.handleAuthClick;
            signoutButton.onclick = this.handleSignoutClick;
          },
          function (error) {
            this.appendPre(JSON.stringify(error, null, 2));
          }
        );
    } catch (e) {
      console.log(e);
    }
  };

  /**
   *  Called when the signed in status changes, to update the UI
   *  appropriately. After a sign-in, the API is called.
   */
  updateSigninStatus = (isSignedIn) => {
    if (isSignedIn) {
      authorizeButton.style.display = "none";
      signoutButton.style.display = "block";
      this.listFiles();
    } else {
      authorizeButton.style.display = "block";
      signoutButton.style.display = "none";
    }
  };

  /**
   *  Sign in the user upon button click.
   */
  handleAuthClick = (event) => {
    window.gapi.auth2.getAuthInstance().signIn();
  };

  /**
   *  Sign out the user upon button click.
   */
  handleSignoutClick = (event) => {
    window.gapi.auth2.getAuthInstance().signOut();
  };

  /**
   * Append a pre element to the body containing the given message
   * as its text node. Used to display the results of the API call.
   *
   * @param {string} message Text to be placed in pre element.
   */
  appendPre = (message) => {
    var pre = document.getElementById("content");
    var textContent = document.createTextNode(message + "\n");
    pre.appendChild(textContent);
  };

  /**
   * Print files.
   */

  listFiles = () => {
    window.gapi.client.drive.files
      .list({
        // only search for images
        q: "'1ZtT-VQoj0V-4YqT7hUcFZioalqbzjdEv' in parents and mimeType contains 'image' and trashed=false",
        pageSize: 1000,
        fields: "nextPageToken, files(id, name)",
      })
      .then(function (response) {
        this.appendPre("Files:");
        var files = response.result.files;
        if (files && files.length > 0) {
          for (var i = 0; i < files.length; i++) {
            var file = files[i];
            this.appendPre(file.name + " (" + file.id + ")");
            // add ImageComponent in span of ImagesData
            // addListData(ImageComponent(file.id));
            // length of list

            // list.push(file.id);
          }
        } else {
          this.appendPre("No files found.");
        }
      });
  };
  render() {
    return (
      <div>
        <button id="authorize_button" style="display: none">
          Authorize
        </button>
        <button id="signout_button" style="display: none">
          Sign Out
        </button>

        <pre id="content" style="white-space: pre-wrap"></pre>
      </div>
    );
  }
}

export default App;
