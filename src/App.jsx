import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Login from "./pages/Login.jsx";
import Account from "./pages/Account.jsx";
import Settings from "./pages/Settings.jsx";
import Users from "./pages/Users.jsx";
import Cabins from "./pages/Cabins.jsx";
import Bookings from "./pages/Bookings.jsx";
import GlobalStyle from "./styles/GlobalStyles.js";
import AppLayout from "./ui/AppLayout.jsx";

function App() {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route element={<AppLayout />}>
						<Route
							index
							element={<Navigate replace to="dashboard" />}
						/>
						<Route
							path="/dashboard"
							element={<Dashboard></Dashboard>}
						/>
						<Route
							path="/bookings"
							element={<Bookings></Bookings>}
						/>
						<Route path="/cabins" element={<Cabins></Cabins>} />
						<Route path="/users" element={<Users></Users>} />
						<Route
							path="/settings"
							element={<Settings></Settings>}
						/>
						<Route path="/account" element={<Account></Account>} />
					</Route>

					<Route path="/login" element={<Login></Login>} />
					<Route path="/*" element={<PageNotFound></PageNotFound>} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
