import add_icon from './add_icon.svg'
import admin_logo from './admin_logo.svg'
import appointment_icon from './appointment_icon.svg'
import cancel_icon from './cancel_icon.svg'
import doctor_icon from './doctor_icon.svg'
import home_icon from './home_icon.svg'
import people_icon from './people_icon.svg'
import upload_area from './upload_area.svg'
import list_icon from './list_icon.svg'
import tick_icon from './tick_icon.svg'
import appointments_icon from './appointments_icon.svg'
import earning_icon from './earning_icon.svg'
import patients_icon from './patients_icon.svg'
import header_img from './header_img.png'
import  logo from './logo.svg'
import arrow_icon from './arrow_icon.svg'
import dropdown_icon from './dropdown_icon.svg'
import profile_pic from './profile_pic.png'
import group_profiles from './group_profiles.png' 
import dermatologist from './Dermatologist.svg'
import gastroenterologist from './Gastroenterologist.svg'
import general_physician from './General_physician.svg'
import gynecologist from './Gynecologist.svg'
import neurologist from './Neurologist.svg'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import appointment_img from './appointment_img.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import about_image from './about_image.png'
import contact_image from './contact_image.png'


  


export const assets = {
    add_icon,
    admin_logo,
    appointment_icon,
    cancel_icon,
    doctor_icon,
    upload_area,
    home_icon,
    patients_icon,
    people_icon,
    list_icon,
    tick_icon,
    appointments_icon,
    earning_icon,
    dropdown_icon ,
    profile_pic,
    logo,
    
    group_profiles, 
    header_img,
    arrow_icon,
    dermatologist,
    gastroenterologist,
    general_physician,
   
    gynecologist,
    neurologist,doc1,
    doc2,
    doc3,
    doc4,
    doc5,
    doc6,
    doc7,
    doc8,
    doc9,
    doc10,appointment_img,
    doc11,
    doc12,
    doc13,
    doc14,
    doc15,
    about_image,
    contact_image
    
    
  
}

export const doctorsData = [
  {
    id: 1,
    name: 'Dr. James Wilson',
    speciality: 'General Physician',
    rating: 4.9,
    image: assets.doc1,
    education: 'MBBS, MD - General Medicine, Oxford University',
    address: '123 Baker Street, London',
    contact: '+44 20 7946 0958',
    about: 'Experienced General Physician with over 15 years in treating a wide range of adult illnesses.',
    appointmentFee: '£70'
  },
  {
    id: 2,
    name: 'Dr. Olivia Bennett',
    speciality: 'Gynecologist',
    rating: 4.8,
    image: assets.doc2,
    education: 'MBBS, MS - Obstetrics & Gynaecology, Cambridge',
    address: '221B Park Lane, Manchester',
    contact: '+44 161 123 4567',
    about: 'Compassionate gynecologist specializing in prenatal care and women’s health.',
    appointmentFee: '£80'
  },
  {
    id: 3,
    name: 'Dr. Harry Clarke',
    speciality: 'Neurologist',
    rating: 4.7,
    image: assets.doc3,
    education: 'MBBS, DM - Neurology, King’s College London',
    address: '5 Thames Street, Birmingham',
    contact: '+44 121 654 7890',
    about: 'Neurologist with a strong background in treating neurological disorders like epilepsy and migraines.',
    appointmentFee: '£90'
  },
  {
    id: 4,
    name: 'Dr. Sophie Walker',
    speciality: 'Dermatologist',
    rating: 4.9,
    image: assets.doc4,
    education: 'MBBS, MD - Dermatology, University of Edinburgh',
    address: '32 Royal Mile, Edinburgh',
    contact: '+44 131 987 6543',
    about: 'Renowned dermatologist known for skin treatments and cosmetic dermatology.',
    appointmentFee: '£75'
  },
  {
    id: 5,
    name: 'Dr. Thomas Hughes',
    speciality: 'Gastroenterologist',
    rating: 4.6,
    image: assets.doc5,
    education: 'MBBS, MD - Gastroenterology, University of Bristol',
    address: '44 Clifton Road, Bristol',
    contact: '+44 117 123 7890',
    about: 'Expert in digestive system disorders including IBS, liver, and pancreas issues.',
    appointmentFee: '£85'
  },
  {
    id: 6,
    name: 'Dr. Emily Watson',
    speciality: 'General Physician',
    rating: 4.8,
    image: assets.doc6,
    education: 'MBBS, MD - Internal Medicine, Imperial College London',
    address: '88 Kensington Street, London',
    contact: '+44 20 8123 4567',
    about: 'Skilled physician with focus on chronic illnesses and preventive healthcare.',
    appointmentFee: '£70'
  },
  {
    id: 7,
    name: 'Dr. Daniel Turner',
    speciality: 'Neurologist',
    rating: 4.7,
    image: assets.doc7,
    education: 'MBBS, DM - Neurology, University of Leeds',
    address: '17 York Road, Leeds',
    contact: '+44 113 765 4321',
    about: 'Neurologist passionate about neurorehabilitation and patient-focused care.',
    appointmentFee: '£90'
  },
  {
    id: 8,
    name: 'Dr. Charlotte Evans',
    speciality: 'Dermatologist',
    rating: 4.9,
    image: assets.doc8,
    education: 'MBBS, MD - Skin & VD, University of Glasgow',
    address: '91 Queen Street, Glasgow',
    contact: '+44 141 234 5678',
    about: 'Skincare expert providing treatment for acne, eczema, and cosmetic procedures.',
    appointmentFee: '£75'
  },
  {
    id: 9,
    name: 'Dr. William Foster',
    speciality: 'Gynecologist',
    rating: 4.6,
    image: assets.doc9,
    education: 'MBBS, MS - Gynae, University of Liverpool',
    address: '12 Albert Dock, Liverpool',
    contact: '+44 151 765 4321',
    about: 'Dedicated gynecologist with expertise in infertility and reproductive health.',
    appointmentFee: '£80'
  },
  {
    id: 10,
    name: 'Dr. Amelia Robinson',
    speciality: 'Gastroenterologist',
    rating: 4.8,
    image: assets.doc10,
    education: 'MBBS, MD - Gastro, University of Nottingham',
    address: '65 Trent Street, Nottingham',
    contact: '+44 115 999 8888',
    about: 'Gastroenterologist focused on endoscopy and gastrointestinal cancer prevention.',
    appointmentFee: '£85'
  },
  {
    id: 11,
    name: 'Dr. Benjamin Scott',
    speciality: 'General Physician',
    rating: 4.7,
    image: assets.doc11,
    education: 'MBBS, MD - General Medicine, University of Manchester',
    address: '101 Oxford Road, Manchester',
    contact: '+44 161 999 1234',
    about: 'Trusted general practitioner with a holistic approach to patient care.',
    appointmentFee: '£70'
  },
  {
    id: 12,
    name: 'Dr. Grace Mitchell',
    speciality: 'Gynecologist',
    rating: 4.9,
    image: assets.doc12,
    education: 'MBBS, MS - Obstetrics & Gynaecology, University of Birmingham',
    address: '7 Queen’s Avenue, Birmingham',
    contact: '+44 121 456 7890',
    about: 'Experienced in managing high-risk pregnancies and laparoscopic surgeries.',
    appointmentFee: '£80'
  },
  {
    id: 13,
    name: 'Dr. Samuel Green',
    speciality: 'Neurologist',
    rating: 4.6,
    image: assets.doc13,
    education: 'MBBS, DM - Neurology, University of Southampton',
    address: '59 Ocean Boulevard, Southampton',
    contact: '+44 23 8055 1122',
    about: 'Specializes in stroke recovery and Parkinson’s disease treatment.',
    appointmentFee: '£90'
  },
  {
    id: 14,
    name: 'Dr. Hannah Lewis',
    speciality: 'Dermatologist',
    rating: 4.8,
    image: assets.doc14,
    education: 'MBBS, MD - Dermatology, University of Sheffield',
    address: '14 Park Square, Sheffield',
    contact: '+44 114 789 2345',
    about: 'Expert in medical and aesthetic dermatology with a gentle approach.',
    appointmentFee: '£75'
  },
  {
    id: 15,
    name: 'Dr. Matthew Hall',
    speciality: 'Gastroenterologist',
    rating: 4.7,
    image: assets.doc15,
    education: 'MBBS, MD - Gastroenterology, University of Exeter',
    address: '23 Cathedral Close, Exeter',
    contact: '+44 1392 567 890',
    about: 'Special interest in liver diseases and minimally invasive GI procedures.',
    appointmentFee: '£85'
  }
];
