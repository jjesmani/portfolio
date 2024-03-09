import "./App.css";
import Home from "./pages/index.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aboutme from "./pages/aboutme.tsx";
import Projects from "./pages/projects.tsx";
import Blogs from "./pages/blogs.tsx";
import Default from "./components/Layouts/default.tsx";

function App() {
	console.log();
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<Default>
							<Home />
						</Default>
					}
				/>
				<Route
					path="/about"
					element={
						<Default>
							<Aboutme />
						</Default>
					}
				/>
				<Route
					path="/projects"
					element={
						<Default>
							<Projects />
						</Default>
					}
				/>
				<Route
					path="/blogs"
					element={
						<Default>
							<Blogs />
						</Default>
					}
				/>
			</Routes>
		</BrowserRouter>
		// <Home />
	);
}

export default App;
