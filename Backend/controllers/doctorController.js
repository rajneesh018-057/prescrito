import Doctor from '../models/doctorModel.js';

const changeAvailability = async (req, res) => {
  try {
    const { doctorId, available } = req.body;

    // Validate request data
    if (!doctorId || typeof available !== 'boolean') {
      return res.status(400).json({ message: 'Invalid request data' });
    }

    // Update doctor's availability
    const updatedDoctor = await Doctor.findByIdAndUpdate(
      doctorId,
      { available: available },
      { new: true }
    );

    if (!updatedDoctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Doctor availability updated',
      doctor: updatedDoctor,
    });

  } catch (error) {
    console.error('Error changing availability:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
 const doctorlist = async (req, res) => {
  try {
    const doctors = await Doctor.find({}).select(['-__v -password', '-email', '-createdAt', '-updatedAt']);
    res.status(200).json({
      success: true,
      message: 'Doctor list fetched successfully',
      doctors,
    });
  } catch (error) {
    console.error('Error fetching doctor list:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
}
// controllers/doctorController.js

const getDoctorById = async (req, res) => {
  try {
    const { id } = req.params;

    const doctor = await Doctor.findById(id).select('-password -__v');

    if (!doctor) {
      return res.status(404).json({ success: false, message: 'Doctor not found' });
    }

    res.status(200).json({ success: true, doctor });
  } catch (error) {
    console.error('Error fetching doctor:', error);
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};



  export { changeAvailability, doctorlist , getDoctorById };