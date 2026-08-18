export function talentTemplate(data) {
  const {
    firstName,
    lastName,
    email,
    phone,
    country,
    region,
    linkedin,
    domains = [],
    yearsOfExperience,
    partTime,
    bio,
    resume,
  } = data;

  return {
    subject: "New Talent Network Submission",
    html: `
      <h2>Talent Network Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "N/A"}</p>
      <p><strong>Location:</strong> ${region}, ${country}</p>
      <p><strong>LinkedIn:</strong> <a href="${linkedin}">${linkedin}</a></p>
      <p><strong>Experience:</strong> ${yearsOfExperience} years</p>
      <p><strong>Part Time:</strong> ${partTime ? "Yes" : "No"}</p>

      <h3>Domains</h3>
      <ul>${domains.map(d => `<li>${d}</li>`).join("")}</ul>

      <h3>Bio</h3>
      <p>${bio}</p>

      <p><strong>Resume:</strong>
        ${resume ? `<a href="${resume}">View Resume</a>` : "Not uploaded"}
      </p>
    `,
    text: `Talent Network Submission
Name: ${firstName} ${lastName}
Email: ${email}
Domains: ${domains.join(", ")}
Resume: ${resume || "N/A"}
`,
  };
}
