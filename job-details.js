/* global emailjs */
/* eslint-disable no-undef */

const emailjs = window.emailjs || globalThis.emailjs;
// EmailJS is loaded via script tag in HTML
(() => {
  // Check if EmailJS is loaded
  if (typeof emailjs !== "undefined") {
    emailjs.init("WugqMMmr5Zh-h55jk");
  } else {
    console.error(
      "EmailJS library not loaded. Please include the EmailJS script in your HTML."
    );
  }
})();

const jobsData = [
  {
    id: 1,
    title: "Payroll specialist",
    department: "Finance",
    location: "Remote",
    type: "Full-time",
    description:
      "Manage payroll processing and ensure accurate and timely payment to all employees.",
    fullDescription:
      "We are seeking a Payroll Specialist to oversee and process payroll for our organization. Responsibilities include maintaining payroll records, ensuring compliance with regulations, resolving payroll discrepancies, and providing support to employees regarding payroll matters.",
    requirements: [
      "High school diploma or equivalent",
      "Experience with payroll software and systems",
      "Strong attention to detail and accuracy",
      "Knowledge of payroll regulations and compliance",
      "Excellent organizational and communication skills",
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Paid time off",
      "Training programs",
      "Career advancement opportunities",
    ],
  },
  {
    id: 2,
    title: "Appointment and Funds Scheduler",
    department: "Finance",
    location: "Remote",
    type: "Full-time",
    description:
      "Coordinate appointments and manage scheduling of fund transfers for clients and internal teams.",
    fullDescription:
      "We are seeking an Appointment and Funds Scheduler to organize meetings, manage calendars, and oversee the scheduling of financial transactions. The ideal candidate will be detail-oriented, have strong organizational skills, and experience in financial operations or administrative support.",
    requirements: [
      "Bachelor's degree or relevant experience",
      "Excellent organizational and time management skills",
      "Strong communication abilities",
      "Experience with scheduling software",
      "Attention to detail",
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Paid time off",
      "Remote work options",
      "Professional development opportunities",
    ],
  },
  {
    id: 3,
    title: "Financial Specialist",
    department: "Finance",
    location: "Remote",
    type: "Full-time",
    description:
      "Oversee financial operations and provide expert guidance on budgeting, forecasting, and compliance.",
    fullDescription:
      "We are seeking a Financial Specialist to manage and analyze financial activities, prepare reports, ensure regulatory compliance, and support strategic decision-making. The ideal candidate will have strong analytical skills and experience in financial planning.",
    requirements: [
      "Bachelor's degree in Finance, Accounting, or related field",
      "Proficiency with financial software and spreadsheets",
      "Strong analytical and problem-solving skills",
      "Excellent attention to detail",
      "Experience in budgeting and forecasting",
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Paid time off",
      "Retirement plan",
      "Professional development opportunities",
    ],
  },
  {
    id: 4,
    title: "Office Assistant",
    department: "Administration",
    location: "Atlanta, GA",
    type: "Hybrid",
    description:
      "Provide administrative support to ensure smooth daily office operations.",
    fullDescription:
      "We are hiring an Office Assistant to perform clerical tasks, manage office supplies, and assist with scheduling. This is a hybrid role requiring part-time office presence.",
    requirements: [
      "Strong communication skills",
      "Basic MS Office knowledge",
      "Organized and detail-oriented",
    ],
    benefits: [
      "Flexible work schedule",
      "Health and dental coverage",
      "Paid holidays",
    ],
  },
  {
    id: 5,
    title: "Delivery Driver",
    department: "Logistics",
    location: "Dallas, TX",
    type: "Full-time",
    description:
      "Safely deliver packages to customers while ensuring timely service.",
    fullDescription:
      "We are hiring a Delivery Driver to join our logistics team. You will be responsible for transporting goods, ensuring on-time deliveries, and maintaining excellent customer service during drop-offs. Company vehicle and fuel will be provided.",
    requirements: [
      "Valid driver's license",
      "Clean driving record",
      "Ability to lift up to 50 lbs",
      "Time management skills",
    ],
    benefits: [
      "Company vehicle",
      "Fuel covered",
      "Health insurance",
      "Overtime pay",
    ],
  },
  {
    id: 6,
    title: "Data Entry Clerk",
    department: "Administration",
    location: "Remote",
    type: "Part-time",
    description: "Input and update company data accurately and efficiently.",
    fullDescription:
      "Seeking a Data Entry Clerk to manage digital records, update systems, and ensure data accuracy. The ideal candidate will be detail-oriented and comfortable working independently.",
    requirements: [
      "Typing speed of 50+ WPM",
      "Basic computer skills",
      "Attention to detail",
      "Ability to work independently",
      "Previous data entry experience preferred",
    ],
    benefits: [
      "Remote work",
      "Flexible schedule",
      "Training provided",
      "Paid time off",
    ],
  },
  {
    id: 7,
    title: "Company Driver",
    department: "Transportation",
    location: "Los Angeles, CA",
    type: "Full-time",
    description:
      "Transport company staff and clients safely to various destinations.",
    fullDescription:
      "We are looking for a reliable Company Driver to provide transportation services for employees and clients. This role requires excellent driving skills and professionalism.",
    requirements: [
      "Valid driver's license",
      "Clean driving history",
      "Professional appearance",
      "Punctuality",
    ],
    benefits: [
      "Steady salary",
      "Health insurance",
      "Fuel allowance",
      "Paid time off",
    ],
  },
  {
    id: 8,
    title: "Security Guard",
    department: "Security",
    location: "Miami, FL",
    type: "Full-time",
    description:
      "Ensure safety and protection of property, staff, and visitors.",
    fullDescription:
      "We are seeking a Security Guard to monitor premises, patrol facilities, and handle security incidents professionally. Training will be provided.",
    requirements: [
      "High school diploma",
      "Security license preferred",
      "Ability to work night shifts",
      "Strong observational skills",
    ],
    benefits: [
      "Uniform provided",
      "Health insurance",
      "Overtime pay",
      "Job stability",
    ],
  },
  {
    id: 9,
    title: "Janitor",
    department: "Facilities",
    location: "Chicago, IL",
    type: "Part-time",
    description:
      "Maintain cleanliness and sanitation across office facilities.",
    fullDescription:
      "We are hiring a Janitor to ensure office and common areas are clean, stocked, and safe. Responsibilities include sweeping, mopping, and handling waste disposal.",
    requirements: [
      "Previous cleaning experience",
      "Physical stamina",
      "Reliability",
    ],
    benefits: [
      "Flexible schedule",
      "Health coverage for full-time",
      "Paid sick days",
    ],
  },
  {
    id: 10,
    title: "Maintenance Technician",
    department: "Facilities",
    location: "Phoenix, AZ",
    type: "Full-time",
    description:
      "Perform routine maintenance and repairs on company equipment and facilities.",
    fullDescription:
      "We need a Maintenance Technician to handle general repairs, equipment servicing, and facility upkeep. Knowledge of electrical and plumbing systems is a plus.",
    requirements: [
      "Technical training or certification",
      "Handyman skills",
      "Problem-solving ability",
    ],
    benefits: ["Health and dental insurance", "401(k)", "Paid vacation"],
  },
  {
    id: 11,
    title: "Warehouse Associate",
    department: "Logistics",
    location: "Atlanta, GA",
    type: "Full-time",
    description:
      "Assist with inventory management, packaging, and shipments in the warehouse.",
    fullDescription:
      "Join our warehouse operations team as a Warehouse Associate. Duties include organizing inventory, preparing orders, and loading shipments.",
    requirements: [
      "Ability to lift heavy objects",
      "Organizational skills",
      "Teamwork",
    ],
    benefits: ["Overtime pay", "Health insurance", "Employee discounts"],
  },
  {
    id: 12,
    title: "Call Center Agent",
    department: "Support",
    location: "Remote",
    type: "Full-time",
    description:
      "Handle inbound and outbound calls while assisting customers with inquiries.",
    fullDescription:
      "We are hiring Call Center Agents to provide professional support, resolve concerns, and maintain positive customer experiences.",
    requirements: [
      "Good communication skills",
      "Call center experience preferred",
      "Ability to work flexible hours",
    ],
    benefits: ["Work from home", "Health insurance", "Performance bonuses"],
  },
  {
    id: 13,
    title: "Administrative Assistant",
    department: "Administration",
    location: "Denver, CO",
    type: "Hybrid",
    description:
      "Support executives with scheduling, documentation, and communications.",
    fullDescription:
      "We are seeking an Administrative Assistant to handle clerical duties, manage calendars, and coordinate meetings.",
    requirements: [
      "Organized and detail-oriented",
      "MS Office skills",
      "Professional demeanor",
    ],
    benefits: ["Health coverage", "401(k)", "Paid time off"],
  },
  {
    id: 14,
    title: "Personal Driver",
    department: "Transportation",
    location: "Washington, DC",
    type: "Full-time",
    description:
      "Provide safe and timely transportation services for executives.",
    fullDescription:
      "We are looking for a professional Personal Driver for our executive team. You'll be responsible for maintaining vehicle cleanliness and ensuring punctuality.",
    requirements: [
      "Valid driver's license",
      "Excellent navigation skills",
      "Discretion and professionalism",
    ],
    benefits: ["Competitive salary", "Fuel covered", "Health benefits"],
  },
  {
    id: 15,
    title: "Cook",
    department: "Catering",
    location: "Orlando, FL",
    type: "Full-time",
    description: "Prepare meals according to menu and dietary requirements.",
    fullDescription:
      "We are hiring a Cook to join our catering team. Responsibilities include meal preparation, kitchen sanitation, and assisting in menu planning.",
    requirements: [
      "Culinary training preferred",
      "Ability to work in fast-paced environment",
      "Team player",
    ],
    benefits: ["Free meals", "Health insurance", "Paid vacation"],
  },
  {
    id: 16,
    title: "Cashier",
    department: "Retail",
    location: "Las Vegas, NV",
    type: "Part-time",
    description:
      "Handle customer payments and provide excellent service at checkout.",
    fullDescription:
      "We are hiring Cashiers to process sales, assist customers, and manage registers in our retail store.",
    requirements: [
      "Basic math skills",
      "Customer service orientation",
      "Reliability",
    ],
    benefits: ["Store discounts", "Flexible shifts", "Paid training"],
  },
  {
    id: 17,
    title: "Housekeeper",
    department: "Hospitality",
    location: "San Diego, CA",
    type: "Full-time",
    description: "Maintain cleanliness of rooms and guest facilities.",
    fullDescription:
      "We are looking for Housekeepers to clean guest rooms, restock supplies, and ensure high sanitation standards.",
    requirements: [
      "Previous housekeeping experience",
      "Physical stamina",
      "Attention to detail",
    ],
    benefits: ["Free staff meals", "Health coverage", "Paid holidays"],
  },
  {
    id: 18,
    title: "Data Entry Clerk",
    department: "Administration",
    location: "Remote",
    type: "Part-time",
    description: "Input and update company data accurately and efficiently.",
    fullDescription:
      "Seeking a Data Entry Clerk to manage digital records, update systems, and ensure data accuracy.",
    requirements: [
      "Typing speed of 50+ WPM",
      "Basic computer skills",
      "Attention to detail",
    ],
    benefits: ["Remote work", "Flexible schedule", "Training provided"],
  },
  {
    id: 19,
    title: "Event Assistant",
    department: "Events",
    location: "Boston, MA",
    type: "Contract",
    description: "Assist in setting up and managing company events.",
    fullDescription:
      "We are hiring an Event Assistant to coordinate logistics, help with event setup, and ensure smooth execution of corporate gatherings.",
    requirements: [
      "Organizational skills",
      "Ability to lift 30 lbs",
      "Willingness to work weekends",
    ],
    benefits: [
      "Networking opportunities",
      "Free meals during events",
      "Flexible work schedule",
    ],
  },
  {
    id: 20,
    title: "Technical Support Specialist",
    department: "Support",
    location: "Seattle, WA",
    type: "Hybrid",
    description:
      "Provide IT troubleshooting and technical assistance for staff and customers.",
    fullDescription:
      "We are hiring a Technical Support Specialist to assist users with hardware and software issues, set up devices, and ensure smooth IT operations.",
    requirements: [
      "IT support experience",
      "Problem-solving mindset",
      "Strong communication",
    ],
    benefits: ["Health insurance", "401(k)", "Remote flexibility"],
  },
  {
    id: 21,
    title: "Front Desk Clerk",
    department: "Hospitality",
    location: "San Francisco, CA",
    type: "Full-time",
    description:
      "Manage guest check-ins, reservations, and provide excellent service.",
    fullDescription:
      "We are seeking a Front Desk Clerk to handle reservations, greet guests, and support front office operations at our hotel.",
    requirements: [
      "Customer service experience",
      "Professional communication skills",
      "Organized and reliable",
    ],
    benefits: ["Health coverage", "Paid time off", "Discounted hotel stays"],
  },
];

const CLOUDINARY_CLOUD_NAME = "dri1lagoo";
const CLOUDINARY_UPLOAD_PRESET = "card-image"; // Replace with your actual cloud name

function uploadToCloudinary(file) {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    // Determine the correct endpoint and resource type based on file type
    let uploadEndpoint = "upload"; // Default for images
    let resourceType = "image"; // Default resource type

    // Use raw upload for documents (PDF, DOC, DOCX)
    if (
      file.type === "application/pdf" ||
      file.type === "application/msword" ||
      file.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      uploadEndpoint = "raw/upload";
      resourceType = "raw";
      // Add resource_type parameter for raw uploads
      formData.append("resource_type", "raw");
    }

    fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/${uploadEndpoint}`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("[v0] Cloudinary response:", data); // Debug log
        if (data.secure_url) {
          resolve(data.secure_url);
        } else {
          reject(new Error("Upload failed: " + JSON.stringify(data)));
        }
      })
      .catch((error) => {
        console.error("[v0] Upload error:", error); // Debug log
        reject(error);
      });
  });
}

function loadJobDetail() {
  const jobId = localStorage.getItem("selectedJobId");
  if (!jobId) {
    window.location.href = "careers.html";
    return;
  }

  const job = jobsData.find((j) => j.id == jobId);
  if (!job) {
    window.location.href = "careers.html";
    return;
  }

  const submissionKey = `job_application_${jobId}`;
  const hasAlreadyApplied = localStorage.getItem(submissionKey);

  const departmentColors = {
    Engineering: "bg-blue-100 text-blue-800",
    Product: "bg-green-100 text-green-800",
    Sales: "bg-purple-100 text-purple-800",
    Design: "bg-orange-100 text-orange-800",
    Marketing: "bg-red-100 text-red-800",
    Support: "bg-indigo-100 text-indigo-800",
    "Human Resources": "bg-pink-100 text-pink-800",
    Finance: "bg-yellow-100 text-yellow-800",
    Legal: "bg-gray-100 text-gray-800",
    Operations: "bg-teal-100 text-teal-800",
  };

  const jobDetailContainer = document.getElementById("job-detail-container");
  jobDetailContainer.innerHTML = `
                <div class="mb-6">
                    <div class="flex items-center justify-between mb-4">
                        <span class="px-3 py-1 rounded-full text-sm font-medium ${
                          departmentColors[job.department] ||
                          "bg-gray-100 text-gray-800"
                        }">${job.department}</span>
                        <div class="text-right">
                            <span class="text-gray-600 text-sm">${
                              job.location
                            }</span>
                            <span class="text-gray-400 mx-2">•</span>
                            <span class="text-gray-600 text-sm">${
                              job.type
                            }</span>
                        </div>
                    </div>
                    <h1 class="text-4xl font-bold text-gray-900 mb-4">${
                      job.title
                    }</h1>
                    <p class="text-xl text-gray-600">${job.description}</p>
                </div>
                <div class="grid md:grid-cols-3 gap-8">
                    <div class="md:col-span-3">
                        <div class="mb-8">
                            <h2 class="text-2xl font-semibold text-gray-900 mb-4">About This Role</h2>
                            <p class="text-gray-700 leading-relaxed">${
                              job.fullDescription
                            }</p>
                        </div>
                        <div class="mb-8">
                            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Requirements</h2>
                            <ul class="space-y-2">${job.requirements
                              .map(
                                (req) =>
                                  `<li class="flex items-start"><svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg><span class="text-gray-700">${req}</span></li>`
                              )
                              .join("")}</ul>
                        </div>
                        <div>
                            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Benefits & Perks</h2>
                            <ul class="space-y-2">${job.benefits
                              .map(
                                (benefit) =>
                                  `<li class="flex items-start"><svg class="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span class="text-gray-700">${benefit}</span></li>`
                              )
                              .join("")}</ul>
                        </div>
                    </div>
                </div>
            `;

  // Inject the application form
  const formContainer = document.getElementById("application-form-container");

  if (hasAlreadyApplied) {
    const submissionData = JSON.parse(hasAlreadyApplied);
    formContainer.innerHTML = `
                    <div class="bg-white rounded-lg shadow-md p-8">
                        <div class="text-center">
                            <div class="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                                <svg class="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <h2 class="text-2xl font-bold text-gray-900 mb-2">Application Already Submitted</h2>
                            <p class="text-gray-600 mb-4">You have already submitted an application for the <strong>${job.title}</strong> position.</p>
                            <div class="bg-blue-50 border border-blue-200 rounded-md p-4 mb-6">
                                <div class="text-sm text-blue-800">
                                    <p><strong>Submitted on:</strong> ${submissionData.submittedAt}</p>
                                    <p><strong>Applicant:</strong> ${submissionData.applicantName}</p>
                                    <p><strong>Email:</strong> ${submissionData.email}</p>
                                </div>
                            </div>
                            <p class="text-sm text-gray-500 mb-6">We'll review your application and get back to you soon. You can only submit one application per position.</p>
                            <div class="space-y-3">
                                <button onclick="window.location.href='careers.html'" 
                                        class="w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
                                    Browse Other Positions
                                </button>
                                <button onclick="clearApplicationData('${jobId}')" 
                                        class="w-full justify-center rounded-md border border-red-300 bg-white py-2 px-4 text-sm font-medium text-red-700 shadow-sm hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors">
                                    Clear Application Data (Apply Again)
                                </button>
                            </div>
                        </div>
                    </div>
                `;
  } else {
    formContainer.innerHTML = `
                    <div class="bg-white rounded-lg shadow-md p-8">
                        <h2 class="text-3xl font-bold text-gray-900 mb-2">Apply for this position</h2>
                        <p class="text-gray-600 mb-4">Please fill out the form below to submit your application.</p>
                        <p class="text-sm text-red-600 mb-4 font-medium">NOTE: This form should be filled with capital letters throughout</p>
                        <p class="text-sm text-blue-600 mb-8 font-medium">⚠️ You can only submit one application per position. Please ensure all information is accurate before submitting.</p>
                        
                        <form action="" method="POST" class="space-y-8" onsubmit="handleFormSubmit(event)">
                        
                        <input type="hidden" name="Applying for Job" value="${job.title}">
                        <input type="hidden" name="cv-url" id="cv-url-hidden">

                        <!-- Enhanced personal details section with all employment form fields -->
                        <fieldset class="border-t border-gray-200 pt-6">
                            <legend class="text-lg font-semibold text-gray-900 mb-6">Personal Details</legend>
                            <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-6">
                                <div>
                                    <!-- Updated field name to match EmailJS template -->
                                    <label for="first-name" class="block text-sm font-medium text-gray-700">First Name *</label>
                                    <input type="text" name="first-name" id="first-name" required 
                                           class="mt-1 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 uppercase"
                                           style="text-transform: uppercase;" oninput="this.value = this.value.toUpperCase()">
                                </div>
                                <div>
                                    <!-- Updated field name to match EmailJS template -->
                                    <label for="middle-name" class="block text-sm font-medium text-gray-700">Middle Name</label>
                                    <input type="text" name="middle-name" id="middle-name" 
                                           class="mt-1 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 uppercase"
                                           style="text-transform: uppercase;" oninput="this.value = this.value.toUpperCase()">
                                </div>
                                <div>
                                    <!-- Updated field name to match EmailJS template -->
                                    <label for="last-name" class="block text-sm font-medium text-gray-700">Last Name *</label>
                                    <input type="text" name="last-name" id="last-name" required 
                                           class="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 uppercase"
                                           style="text-transform: uppercase;" oninput="this.value = this.value.toUpperCase()">
                                </div>
                                <div>
                                    <!-- Updated field name to match EmailJS template -->
                                    <label for="dob" class="block text-sm font-medium text-gray-700">Date of Birth (DD/MM/YYYY) *</label>
                                    <input type="date" name="dob" id="dob" required 
                                           class="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Sex *</label>
                                    <div class="flex space-x-4">
                                        <!-- Updated field name to match EmailJS template -->
                                        <label class="flex items-center">
                                            <input type="radio" name="sex" value="MALE" required class="h-6 w-4  text-blue-600 focus:ring-blue-500 border-gray-300">
                                            <span class="ml-2 text-sm text-gray-700">Male</span>
                                        </label>
                                        <label class="flex items-center">
                                            <input type="radio" name="sex" value="FEMALE" required class="h-6 w-4  text-blue-600 focus:ring-blue-500 border-gray-300">
                                            <span class="ml-2 text-sm text-gray-700">Female</span>
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Marital Status *</label>
                                    <div class="flex flex-wrap gap-4">
                                        <!-- Updated field name to match EmailJS template -->
                                        <label class="flex items-center">
                                            <input type="radio" name="marital-status" value="SINGLE" required class="h-6 w-4  text-blue-600 focus:ring-blue-500 border-gray-300">
                                            <span class="ml-2 text-sm text-gray-700">Single</span>
                                        </label>
                                        <label class="flex items-center">
                                            <input type="radio" name="marital-status" value="MARRIED" required class="h-6 w-4  text-blue-600 focus:ring-blue-500 border-gray-300">
                                            <span class="ml-2 text-sm text-gray-700">Married</span>
                                        </label>
                                        <label class="flex items-center">
                                            <input type="radio" name="marital-status" value="DIVORCED" required class="h-6 w-4  text-blue-600 focus:ring-blue-500 border-gray-300">
                                            <span class="ml-2 text-sm text-gray-700">Divorced</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>

                        <!-- Enhanced contact details section -->
                        <fieldset class="border-t border-gray-200 pt-6">
                            <legend class="text-lg font-semibold text-gray-900 mb-6">Contact Details</legend>
                               
                                <div class="sm:col-span-2 mb-1">
                                    <!-- Updated field name to match EmailJS template -->
                                    <label for="address" class="block text-sm font-medium text-gray-700">Contact Address *</label>
                                    <input type="text" name="address" id="address" required 
                                           class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 uppercase"
                                           style="text-transform: uppercase;" oninput="this.value = this.value.toUpperCase()">
                                </div>
                                 <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-10">
                                <div class="mt-1 ">
                                    <label for="city" class="block text-sm font-medium text-gray-700">City *</label>
                                    <input type="text" name="city" id="city" required 
                                           class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 uppercase"
                                           style="text-transform: uppercase;" oninput="this.value = this.value.toUpperCase()">
                                </div>
                                <div class="mt-1 ">
                                    <label for="state" class="block text-sm font-medium text-gray-700">State *</label>
                                    <input type="text" name="state" id="state" required 
                                           class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 uppercase"
                                           style="text-transform: uppercase;" oninput="this.value = this.value.toUpperCase()">
                                </div>
                                <div class="mt-1 ">
                                    <!-- Updated field name to match EmailJS template -->
                                    <label for="postal-code" class="block text-sm font-medium text-gray-700">Postal Code *</label>
                                    <input type="text" name="postal-code" id="postal-code" required 
                                           class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 uppercase"
                                           style="text-transform: uppercase;" oninput="this.value = this.value.toUpperCase()">
                                </div>
                                <div class="mt-1 ">
                                    <label for="country" class="block text-sm font-medium text-gray-700">Country *</label>
                                    <input type="text" name="country" id="country" required 
                                           class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 uppercase"
                                           style="text-transform: uppercase;" oninput="this.value = this.value.toUpperCase()">
                                </div>
                                <div class="mt-1 ">
                                    <label for="email" class="block text-sm font-medium text-gray-700">Email Address *</label>
                                    <input type="email" name="email" id="email" required 
                                           class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                                </div>
                                <div class="mt-1 ">
                                    <!-- Updated field name to match EmailJS template -->
                                    <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number *</label>
                                    <input type="tel" name="phone" id="phone" required 
                                           class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                                </div>
                                <div>
                                    <label for="alt-phone" class="block text-sm font-medium text-gray-700">Alternative Phone Number</label>
                                    <input type="tel" name="alt-phone" id="alt-phone"
                                           class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                                </div>
                                      </div>
                                <!-- Improved mobile-responsive CV upload section -->
                                <div class="sm:col-span-2">
                                    <label for="cv-upload" class="block text-sm font-medium text-gray-700">Upload CV/Resume *</label>
                                    <div class="mt-1 flex justify-center px-4 sm:px-6 pt-4 sm:pt-5 pb-4 sm:pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-blue-400 transition-colors">
                                        <div class="space-y-1 text-center w-full">
                                            <svg class="mx-auto h-8 w-8 sm:h-12 sm:w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <div class="flex flex-col sm:flex-row items-center justify-center text-sm text-gray-600">
                                                <label for="cv-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500 px-2 py-1">
                                                    <span>Upload a file</span>
                                                    <input id="cv-upload" name="cv-upload" type="file" class="sr-only" accept=".pdf,.doc,.docx" required onchange="handleCVUpload(event)">
                                                </label>
                                                <p class="mt-1 sm:mt-0 sm:pl-1">or drag and drop</p>
                                            </div>
                                            <p class="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
                                        </div>
                                    </div>

                                    <!-- Mobile-optimized CV Upload Status -->
                                    <div id="cv-upload-status" class="mt-2 hidden">
                                        <div class="flex items-center justify-center sm:justify-start">
                                            <div id="cv-upload-progress" class="hidden flex items-center">
                                                <svg class="animate-spin -ml-1 mr-2 h-4 w-4 sm:h-5 sm:w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                <span class="text-xs sm:text-sm text-blue-600">Uploading CV...</span>
                                            </div>
                                            <div id="cv-upload-success" class="hidden flex items-center">
                                                <svg class="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                                </svg>
                                                <span class="text-xs sm:text-sm text-green-600">CV uploaded successfully!</span>
                                            </div>
                                            <div id="cv-upload-error" class="hidden flex items-center">
                                                <svg class="h-4 w-4 sm:h-5 sm:w-5 text-red-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 001.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
                                                </svg>
                                                <span class="text-xs sm:text-sm text-red-600 break-words" id="cv-error-message">Upload failed. Please try again.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                          <!-- Enhanced attestation section with signature -->
                        <fieldset class="border-t border-gray-200 pt-6  ">
                            <legend class="text-lg font-semibold text-gray-900 mb-6">Attestation</legend>
                            <div class="space-y-6  w-[100%]">
                                <div class="bg-gray-50 p-4 rounded-md">
                                    <p class="text-sm text-gray-700 mb-4">
                                        I, <input type="text" name="attestation-name" id="attestation-name" required 
                                                  class="inline-block w-48 mx-1 px-2 py-1 border-b border-gray-400 bg-transparent focus:outline-none focus:border-blue-500 uppercase"
                                                  style="text-transform: uppercase;" oninput="this.value = this.value.toUpperCase()" placeholder="FULL NAME">, 
                                        hereby verify that the above information given by me is correct and if found otherwise, any drastic action can be taken against me.
                                    </p>
                                </div>
                                <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
                                    <div>
                                        <label for="signature" class="block text-sm font-medium text-gray-700">Digital Signature *</label>
                                        <input type="text" name="signature" id="signature" required placeholder="Type your full name as signature"
                                               class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 uppercase"
                                               style="text-transform: uppercase;" oninput="this.value = this.value.toUpperCase()">
                                    </div>
                                    <div>
                                        <label for="signature-date" class="block text-sm font-medium text-gray-700">Date *</label>
                                        <input type="date" name="signature-date" id="signature-date" required 
                                               class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                                    </div>
                                </div>
                                <div class="relative flex items-start">
                                    <div class="flex h-5 items-center">
                                        <input id="attestation-checkbox" name="attestation-checkbox" type="checkbox" required 
                                               class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="attestation-checkbox" class="font-medium text-gray-700">I confirm the attestation above *</label>
                                        <p class="text-gray-500">Check this box to confirm that you agree with the attestation statement.</p>
                                    </div>
                                </div>
                            </div>
                        </fieldset><br>

                        <div class="pt-6 block m-auto">
                            <button type="submit" class="w-full justify-center rounded-md border border-transparent bg-blue-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
                                Submit Employment Application
                            </button>
                        
                    </form>
                </div>
                `;
  }

  // Update page title
  document.title = `${job.title} - BLC Careers`;
}

function handleCVUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  // Validate file type
  const allowedTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  if (!allowedTypes.includes(file.type)) {
    showCVUploadError("Please upload a PDF, DOC, or DOCX file.");
    return;
  }

  // Validate file size (10MB limit)
  if (file.size > 10 * 1024 * 1024) {
    showCVUploadError("File size must be less than 10MB.");
    return;
  }

  // Show upload progress
  showCVUploadProgress();

  // Upload to Cloudinary
  uploadToCloudinary(file)
    .then((url) => {
      console.log("[v0] CV uploaded successfully:", url);
      document.getElementById("cv-url-hidden").value = url;
      showCVUploadSuccess();
    })
    .catch((error) => {
      console.error("[v0] CV upload failed:", error);
      showCVUploadError("Upload failed. Please try again.");
    });
}

function showCVUploadProgress() {
  const statusDiv = document.getElementById("cv-upload-status");
  const progressDiv = document.getElementById("cv-upload-progress");
  const successDiv = document.getElementById("cv-upload-success");
  const errorDiv = document.getElementById("cv-upload-error");

  statusDiv.classList.remove("hidden");
  progressDiv.classList.remove("hidden");
  successDiv.classList.add("hidden");
  errorDiv.classList.add("hidden");
}

function showCVUploadSuccess() {
  const progressDiv = document.getElementById("cv-upload-progress");
  const successDiv = document.getElementById("cv-upload-success");
  const errorDiv = document.getElementById("cv-upload-error");

  progressDiv.classList.add("hidden");
  successDiv.classList.remove("hidden");
  errorDiv.classList.add("hidden");
}

function showCVUploadError(message) {
  const progressDiv = document.getElementById("cv-upload-progress");
  const successDiv = document.getElementById("cv-upload-success");
  const errorDiv = document.getElementById("cv-upload-error");
  const errorMessage = document.getElementById("cv-error-message");

  progressDiv.classList.add("hidden");
  successDiv.classList.add("hidden");
  errorDiv.classList.remove("hidden");
  errorMessage.textContent = message;

  // Clear the file input
  document.getElementById("cv-upload").value = "";
}

function clearApplicationData(jobId) {
  const submissionKey = `job_application_${jobId}`;
  localStorage.removeItem(submissionKey);
  location.reload();
}

function handleFormSubmit(event) {
  event.preventDefault();

  const jobId = localStorage.getItem("selectedJobId");
  const submitButton = event.target.querySelector('button[type="submit"]');

  // Validate required fields
  const requiredFields = event.target.querySelectorAll("[required]");
  let isValid = true;

  requiredFields.forEach((field) => {
    if (!field.value.trim()) {
      isValid = false;
      field.classList.add("border-red-500");
    } else {
      field.classList.remove("border-red-500");
    }
  });

  const cvUrl = document.getElementById("cv-url-hidden").value;
  if (!cvUrl) {
    alert("⚠️ Please upload your CV/Resume before submitting.");
    return;
  }

  if (!isValid) {
    alert("⚠️ Please fill in all required fields marked with *");
    return;
  }

  // Show loading state
  submitButton.disabled = true;
  const originalButtonText = submitButton.innerHTML;
  submitButton.innerHTML = `
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting Application...
            `;

  const emailForm = document.createElement("form");
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());

  // Copy all form fields except the file input
  for (const [key, value] of formData.entries()) {
    if (key !== "cv-upload") {
      // Exclude the file input
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = value;
      emailForm.appendChild(input);
    }
  }

  // Ensure CV URL is included in the EmailJS submission
  if (!data["cv-url"] && cvUrl) {
    const cvInput = document.createElement("input");
    cvInput.type = "hidden";
    cvInput.name = "cv-url";
    cvInput.value = cvUrl;
    emailForm.appendChild(cvInput);
  }

  emailjs.sendForm("service_njbyaqd", "template_5axgyfk", emailForm).then(
    (response) => {
      const submissionKey = `job_application_${jobId}`;
      const submissionData = {
        jobId: jobId,
        jobTitle: data["Applying for Job"],
        applicantName: `${data["first-name"] || ""} ${
          data["middle-name"] || ""
        } ${data["last-name"] || ""}`.trim(),
        email: data.email,
        cvUrl: cvUrl,
        submittedAt: new Date().toLocaleString(),
        timestamp: Date.now(),
      };

      localStorage.setItem(submissionKey, JSON.stringify(submissionData));

      // Success handling
      submitButton.innerHTML = `
                        <svg class="w-5 h-5 mr-2 inline" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        Application Sent Successfully!
                    `;
      submitButton.classList.remove("bg-blue-600", "hover:bg-blue-700");
      submitButton.classList.add("bg-green-600");

      // Show success message
      const successMessage = document.createElement("div");
      successMessage.className =
        "mt-4 p-4 bg-green-50 border border-green-200 rounded-md";
      successMessage.innerHTML = `
                        <div class="flex">
                            <svg class="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                            <div>
                                <h3 class="text-sm font-medium text-green-800">Application Submitted Successfully!</h3>
                                <p class="text-sm text-green-700 mt-1">Thank you ${data["first-name"]} ${data["last-name"]} for your interest in the ${data["Applying for Job"]} position. We'll review your application and CV, then get back to you soon.</p>
                                <p class="text-xs text-green-600 mt-2">Note: You can only submit one application per position. This form will be disabled for future visits.</p>
                            </div>
                        </div>
                    `;
      event.target.appendChild(successMessage);

      setTimeout(() => {
        location.reload();
      }, 4000);
    },
    (err) => {
      // Error handling
      submitButton.disabled = false;
      submitButton.innerHTML = originalButtonText;

      const errorMessage = document.createElement("div");
      errorMessage.className =
        "mt-4 p-4 bg-red-50 border border-red-200 rounded-md";
      errorMessage.innerHTML = `
                        <div class="flex">
                            <svg class="w-5 h-5 text-red-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 001.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
                            </svg>
                            <div>
                                <h3 class="text-sm font-medium text-red-800">Submission Failed</h3>
                                <p class="text-sm text-red-700 mt-1">There was an error submitting your application. Please try again or contact support if the problem persists.</p>
                                <p class="text-xs text-red-600 mt-2">Error: ${
                                  err.text || "Unknown error occurred"
                                }</p>
                            </div>
                        </div>
                    `;
      event.target.appendChild(errorMessage);

      // Remove error message after 5 seconds
      setTimeout(() => {
        errorMessage.remove();
      }, 5000);
    }
  );
}

document.addEventListener("DOMContentLoaded", () => {
  loadJobDetail();

  // Add real-time validation for required fields
  setTimeout(() => {
    const requiredFields = document.querySelectorAll("[required]");
    requiredFields.forEach((field) => {
      field.addEventListener("blur", function () {
        if (!this.value.trim()) {
          this.classList.add("border-red-500", "ring-red-500");
        } else {
          this.classList.remove("border-red-500", "ring-red-500");
        }
      });

      field.addEventListener("input", function () {
        if (this.value.trim()) {
          this.classList.remove("border-red-500", "ring-red-500");
        }
      });
    });

    // Email validation
    const emailField = document.getElementById("email");
    if (emailField) {
      emailField.addEventListener("blur", function () {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (this.value && !emailRegex.test(this.value)) {
          this.classList.add("border-red-500", "ring-red-500");
        } else if (this.value) {
          this.classList.remove("border-red-500", "ring-red-500");
          this.classList.add("border-green-500", "ring-green-500");
        }
      });
    }
  }, 1000);
});

function goBack() {
  window.location.href = "careers.html";
}

// Mobile menu functionality
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
mobileMenuButton.addEventListener("click", () =>
  mobileMenu.classList.toggle("hidden")
);
document.addEventListener("click", (event) => {
  if (
    !mobileMenu.contains(event.target) &&
    !mobileMenuButton.contains(event.target) &&
    !mobileMenu.classList.contains("hidden")
  ) {
    mobileMenu.classList.add("hidden");
  }
});
