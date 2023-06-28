let express = require("express");
let app = express();
app.use(express.json());
app.use(function (req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header(
"Access-Control-Allow-Methods",
"GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD"
);
res.header(
"Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept"
);
next();
});
const port = process.env.PORT||2450;
app.listen(port, () => console.log(`Listening on port ${port}!`));

let customers = [
    {
      custId: 1,
      name: "ABC",
      password: "abc1234",
      role: "admin",
      email: "abc@gmail.com"
    },
    {
      custId: 2,
      name: "Willie",
      password: "willie1234",
      role: "student",
      email: "willie@gmail.com"
    },
    {
      custId: 3,
      name: "Jack",
      password: "jack1234",
      role: "faculty",
      email: "jack@gmail.com"
    },
    {
      custId: 4,
      name: "James",
      password: "james1234",
      role: "student",
      email: "james@gmail.com"
    },
    {
      custId: 5,
      name: "Harry",
      password: "harry1234",
      role: "faculty",
      email: "harry@gmail.com"
    },
    {
      custId: 6,
      name: "Tia",
      password: "tia1234",
      role: "student",
      email: "tia@gmail.com"
    },
    {
      custId: 7,
      name: "Aditya",
      password: "aditya123",
      role: "faculty",
      email: "aditya@gmail.com"
    },
    {
      custId: 8,
      name: "Sonu",
      password: "sonu1234",
      role: "student",
      email: "sonu@gmail.com"
    },
    {
      custId: 9,
      name: "Ellie",
      password: "ellie1234",
      role: "student",
      email: "ellie@gmail.com"
    },
    {
      custId: 10,
      name: "Gia",
      password: "gia1234",
      role: "faculty",
      email: "gia@gmail.com"
    }
  ];
let  courses = [
    {
      courseId: 1,
      name: "ANGULAR",
      code: "ANG97",
      description: "All fundamentals of Angular 7",
      faculty: ["Daniel", "Jack"],
      students: ["Sam"]
    },
    {
      courseId: 2,
      name: "JAVASCRIPT",
      code: "JS124",
      description: "Intoduction to javascript",
      faculty: ["Aditya"],
      students: ["James", "Joy", "Monu", "Rita"]
    },
    {
      courseId: 3,
      name: "REACT",
      code: "RCT56",
      description: "React Javascript library",
      faculty: ["Jack", "Gia"],
      students: ["Raima", "Rita", "Sonu", "James"]
    },
    {
      courseId: 4,
      name: "BOOTSTRAP",
      code: "BS297",
      description: "Bootstrap Designing Framework",
      faculty: [],
      students: ["James", "Tia", "Ellie"]
    },
    {
      courseId: 5,
      name: "CSS",
      code: "CS365",
      description: "Basic stylesheet language",
      faculty: [],
      students: ["James", "Rita", "Monica"]
    },
    {
      courseId: 6,
      name: "REST AND MICROSERVICES",
      code: "RM392",
      description: "Introduction to Microservices",
      faculty: [],
      students: ["Sam"]
    },
    {
      courseId: 7,
      name: "NODE",
      code: "ND725",
      description: "Introduction to Node",
      faculty: ["Sonia"],
      students: ["Saransh", "Shrey", "Monica"]
    }
  ];
let  faculties = [
    { id: 5, name: "Daniel", courses: ["ANGULAR"] },
    { id: 4, name: "Sonia", courses: ["NODE"] },
    { id: 3, name: "Jack", courses: ["REACT", "ANGULAR"] },
    { id: 2, name: "Gia", courses: ["REACT"] },
    { id: 1, name: "Aditya", courses: ["ANGULAR"] }
  ];
let  classes = [
    {
      classId: 1,
      course: "REACT",
      time: "07:45",
      endTime: "08:45",
      topic: "Redux",
      facultyName: "Jack"
    },
    {
      classId: 2,
      course: "ANGULAR",
      time: "15:45",
      endTime: "17:40",
      topic: "Component",
      facultyName: "Jack"
    },
    {
      classId: 3,
      course: "JAVASCRIPT",
      time: "15:45",
      endTime: "17:40",
      topic: "Component",
      facultyName: "Aditya"
    }
  ];
let  Students = [
    {
      id: 16,
      name: "Willie",
      dob: "31-July-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["ANGULAR", "NODE"]
    },
    {
      id: 15,
      name: "Tia",
      dob: "30-July-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: []
    },
    {
      id: 14,
      name: "Apoorv",
      dob: "31-August-1998",
      gender: "male",
      about: "Want to learn new technologies",
      courses: []
    },
    {
      id: 13,
      name: "Joy",
      dob: "31-July-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["JAVASCRIPT"]
    },
    {
      id: 12,
      name: "Rachel",
      dob: "31-August-1998",
      gender: "female",
      about: "Pursuing Graduation",
      courses: []
    },
    {
      id: 11,
      name: "Monica",
      dob: "30-July-1997",
      gender: "female",
      about: "Want to learn new technologies",
      courses: ["CSS", "NODE"]
    },
    {
      id: 10,
      name: "Monu",
      dob: "12-May-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["JAVASCRIPT"]
    },
    {
      id: 9,
      name: "Sonu",
      dob: "12-May-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["REACT"]
    },
    {
      id: 8,
      name: "Raima",
      dob: "30-July-1997",
      gender: "female",
      about: "Want to learn new technologies",
      courses: ["REACT"]
    },
    {
      id: 7,
      name: "Rita",
      dob: "31-August-1998",
      gender: "female",
      about: "Pursuing Graduation",
      courses: ["JAVASCRIPT", "REACT", "CSS"]
    },
    {
      id: 6,
      name: "Shrey",
      dob: "12-May-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["NODE"]
    },
    {
      id: 5,
      name: "Saransh",
      dob: "31-July-1997",
      gender: "male",
      about: "Want to learn new technologies",
      courses: ["NODE"]
    },
    {
      id: 4,
      name: "Sanya",
      dob: "31-July-1997",
      gender: "male",
      about: "Want to learn new technologies",
      courses: []
    },
    {
      id: 3,
      name: "James",
      dob: "12-July-1994",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["JAVASCRIPT", "BOOTSTRAP", "CSS", "REACT"]
    },
    {
      id: 2,
      name: "Sam",
      dob: "12-July-1994",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["ANGULAR", "REST AND MICROSERVICES"]
    },
    {
      id: 1,
      name: "Ellie",
      dob: "12-June-1992",
      gender: "female",
      about: "Want to learn new technologies",
      courses: ["BOOTSTRAP"]
    }
  ];

  app.post("/login", function(req, res) {
    var email = req.body.email;
    var password = req.body.password;
  
    var cust = customers.find(function(item) {
      return item.email === email && item.password === password;
    });
    if (cust) {
        var custRec = {
          name: cust.name,
          email: cust.email,
          role: cust.role
        };
        res.send(custRec);
      } else {
        res.status(500).send("Customer Not Found");
      }
  });

app.post('/register', (req, res) => {
    const { name, email, password, role } = req.body;
    let id=customers.reduce((acc,curr)=>curr.custId>acc ? curr.custId : acc,0);
    let studid=Students.reduce((acc,curr)=>curr.id>acc ? curr.id : acc,0);
    let factid=faculties.reduce((acc,curr)=>curr.id>acc ? curr.id : acc,0);
    const customer = {
        custId:id+1,
      name:name,
      email:email,
      password:password,
      role
    };
    if(role=="student"){
    let newStudent={id:studid+1,name:name,courses:[]};
    Students.unshift(newStudent);
    }
    else{
      let newFaculty={id:factid+1,name:name,courses:[]};
    faculties.unshift(newFaculty);
    }
    customers.push(customer);
    let cust={name,role,email};
    res.send(cust);
  });

  app.get('/getStudentNames', (req, res) => {
    const studentNames = Students.map((student) => student.name);
    res.send(studentNames);
  });
  app.get('/getFacultyNames', (req, res) => {
    const FacultyNames = faculties.map((f) => f.name);
    res.send(FacultyNames);
  });
  app.get('/getCourses', (req, res) => {
    res.send(courses);
  });
  app.get('/getCourse/:id', (req, res) => {
    let id=req.params.id;
    const course=courses.find(f=>f.courseId==+id);
    res.send(course);
  });
  app.put('/putCourse', (req, res) => {
    const { courseId, name, code, description, students=[],faculty=[] } = req.body;
    const course = courses.find((course) => course.courseId === +courseId);
    students.forEach((studentName) => {
      const student = Students.find((s) => s.name === studentName);
      if (student) {
        student.courses.push(name);
      }
    });
    faculty.forEach((facultyName)=>{
      const faculty = faculties.find((s) => s.name === facultyName);
      if (faculty) {
        faculty.courses.push(name);
      }
    });
    if (course) {
      course.name = name;
      course.code = code;
      course.description = description;
      course.faculty=faculty;
      course.students = students;
      res.send(course);
    } else {
      res.status(404).send("Course not found");
    }
  });
  app.get("/getCourse",(req,res)=>{
    const coursesArray = courses.map(course => course.name);
    res.send(coursesArray);
  });

  app.get('/getStudents', (req, res) => {
    const { page='1', course } = req.query;
    let filteredStudents = Students;
    const itemsPerPage = 3;
    if (course) {
      const selectedCourses = course.split(',');
      filteredStudents = Students.filter((student) =>
        student.courses.some((course) => selectedCourses.includes(course))
      );
    }
    const totalNum = filteredStudents.length;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
  
    const studentsForPage = filteredStudents.slice(startIndex, endIndex);
    const totalItems = studentsForPage.length;
    const response = {
      page: parseInt(page),
      items: studentsForPage,
      totalItems,
      totalNum
    };
    res.send(response);
  });

  app.get('/getFaculties', (req, res) => {
    const { page='1', course } = req.query;
  
    const itemsPerPage = 3;
    let filteredFaculties = faculties;
    if (course) {
      const selectedCourses = course.split(',');
      filteredFaculties = faculties.filter((faculty) =>
        faculty.courses.some((course) => selectedCourses.includes(course))
      );
    }
    const totalNum =filteredFaculties.length ;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
  
    const facultiesForPage = filteredFaculties.slice(startIndex, endIndex);
    const totalItems = facultiesForPage.length;
    const response = {
      page: parseInt(page),
      items: facultiesForPage,
      totalItems,
      totalNum
    };
    res.send(response);
  });

  app.post('/postStudentDetails', (req, res) => {
    const { name, dob, gender, about } = req.body;
    let student=Students.find(f=>f.name==name);
    if(student){
      student.dob=dob;
      student.gender=gender;
      student.about=about;
    }
    res.send(student);
  });
  app.get('/getStudentDetails/:name', (req, res) => {
    const name = req.params.name;
    const student = Students.find((student) => student.name === name);
  
    if (student) {
      res.send(student);
    } else {
      res.status(500).send('Student details not found');
    }
  });
  app.get('/getStudentCourse/:name', (req, res) => {
    const name = req.params.name;
    const student = Students.find((student) => student.name === name);
  
    if (student) {
      const studentCourses = courses.filter((course) =>
        student.courses.includes(course.name)
      );
      res.send(studentCourses);
    } else {
      res.status(500).send('Student not found');
    }
  });
  app.get('/getStudentClass/:name', (req, res) => {
    const name = req.params.name;
    const student = Students.find((student) => student.name === name);
  
    if (student) {
      const studentClasses = classes.filter((classItem) =>
        student.courses.includes(classItem.course)
      );
      res.send(studentClasses);
    } else {
      res.status(500).send('Student not found');
    }
  });
  
  app.get('/getFacultyCourse/:name', (req, res) => {
    const name = req.params.name;
    const faculty = faculties.find((faculty) => faculty.name === name);
  
    if (faculty) {
      const facultyCourses = courses.filter((course) =>
        faculty.courses.includes(course.name)
      );
      res.send(facultyCourses);
    } else {
      res.status(500).send('Faculty not found');
    }
  });

  app.get('/getFacultyClass/:name', (req, res) => {
    const name = req.params.name;
    const faculty = faculties.find((faculty) => faculty.name === name);
  
    if (faculty) {
      const facultyClasses = classes.filter((classItem) =>
        faculty.courses.includes(classItem.course)
      );
      res.send(facultyClasses);
    } else {
      res.status(500).send('Faculty not found');
    }
  });

  app.post('/postClass',(req,res)=>{
    const { course,time,endTime,topic,facultyName } = req.body;
    const id = classes.length + 1;
  
    const newClass = {
      classId:id,
      course,
      time,
      endTime,
      topic,
      facultyName
    };
    classes.push(newClass);
    res.send(newClass);
  });

  app.put('/postClass/:id',(req,res)=>{
    let id=req.params.id;
    const { course,time,endTime,topic,facultyName } = req.body;
    const Class=classes.find(f=>f.classId=== +id);
     
  if(Class){
    Class.course=course;
    Class.time=time;
    Class.endTime=endTime;
    Class.topic=topic;
    Class.facultyName=facultyName;
    res.send(Class);
  }
  else
     res.status(500).send("Internal Error");
  });

  app.get('/getClass/:id',(req,res)=>{
    let id=req.params.id;
    let Class=classes.find(f=>f.classId===+id);
    if(Class){
      res.send(Class);
    }
    else res.status(500).send('Class not Found');
  });