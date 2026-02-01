// src/data/courses.js
export const courses = Array.from({ length: 20 }, (_, i) => ({
  id: `course-${i + 1}`,
  title: `Course ${i + 1}: Web + AI`,
  level: i < 5 ? "Beginner" : i < 12 ? "Intermediate" : "Advanced",
  description: "Learn real-world frontend, JavaScript, React, Next.js & AI concepts.",
  sections: [
    {
      heading: "Introduction",
      content: "This course explains concepts in simple words."
    },
    {
      heading: "Core Concepts",
      content: "Deep explanation with examples.",
      code: `function hello(){ console.log("Hello World") }`
    },
    {
      heading: "Practice",
      content: "Try questions & ask AI in chat."
    }
  ]
}));
