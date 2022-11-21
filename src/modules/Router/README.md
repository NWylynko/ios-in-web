## Router

This is a simple router for apps to use. Following the standard construct of a url it allows you to define routes are navigate between them.

## Components

```jsx
import { Router, Route } from "./Router"

export const App = () => {
  return (
    <Router>
      <Route path="/" screen={HomeScreen} />
      <Route path="/users" screen={UsersScreen} />
      <Route path="/user/:userId" screen={UserScreen} />
    </Router>
  )
}
```

```jsx
import { useRouter } from "./Router"

export const HomeScreen = () => {
  const { navigate } = useRouter()
  return (
    <>
      <button onClick={() => navigate("/users")}>Go to Users Screen</button>
    </>
  )
}

export const UsersScreen = () => {
  const { goBack, canGoBack } = useRouter()
  return (
    <>
      <button disabled={!canGoBack} onClick={goBack}>Go Back to home page</button>
    </>
  )
}
```