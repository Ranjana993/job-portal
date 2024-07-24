const jobs = [
    {
        "id": 1,
        "companyName": "Linear company",
        "jobTitle": "Software Engineer",
        "companyLogo": "/images/Linear.png",
        "minPrice": "20",
        "maxPrice": "30",
        "salaryType": "Yearly",
        "jobLocation": "Brussels",
        "postingDate": "2023-11-08",
        "experienceLevel": "Any experience",
        "employmentType": "Full-time",
        "description": "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt."
    },
    {
        "id": 2,
        "companyName": "Notion",
        "jobTitle": "Web Developer",
        "companyLogo": "/images/Notion.png",
        "minPrice": "40",
        "maxPrice": "50",
        "salaryType": "Yearly",
        "jobLocation": "San Francisco",
        "postingDate": "2023-11-02",
        "experienceLevel": "Internship",
        "employmentType": "Temporary",
        "description": "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt."
    },
    {
        "id": 3,
        "companyName": "Spline studio",
        "jobTitle": "Data Scientist",
        "companyLogo": "/images/Spline.png",
        "minPrice": "40",
        "maxPrice": "50",
        "salaryType": "Yearly",
        "jobLocation": "Seattle",
        "postingDate": "2023-10-28",
        "experienceLevel": "Any experience",
        "employmentType": "Full-time",
        "description": "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt."
    },
    {
        "id": 4,
        "companyName": "Raycast corp",
        "jobTitle": "UI/UX Designer",
        "companyLogo": "/images/Raycast.png",
        "minPrice": "40",
        "maxPrice": "50",
        "salaryType": "Monthly",
        "jobLocation": "London",
        "postingDate": "2023-10-05",
        "experienceLevel": "Work remotely",
        "employmentType": "Part-time",
        "description": "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt."
    },
    {
        "id": 5,
        "companyName": "Loom",
        "jobTitle": "Frontend Developer",
        "companyLogo": "/images/Loom.png",
        "minPrice": "50",
        "maxPrice": "75",
        "salaryType": "Yearly",
        "jobLocation": "London",
        "postingDate": "2023-10-28",
        "experienceLevel": "Intership",
        "employmentType": "Full-time",
        "description": "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt."
    },
    {
        "id": 6,
        "companyName": "Trainline group",
        "jobTitle": "DevOps Engineer",
        "companyLogo": "/images/Trainline.png",
        "minPrice": "80",
        "maxPrice": "120",
        "salaryType": "Yearly",
        "jobLocation": "Boston",
        "postingDate": "2023-10-05",
        "experienceLevel": "Intership",
        "employmentType": "Temporary",
        "description": "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt."
    },
    {
        "id": 1,
        "companyName": "Linear company",
        "jobTitle": "Software Engineer",
        "companyLogo": "/images/Linear.png",
        "minPrice": "30",
        "maxPrice": "80",
        "salaryType": "Yearly",
        "jobLocation": "Brussels",
        "postingDate": "2023-11-05",
        "experienceLevel": "Any experience",
        "employmentType": "Full-time",
        "description": "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt."
    },
    {
        "id": 2,
        "companyName": "Notion",
        "jobTitle": "Web Developer",
        "companyLogo": "/images/Notion.png",
        "minPrice": "40",
        "maxPrice": "50",
        "salaryType": "Yearly",
        "jobLocation": "San Francisco",
        "postingDate": "2023-10-28",
        "experienceLevel": "Internship",
        "employmentType": "Temporary",
        "description": "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt."
    },
    {
        "id": 3,
        "companyName": "Spline studio",
        "jobTitle": "Data Scientist",
        "companyLogo": "/images/Spline.png",
        "minPrice": "40",
        "maxPrice": "50",
        "salaryType": "Yearly",
        "jobLocation": "Seattle",
        "postingDate": "2023-10-28",
        "experienceLevel": "Any experience",
        "employmentType": "Full-time",
        "description": "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt."
    },
    {
        "id": 4,
        "companyName": "Raycast corp",
        "jobTitle": "UI/UX Designer",
        "companyLogo": "/images/Raycast.png",
        "minPrice": "40",
        "maxPrice": "50",
        "salaryType": "Monthly",
        "jobLocation": "London",
        "postingDate": "2023-10-05",
        "experienceLevel": "Work remotely",
        "employmentType": "Part-time",
        "description": "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt."
    },
    {
        "id": 5,
        "companyName": "Loom",
        "jobTitle": "Frontend Developer",
        "companyLogo": "/images/Loom.png",
        "minPrice": "50",
        "maxPrice": "75",
        "salaryType": "Yearly",
        "jobLocation": "London",
        "postingDate": "2023-10-28",
        "experienceLevel": "Intership",
        "employmentType": "Full-time",
        "description": "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt."
    },
    {
        "id": 6,
        "companyName": "Trainline group",
        "jobTitle": "DevOps Engineer",
        "companyLogo": "/images/Trainline.png",
        "minPrice": "80",
        "maxPrice": "120",
        "salaryType": "Yearly",
        "jobLocation": "Boston",
        "postingDate": "2022-10-05",
        "experienceLevel": "Intership",
        "employmentType": "Temporary",
        "description": "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt."
    }
]

module.exports = jobs