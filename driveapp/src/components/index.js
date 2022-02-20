// Client ID and API key from the Developer Console
import React, { Component } from "react";

var SCOPE = "https://www.googleapis.com/auth/drive.file";
var discoveryUrl = "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest";
const CLIENT_ID =
  "865545624424-8ifs0efkpsf6kkdjhrbb4hkrhuii0rj5.apps.googleusercontent.com";
const API_KEY = "AIzaSyCASW2xv550CqmJUrogiCnzKaQc153coX0";
const authorizeButton = document.getElementById("signin-btn");
const signoutButton = document.getElementById("signout-btn");

// componentDidMount() {
// var script = document.createElement("script");
// script.onload = this.handleClientLoad;
// script.src = "https://apis.google.com/js/api.js";
// document.body.appendChild(script);
// }
var list = [];

export const App = () => {
  // add
  function componentDidMount() {
    var script = document.createElement("script");
    script.onload = this.handleClientLoad;
    script.src = "https://apis.google.com/js/api.js";
    document.body.appendChild(script);
  }
  // call componentDidMount
  componentDidMount();
  function handleClientLoad() {
    window.gapi.load("client:auth2", initClient);
  }

  /**
   *  Initializes the API client library and sets up sign-in state
   *  listeners.
   */
  function addListData(name) {
    list.push(name);
  }
  function getListData() {
    return list;
  }
  function initClient() {
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
            .isSignedIn.listen(updateSigninStatus);

          // Handle the initial sign-in state.
          updateSigninStatus(
            window.gapi.auth2.getAuthInstance().isSignedIn.get()
          );
          authorizeButton.onclick = handleAuthClick;
          signoutButton.onclick = handleSignoutClick;
        },
        function (error) {
          appendPre(JSON.stringify(error, null, 2));
        }
      );
  }

  /**
   *  Called when the signed in status changes, to update the UI
   *  appropriately. After a sign-in, the API is called.
   */
  function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
      authorizeButton.style.display = "none";
      signoutButton.style.display = "block";
      listFiles();
    } else {
      authorizeButton.style.display = "block";
      signoutButton.style.display = "none";
    }
  }

  /**
   *  Sign in the user upon button click.
   */
  function handleAuthClick(event) {
    window.gapi.auth2.getAuthInstance().signIn();
  }

  /**
   *  Sign out the user upon button click.
   */
  function handleSignoutClick(event) {
    window.gapi.auth2.getAuthInstance().signOut();
  }

  /**
   * Append a pre element to the body containing the given message
   * as its text node. Used to display the results of the API call.
   *
   * @param {string} message Text to be placed in pre element.
   */
  function appendPre(message) {
    var pre = document.getElementById("content");
    var textContent = document.createTextNode(message + "\n");
    pre.appendChild(textContent);
  }

  /**
   * Print files.
   */

  function listFiles() {
    window.gapi.client.drive.files
      .list({
        // only search for images
        q: "'1ZtT-VQoj0V-4YqT7hUcFZioalqbzjdEv' in parents and mimeType contains 'image' and trashed=false",
        pageSize: 1000,
        fields: "nextPageToken, files(id, name)",
      })
      .then(function (response) {
        appendPre("Files:");
        var files = response.result.files;
        if (files && files.length > 0) {
          for (var i = 0; i < files.length; i++) {
            var file = files[i];
            appendPre(file.name + " (" + file.id + ")");
            // add ImageComponent in span of ImagesData
            // addListData(ImageComponent(file.id));
            // length of list

            // list.push(file.id);
          }
        } else {
          appendPre("No files found.");
        }
      });
  }
  var temp = getListData();
  console.log(temp);
  return <div>App</div>;
};