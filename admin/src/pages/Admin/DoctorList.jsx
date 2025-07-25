import React, { useContext, useEffect } from 'react';
import { AdminContext } from '../../context/Admincontext';
import { CheckCircle, XCircle } from 'lucide-react';

const DoctorList = () => {
  const {
    getAllDoctors,
    doctors,
    atoken,
    changeDoctorAvailability,
  } = useContext(AdminContext);

  useEffect(() => {
    if (atoken) {
      getAllDoctors();
    }
  }, [atoken]);

  const handleToggleAvailability = async (doctorId, currentStatus) => {
    try {
      await changeDoctorAvailability(doctorId, !currentStatus);
    } catch (err) {
      console.error('Error toggling availability:', err);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">All Doctors</h2>
      {doctors.length === 0 ? (
        <p className="text-gray-500 text-center">No doctors found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doc) => (
            <div
              key={doc._id}
              className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg hover:shadow-indigo-200 hover:bg-indigo-50 transform transition duration-300 hover:scale-[1.02] text-center"
            >
              <img
                src={doc.profilePic}
                alt={doc.name}
                className="w-28 h-28 mx-auto rounded-full object-cover mb-3 border-2 border-indigo-100 shadow"
              />
              <h3 className="text-lg font-semibold text-blue-800">{doc.name}</h3>
              <p className="text-gray-700 mb-1">{doc.specialization}</p>

              {/* ✅ Click to toggle availability */}
             
              <div
                onClick={() => handleToggleAvailability(doc._id, doc.available)}
                className="flex justify-center items-center gap-1 mt-2 cursor-pointer group"
                title="Click to toggle availability"
              >
                {doc.available ? (
                  <>
                    <CheckCircle className="text-green-600 w-5 h-5 group-hover:text-green-700 transition" />
                    <span className="text-green-600 font-medium text-sm group-hover:text-green-700">
                      Available
                    </span>
                  </>
                ) : (
                  <>
                    <XCircle className="text-red-500 w-5 h-5 group-hover:text-red-600 transition" />
                    <span className="text-red-500 font-medium text-sm group-hover:text-red-600">
                      Unavailable
                    </span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DoctorList;
