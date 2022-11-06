import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ErrorFallback from "./components/ErrorFallback";
import Navbar from "./components/Navbar";

const Home = React.lazy(() => import("./components/Home"));
const RepoList = React.lazy(() => import("./components/RepoList"));
const Repo = React.lazy(() => import("./components/Repo"));
const TestError = React.lazy(() => import("./components/TestError"));

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading</div>}>
              <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Home />
              </ErrorBoundary>
            </Suspense>
          }
        />
        <Route
          path="/repos"
          element={
            <Suspense fallback={<div>Loading</div>}>
              <ErrorBoundary FallbackComponent={ErrorFallback}>
                <RepoList />
              </ErrorBoundary>
            </Suspense>
          }
        >
          <Route
            path="/repos/:repo"
            element={
              <Suspense fallback={<div>Loading</div>}>
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                  <Repo />
                </ErrorBoundary>
              </Suspense>
            }
          />
        </Route>

        <Route
          path="/testerror"
          element={
            <Suspense fallback={<div>Loading</div>}>
              <ErrorBoundary FallbackComponent={ErrorFallback}>
                <TestError />
              </ErrorBoundary>
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
