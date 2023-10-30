let courses = [
    { title: "CST8116: Introduction to Computer Programming", level: 1, code: "CST8116", thumbnail: "images/CST8116.jpg", description: "Possessing the fundamentals of logic, problem-solving and programming language structure provides a solid foundation for further study in the field. Students develop introductory knowledge of computer programming with emphasis on problem analysis and design, using algorithms, pseudocode, flowcharts, UML Class Diagrams and testing, with the Java programming language used as a means to implement problem solution designs. Through an introduction to the Java programming language students use sequential structures, selection structures, repetition structures, variables, constants, methods, constructors, one-dimensional arrays, object-oriented programming, classes, objects, abstraction, encapsulation, inputs, outputs, coding conventions and documentation."},
    { title: "CST8118: Computer Essentials", level: 1, code: "CST8118", thumbnail: "images/CST8118.jpg", description: "Maintaining a computer, using operating system and productivity software, and expressing related environmental and sustainability concerns, is an important part of working with Information Technology. Students explain computer hardware, and use operating system software to maintain, utilize, and secure a computer. Students practice the use of spreadsheet software to solve problems, use formulas, and visualize data with charts. Students discuss computer hardware and software with regards to financial and environmental sustainability. Theory is reinforced with application by means of practical laboratory assessments, including using virtualization software to install guest operating systems onto a host computer." },
    { title: "CST8215: Introduction to Database", level: 1, code: "CST8215", thumbnail: "images/CST8215.jpg", description: "Databases are used to store data and are a core component of many information technology systems. Students learn the fundamentals of relational databases design using Entity Relation Diagrams (ERDs), and use Structured Query Language (SQL) to create, modify and query a database. Students design and create databases that are maintainable, secure and adaptable to change in business requirements, using normalization. Students become familiar with the functions of a Database Management System (DBMS) and its components in comparison with legacy systems and alternative information storage mechanisms." },
    { title: "MAT8001C: Technical Mathematics for Computer Science", level: 1, thumbnail: "images/MAT8001C.jpg", code: "MAT8001C", description: "The study of algebraic and transcendental functions is an essential prerequisite to Calculus. Students manipulate algebraic expressions, solve algebraic equations and linear systems and learn the properties of and graph algebraic and transcendental functions. Students investigate computer number systems in addition to Boolean algebra and logic to help solve problems involving computer systems. Students also study the addition and subtraction of vectors using vector components. Delivered in a modular format, this course is equivalent to the completion of all of the following math modules MAT8100 - A, B, C, D, E, F, and L." },
    { title: "CST2355: Database Systems", level: 2, code: "CST2355", thumbnail: "images/CST2355.jpg", description: "Database systems can automate data processing tasks as well as tie into the security of information technology systems. Students acquire practical experience using market-leading object-relational database management systems like Oracle and MySQL. Students obtain hands-on experience with advanced engineering modeling tools along with SQL, SQL scripts and programming with Oracle's PL/SQL blocks. Database concepts covered include advanced SQL, case structures, rollup and cube operations, metadata manipulation, data storage and retrieval, security and transaction control and data warehousing" },
    { title: "CST8102: Operating System Fundamentals (GNU/Linux)", level: 2, code: "CST8102", thumbnail: "images/CST8102.jpg", description: "Operating systems form the backbone of information technology systems coordinating the interaction between hardware and software. Students explore the basic concepts and components of Operating Systems (OS), and how they function and interact with hardware and software components. Students examine the details of operating system structures, process management, storage management, installation, configuration, and administration both in theory and through practical assignments based on the GNU/Linux operating system. Lab work is designed to implement the theory by developing skills using the powerful GNU/Linux command-line tools and utilities." },
    { title: "CST8284: Object Oriented Programming (Java)", level: 2, code: "CST8284", thumbnail: "images/CST8284.jpg", description: "Working in the field of information technology as a programmer requires a firm understanding of Object-Oriented Programming (OOP) concepts. Students explore object-oriented programming methodology using the Java programming language. Object oriented concepts, such as encapsulation, inheritance, abstraction and polymorphism are covered and reinforced with practical applications. Students explore the basics of data structures and algorithms as well as basic Graphical User Interface (GUI) programming." },
    { title: "CST8282: Web Programming", level: 2, code: "CST8285", thumbnail: "images/CST8285.jpg", description: "The World Wide Web (WWW) has become an integrated part of everyday life. Students develop basic skills of web programming, website design and implementation. JavaScript, HTML5, and PHP are used to explore web-based solutions to problems of increasing interactivity and complexity. Lectures are reinforced by practical assignments that encourage students to construct and maintain their own websites." },
    { title: "CST2234: Systems Analysis and Design", level: 3, code: "CST2234", thumbnail: "images/CST2234.jpg", description: "Complex information technology systems require extensive planning and design. Guided by industry standard software engineering methodologies, students gain hands-on experience with case studies used to develop systems from inception through elaboration, construction and transition phases. Object-oriented design, modeling tools and techniques are used to produce system specifications. Project management principles are also used within team developed projects. Software methodologies discussed include the Systems Development Life Cycle (SDLC), agile approach, Rational Unified Process (RUP) and Rapid Application Development (RAD)." },
    { title: "CST2335: Mobile Graphical Interface Programming", level: 3, code: "CST2335", thumbnail: "images/CST2335.jpg", description: "Mobile devices play an instrumental part of everyday life, thus requiring knowledge of mobile graphical user interface development. Students explore graphical user interface programming in a mobile Android environment. Students learn how to program applications using the latest Android development tools. Topics include application architecture, interface design, network communication, and database integration." },
    { title: "CST8109: Network Programming", level: 3, code: "CST8109", thumbnail: "images/CST8109.jpg", description: "Software programming in today's environment requires detailed knowledge of the underlying network topology, its implementation and programming support functions. Gaining an appreciation and perspective of this technology is imperative to developing good network programming applications. Students explore topics including the basic structure, design and layered communications models, with an emphasis on data communications, TCP/IP protocol suite, socket programming and multi-threading concepts. Labs include practical exercises in basic networking and using socket programming, along with multi-threading, in an environment rich with common networking tools for diagnosing and troubleshooting typical network programming problems." },
    { title: "CST8288: Object Oriented Programming with Design Patterns", level: 3, code: "CST8288", thumbnail: "images/CST8288.jpg", description: "Design patterns are programming architecture solutions to common challenges faced in software implementation. Students implement best practices of object-oriented program development with software design patterns. Students also apply Unified Modeling Language (UML) program specifications in the Java programming language. SQL through JDBC technology is used embedded for developing and using data access objects. Course topics include refactoring, domain modelling, JDBC and multithreaded servlet programming. Students develop proficiency in creating, testing, debugging, deploying and documenting programs and servlets through practical application." },

  ];
  
  let state = {
    searchQuery: "",
    filterLevel: "",
    sortAsc: true,
  };
  
  function searchCourses() {
    state.searchQuery = document.getElementById('searchBar').value.toLowerCase();
    renderCourses();
  }
  
  function filterCourses(level) {
    state.filterLevel = level;
    renderCourses();
  }
  
  function sortCourses(asc) {
    state.sortAsc = asc;
    renderCourses();
  }
  
  function renderCourses() {
    let filteredCourses = courses;
  
    // Applies search filter */
    if (state.searchQuery) {
      filteredCourses = filteredCourses.filter(course =>
        course.title.toLowerCase().includes(state.searchQuery) ||
        course.description.toLowerCase().includes(state.searchQuery)
      );
    }
  
    /* Applies level filter */
    if (state.filterLevel) {
      filteredCourses = filteredCourses.filter(course => course.level === Number(state.filterLevel));
    }
  
    /* Applies sort Filter */
    let sortedCourses = [...filteredCourses];
    sortedCourses.sort((a, b) => state.sortAsc ? a.level - b.level : b.level - a.level);
  
    displayCourses(sortedCourses);
  }
  
  /* Display function */
  function displayCourses(courses) {
    let courseContainer = document.getElementById('courseContainer');
    courseContainer.innerHTML = '';
    for(let course of courses) {
        let courseElement = document.createElement('div');
        courseElement.className = 'course';
        courseElement.innerHTML = `
            <img src="${course.thumbnail}" alt="${course.title}" class="course-thumbnail">
            <h3>${course.title}</h3>
            <p>${course.description}</p>
        `;
        courseContainer.appendChild(courseElement);
    }
  }

window.onload = function() {
  renderCourses();
}