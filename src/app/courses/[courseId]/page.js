// src/app/courses/[courseId]/page.js
"use client";

import { courses } from "@/data/courses";

export default function CourseDetail({ params }) {
  const course = courses.find((c) => c.id === params.courseId);

  // 🌟 Hydration safe
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  if (!course) return <h1>Course not found</h1>;

  return (
    <div className="min-h-screen p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">{course.title}</h1>

      {course.sections.map((s, i) => (
        <section key={i} className="mb-6 p-4 bg-white rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-2">{s.heading}</h2>
          <p className="text-gray-700 mb-2">{s.content}</p>
          {s.code && (
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{s.code}</code>
            </pre>
          )}
        </section>
      ))}
    </div>
  );
}
