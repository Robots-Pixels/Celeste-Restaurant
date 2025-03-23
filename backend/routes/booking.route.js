import express from "express";
import { newReservation } from "../controllers/booking.controller.js";

const bookingRoute = new express.Router();
bookingRoute.post("/newReservation", newReservation);

export default bookingRoute;