const Booking = require("../models/bookingSchema.js");
const Doctor = require("../models/doctorSchema.js");

module.exports.updateDoctor = async (req, res) => {
    const id = req.params.id; // Use req.params.id to access the route parameter

    try {
        const updateDoctor = await Doctor.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json({
            success: true,
            message: "Successfully updated",
            data: updateDoctor,
        });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to update' });
    }
};

module.exports.deleteDoctor = async (req, res) => {
    const id = req.params.id; // Use req.params.id to access the route parameter

    try {
        await Doctor.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: "Successfully deleted",
        });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to delete' });
    }
};

module.exports.getSingleDoctor = async (req, res) => {
    const id = req.params.id; // Use req.params.id to access the route parameter

    try {
        const doctor = await Doctor.findById(id).populate("reviews").select("-password");

        res.status(200).json({
            success: true,
            message: "Doctor found",
            data: doctor,
        });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to retrieve doctor' });
    }
};

module.exports.getAllDoctor = async (req, res) => {
    try {
        const { query } = req.query;
        let doctors;

        if (query) {
            doctors = await Doctor.find({
                isApproved: "approved",
                $or: [
                    { name: { $regex: query, $options: "i" } },
                    { specialization: { $regex: query, $options: "i" } },
                ],
            }).select("-password");
        } else {
            doctors = await Doctor.find({ isQppproved: "approved" }).select("-password"); 
        }

        res.status(200).json({
            success: true,
            message: "Doctors found",
            data: doctors,
        });
    } catch (err) {
        res.status(404).json({ success: false, message: 'No doctors found' });
    }
};

module.exports.getDoctorProfile = async(req, res)=>{
    const doctorId = req.userId;
    
    try {
        const doctor = await Doctor.findById(doctorId)

        if (!doctor) {
            return res
            .status(404)
            .json({success: false, message: "Doctor not found"})
        }

        const { password, ...rest } = doctor._doc;
        const appointments = await Booking.find({ doctor: doctorId});

        res.
        status(200)
        .json({
            success: true,
            message: "Profile info is getting",
        data: { ...rest, appointments },
     });
     }catch (err) {
            return res
            .status(500)
            .json({success:false,message:"Error in fetching profile information."})
    }
}

