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
        const doctor = await Doctor.findById(id);

        if (!doctor) {
            res.status(404).json({ success: false, message: 'No doctor found' });
            return;
        }

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
            });
        } else {
            doctors = await Doctor.find({ }); // Removed "const" keyword here
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
