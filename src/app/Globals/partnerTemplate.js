export function partnerTemplate(data) {
  const {
    firstName,
    lastName,
    company,
    email,
    phone,
    country,
    servicesOffered = [],
    website,
    files,
  } = data;

  return {
    subject: "New Partner Inquiry",
    html: `
      <h2>Partner Inquiry</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Country:</strong> ${country}</p>

      <h3>Services Offered</h3>
      <ul>${servicesOffered.map(s => `<li>${s}</li>`).join("")}</ul>

      <p><strong>Website:</strong>
        ${website ? `<a href="${website}">${website}</a>` : "N/A"}
      </p>

      <p><strong>Files:</strong>
        ${files ? `<a href="${files}">View Files</a>` : "None"}
      </p>
    `,
    text: `Partner Inquiry from ${company}`,
  };
}
