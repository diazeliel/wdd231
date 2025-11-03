 // Set the current year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Get and format the last modified date
  const lastModified = document.lastModified;
  document.getElementById('lastModified').textContent = lastModified;

const allCourses = [
    { code: 'CSE 110', category: 'cse', credits: 2, completed: true },
    { code: 'CSE 111', category: 'cse', credits: 2, completed: false },
    { code: 'CSE 210', category: 'cse', credits: 2, completed: false },
    { code: 'WDD 130', category: 'wdd', credits: 2, completed: true },
    { code: 'WDD 131', category: 'wdd', credits: 2, completed: true },
    { code: 'WDD 231', category: 'wdd', credits: 2, completed: false }
  ];

  let currentFilter = 'all';

  function displayCourses(courses) {
    const container = document.getElementById('coursesContainer');
    container.innerHTML = '';
    courses.forEach(course => {
      const courseDiv = document.createElement('div');
      courseDiv.className = 'course';
      if (course.completed) {
        courseDiv.classList.add('completed');
        courseDiv.textContent = `${course.code} (Completed)`;
      } else {
        courseDiv.textContent = course.code;
      }
      container.appendChild(courseDiv);
    });
    
    // Calculate total credits using reduce
    const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);
    
    // Update stats display
    document.getElementById('courseStats').textContent = 
      `The total number of courses listed below is ${courses.length}. Total Credits: ${totalCredits}`;
  }

  function filterCourses(filter) {
    currentFilter = filter;
    let filteredCourses;
    if (filter === 'all') {
      filteredCourses = allCourses;
    } else {
      filteredCourses = allCourses.filter(course => course.category === filter);
    }
    displayCourses(filteredCourses);
  }

  // Initialize with all courses
  window.onload = () => {
    filterCourses('all');
  };
