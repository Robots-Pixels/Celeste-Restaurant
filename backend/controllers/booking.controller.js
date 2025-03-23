import Booking from "../models/bookingModel.js";

export const newReservation = async (req, res) => {
    const firstName = req.body.bigFirstName || req.body.firstName || undefined;
    const lastName = req.body.bigLastName || req.body.lastName || undefined;
    const day = req.body.bigDay || req.body.day || undefined;
    const time = req.body.bigTime || req.body.time || undefined;
    const email = req.body.bigEmail || req.body.email || undefined;
    const message = req.body.bigMessage || req.body.message || undefined;

    try {
        const newReservation = new Booking({firstName, lastName, email, day, time, message});
        await newReservation.save();
        res.status(200).json({
            success: true,
            message: "Reservion sent successfully"
        });
        console.log();

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: `Error: ${error}`
        })
    }

}
