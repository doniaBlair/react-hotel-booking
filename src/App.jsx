import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AllRooms from "./pages/AllRooms";
import RoomDetails from "./pages/RoomDetails";
import MyBookings from "./pages/MyBookings";
import HotelRegistration from "./components/HotelRegistration";
import Layout from "./pages/hotel-owner/Layout";
import Dashboard from "./pages/hotel-owner/Dashboard";
import AddRoom from "./pages/hotel-owner/AddRoom";
import ListRoom from "./pages/hotel-owner/ListRoom";

const App = () => {
    const isOwnerPath = useLocation().pathname.includes('owner');

	return (
		<>
			{!isOwnerPath && <Navbar />}
            {false && <HotelRegistration />}
            <div className="min-h-[70vh]">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/rooms" element={<AllRooms />} />
                    <Route path="/rooms/:id" element={<RoomDetails />} />
                    <Route path="/my-bookings" element={<MyBookings />} />
                    <Route path='/owner' element={<Layout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="add-room" element={<AddRoom />} />
                        <Route path="list-room" element={<ListRoom />} />
                    </Route>
                </Routes>
            </div>
            <Footer />
		</>
	);
};

export default App;