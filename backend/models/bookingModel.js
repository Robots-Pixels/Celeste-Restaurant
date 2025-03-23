import mongoose from "mongoose";
const bookingSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    day: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: false,
    },
    message: {
        type: String,
        required: false,
    }
},
{timestamps: true}
);

const Booking = new mongoose.model("Reservation", bookingSchema);

export default Booking;