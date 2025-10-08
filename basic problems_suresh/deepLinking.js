const linking = {
  prefixes: ["myapp://", "https://myapp.com"],
  config: {
    screens: {
      Home: "home",
      Profile: "profile/:id",
    },
  },
};

export default function App() {
  return <NavigationContainer linking={linking} />;
}
// Now, opening myapp://profile/123 navigates to Profile with id=123.
