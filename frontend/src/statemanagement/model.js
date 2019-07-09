import { action, thunk, computed } from "easy-peasy";
import axios from "axios";

let APIrequest = axios.create({
  baseURL: "http://localhost:8000/"
});

// To debug stuff that uses Axios

APIrequest.interceptors.request.use(request => {
  console.log("Making HTTP request: ", request);
  return request;
});

APIrequest.interceptors.response.use(response => {
  console.log("HTTP Response: ", response);
  return response;
});

const authModel = {
  isLoggedIn: false,
  token: computed(_ => {
    if (localStorage.getItem("token") === null) {
      console.log("token: No token found in localStorage ");
      return null;
    } else {
      return localStorage.getItem("token");
    }
  }),
  authError: null,

  checkSavedToken: action((state, _) => {
    if (state.token != null) {
      console.log("checkSavedToken: Found Token in localStorage, loaded");
      APIrequest.defaults.headers.common["Authorization"] =
        "Token " + state.token;
      console.log("checkSavedToken: Set auth headers");
      state.isLoggedIn = true;
      console.log("checkSavedToken: Logged in");
    } else {
      console.log("checkSavedToken: Token state is null");
    }
  }),

  setToken: action((state, payload) => {
    try {
      localStorage.setItem("token", payload.auth_token);
      state.isLoggedIn = true;
      console.log("setToken: Logged in");
    } catch (err) {
      console.log("setToken: Could not set token: " + err);
    }
  }),

  deleteToken: action((state, payload) => {
    try {
      localStorage.removeItem("token");
      APIrequest.defaults.headers.common["Authorization"] = "";
      console.log("deleteToken: Token deleted. Headers reset.");
      state.isLoggedIn = false;
    } catch (err) {
      console.log("deleteToken: Could not delete token: " + err);
    }
  }),

  fetchToken: thunk(async (actions, payload) => {
    return APIrequest.post("/token/login", {
      username: payload.username,
      password: payload.password
    })
      .then(response => response.data)
      .then(json => {
        actions.setToken(json);
      })
      .catch(error => {
        if (error.response) {
          actions.updateAuthErrorState(error.response.status);
        } else if (error.request) {
          actions.updateAuthErrorState(error.request.status);
        } else {
          actions.updateAuthErrorState(error.message);
        }
      });
  }),

  revokeToken: thunk(async (actions, _) => {
    return APIrequest.post("/token/logout")
      .then(response => {
        actions.deleteToken();
        console.log("revokeToken: Token revoked successfully");
      })
      .catch(err => {
        console.log("revokeToken: Token revocation failed: " + err);
      });
  }),

  updateAuthErrorState: action((state, payload) => {
    if (payload === 400) {
      console.log(
        "updateAuthErrorState: Bad request, usually means un/pw were wrong"
      );
      state.authError = payload;
    } else if (payload === 403) {
      console.log("updateAuthErrorState: Forbidden? What are you up to, huh?");
      state.authError = payload;
    } else if (payload === 500) {
      console.log(
        "updateAuthErrorState: Internal Server Error. Django is not happy"
      );
    } else {
      console.log("updateAuthErrorState: Error setting up request");
    }
  })
};

const userDataModel = {
  userLists: [],
  userObject: {
    // mock, need to write function to grab from server
    email: "luisroel@me.com",
    sales_tax_rate: "0.07",
    id: 1,
    username: "phaseon",
    // This does not exist in the backend, we read/write this value in the
    // front end only
    startup_route: "/welcome"
  },

  defaultPage: "#",

  // This is how we redirect people after events
  setDefaultPage: action((state, payload) => {
    state.defaultPage = payload;
  }),

  isLoggedInListener: thunk(
    (actions, payload, { getStoreState }) => {
      if (getStoreState().auth.isLoggedIn) {
        actions.setDefaultPage(
          getStoreState().userData.userObject.startup_route
        );
        console.log("isLoggedInListener: defaultPage set to userObject route");
      } else {
        actions.setDefaultPage("/");
        console.log("isLoggedInListener: defaulPage set to root");
      }
    },
    {
      listenTo: [
        authModel.setToken,
        authModel.deleteToken,
        authModel.checkSavedToken
      ]
    }
  ),

  saveUsernameListener: thunk(
    (actions, payload) => {
      console.log(payload);
      if (payload.saveUsername) {
        localStorage.setItem("saved_username", payload.username);
        console.log(
          "saveUsernameListener: Username " + payload.username + " saved"
        );
      } else {
        console.log("saveUsernameListener: No Username saved");
      }
    },
    // Everytime a user logs in, we want to check if they opted
    // to save their username
    { listenTo: [authModel.fetchToken] }
  )
};

const userRegistrationModel = {
  registrationError: null,
  registrationSuccess: null,

  setRegStatus: action((state, payload) => {
    // Handle reset payload
    if (payload === "reset") {
      state.registrationError = "";
      state.registrationSuccess = null;
    }

    // Handle setting success
    if (payload === "success") {
      state.registrationSuccess = true;
    } else {
      // If not, then just set it to the payload
      state.registrationError = payload;
    }
  }),

  postNewUser: thunk(async (actions, payload) => {
    return APIrequest.post("/users/", {
      email: payload.email,
      sales_tax_rate: payload.salesTaxRate,
      username: payload.username,
      password: payload.password
    })
      .then(response => {
        console.log(response);
        actions.setRegStatus("success");
      })
      .catch(error => {
        let regError = error.response.data;
        // Naive implementation, does not account for all errors occurring
        // simultaneously
        console.log(regError);

        // Reset our regstatus before user tries to post again
        actions.setRegStatus("reset");

        // Set to array of keys contained in our regError object
        // This is simpler than having to do a cascading if-else
        actions.setRegStatus(Object.keys(regError));
      });
  })
};

const model = {
  auth: authModel,
  userData: userDataModel,
  userRegistration: userRegistrationModel
};

export default model;
