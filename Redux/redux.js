const links = {
  visitor: [
    { display: "Home", path: "/", icon: "home" },
    {
      display: "Offers",
      children: [{ display: "List", path: "/" }],
      icon: "shopping_basket",
    },
    { display: "About", path: "/About", icon: "info" },
    {
      display: "SignUp",
      icon: "person_add",
      children: [
        { display: "As FreeLancer", path: "/FreeLancerSignup" },
        { display: "As Client", path: "/ClientSignup" },
      ],
    },
    {
      display: "Login",
      icon: "exit_to_app",
      children: [
        { display: "As FreeLancer", path: "/FreeLancerLogin" },
        { display: "As Client", path: "/ClientLogin" },
      ],
    },
  ],
  client: [
    { display: "Home", path: "/" },
    {
      display: "Offers",
      children: [
        { display: "List", path: "/" },
        { display: "Posted Offers", path: "/" },
        { display: "post offer", path: "/" },
      ],
    },
    { display: "About", path: "/" },
    {
      display: "Account",
      children: [{ display: "Profile", path: "/Profile" }],
    },
    { display: "Contact", path: "/" },
    { display: "Logout", path: "/" },
  ],
  freelancer: [
    { display: "Home", path: "/" },
    {
      display: "Offers",
      children: [
        { display: "List", path: "/" },
        { display: "Applications", path: "/" },
      ],
    },
    { display: "About", path: "/" },
    {
      display: "Account",
      children: [{ display: "Profile", path: "/Profile" }],
    },
    { display: "Contact", path: "/" },
    { display: "Logout", path: "/" },
  ],
};
const initState = {
  user: {},
  selectedprofile: {},
  links: links,
};

const reducers = {
  updatedata: (state, action) => {
    console.log();
    return {
      ...state,
      user: action.value,
    };
  },
  selectedprofile: (state, action) => {
    return {
      ...state,
      selectedprofile: action.value,
    };
  },
  unselect: (state, action) => {
    return {
      ...state,
      selectedprofile: {},
      user: action.value,
    };
  },
};

const rootReducer = (state = initState, action) => {
  console.log(action);
  if (Object.keys(reducers).includes(action.type)) {
    return reducers[action.type](state, action);
  }
  return state;
};

module.exports = {
  rootReducer,
};
