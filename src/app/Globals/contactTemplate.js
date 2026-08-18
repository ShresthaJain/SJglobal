export function contactTemplate(data) {
  const {
    firstName,
    lastName,
    companyName,
    designation,
    email,
    phone,
    country,
    region,
    services = [],
    fileURL,
  } = data;

  return {
    subject: "New Contact Form Submission",
    html: `
      <h2>Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Company:</strong> ${companyName}</p>
      <p><strong>Designation:</strong> ${designation}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Location:</strong> ${region}, ${country}</p>

      <h3>Services</h3>
      <ul>${services.map(s => `<li>${s}</li>`).join("")}</ul>

      <p><strong>Attachment:</strong>
        ${fileURL ? `<a href="${fileURL}">View File</a>` : "None"}
      </p>
    `,
    text: `Contact Form Submission from ${firstName} ${lastName}`,
  };
}
