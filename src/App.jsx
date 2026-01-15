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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import Booking from "./pages/Booking.jsx";
import Checkin from "./pages/Checkin.jsx";
import ProtectedRoute from "./ui/ProtectedRoute.jsx";
import { DarkModeProvider } from "./context/DarkModeContext.jsx";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 0,
		},
	},
});

function App() {
	return (
		<>
			<DarkModeProvider>
				<QueryClientProvider client={queryClient}>
					<ReactQueryDevtools initialIsOpen={false} />
					<GlobalStyle />
					<BrowserRouter>
						<Routes>
							<Route
								element={
									<ProtectedRoute>
										<AppLayout />
									</ProtectedRoute>
								}
							>
								<Route
									index
									element={
										<Navigate replace to="dashboard" />
									}
								/>
								<Route
									path="/dashboard"
									element={<Dashboard></Dashboard>}
								/>
								<Route
									path="/bookings"
									element={<Bookings></Bookings>}
								/>
								<Route
									path="/bookings/:bookingId"
									element={<Booking></Booking>}
								/>
								<Route
									path="/checkin/:bookingId"
									element={<Checkin></Checkin>}
								/>
								<Route
									path="/cabins"
									element={<Cabins></Cabins>}
								/>
								<Route
									path="/users"
									element={<Users></Users>}
								/>
								<Route
									path="/settings"
									element={<Settings></Settings>}
								/>
								<Route
									path="/account"
									element={<Account></Account>}
								/>
							</Route>
							<Route path="/login" element={<Login></Login>} />
							<Route
								path="/*"
								element={<PageNotFound></PageNotFound>}
							/>
						</Routes>
					</BrowserRouter>
					<Toaster
						position="top-center"
						gutter={12}
						containerStyle={{ margin: "8px" }}
						toastOptions={{
							success: { duration: 3000 },
							error: { duration: 5000 },
							style: {
								fontSize: "16px",
								maxWidth: "500px",
								padding: "16px 24px",
								background: "var(--color-grey-0)",
								color: "var(--color-grey-700)",
							},
						}}
					/>
				</QueryClientProvider>
			</DarkModeProvider>
		</>
	);
}

export default App;












