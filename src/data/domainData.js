export const domainData = {
  "cyber-security": {
    name: "Cyber Security",
    icon: "🔒",
    domain_intro: "Cyber Security is the practice of protecting systems, networks, and data from digital attacks. As cyber threats grow, companies desperately need skilled professionals to defend their digital assets. It's a high-stakes field where you'll be the guardian of the digital world, with excellent pay and job security.",
    description: "Protect systems, networks, and data from digital attacks",
    roadmap: [
      { phase: "Foundation", topics: ["Networking Basics", "Operating Systems (Linux/Windows)", "Programming (Python)"], duration: "2-3 months" },
      { phase: "Core Skills", topics: ["Network Security", "Cryptography", "Web Application Security", "Ethical Hacking"], duration: "4-6 months" },
      { phase: "Advanced", topics: ["Penetration Testing", "Incident Response", "Malware Analysis", "Cloud Security"], duration: "6-12 months" },
      { phase: "Specialization", topics: ["Red Team/Blue Team", "Threat Intelligence", "Security Architecture"], duration: "Ongoing" }
    ],
    courses: {
      free: [
        { title: "Cybrary - Free Cyber Security Courses", url: "https://www.cybrary.it/", provider: "Cybrary" },
        { title: "TryHackMe - Learn Cyber Security", url: "https://tryhackme.com/", provider: "TryHackMe" },
        { title: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/", provider: "OWASP" },
        { title: "Google Cybersecurity Certificate", url: "https://www.coursera.org/google-certificates/cybersecurity-certificate", provider: "Google" }
      ],
      paid: [
        { title: "Complete Ethical Hacking Bootcamp", price: "$89.99", platform: "Udemy", rating: "4.6", url: "https://www.udemy.com/course/complete-ethical-hacking-bootcamp-zero-to-mastery/" },
        { title: "Offensive Security Certified Professional (OSCP)", price: "$999", platform: "Offensive Security", rating: "5.0", url: "https://www.offensive-security.com/pwk-oscp/" },
        { title: "CompTIA Security+", price: "$349", platform: "CompTIA", rating: "4.7", url: "https://www.comptia.org/certifications/security" },
        { title: "Certified Information Systems Security Professional (CISSP)", price: "$699", platform: "(ISC)²", rating: "4.8", url: "https://www.isc2.org/Certifications/CISSP" }
      ]
    },
    videos: [
      { title: "Complete Cyber Security Course", channel: "NetworkChuck", views: "2.5M", url: "https://www.youtube.com/watch?v=U_P23SqJaDc" },
      { title: "Ethical Hacking Full Course", channel: "freeCodeCamp", views: "5.8M", url: "https://www.youtube.com/watch?v=3Kq1MIfTWCE" },
      { title: "How to Become a Hacker in 2024", channel: "The Cyber Mentor", views: "890K", url: "https://www.youtube.com/watch?v=iRQT73mlPUA" },
      { title: "CEH v12 Full Course", channel: "Simplilearn", views: "1.2M", url: "https://www.youtube.com/watch?v=maO8_0cA7W8" }
    ],
    tools: [
      { name: "Kali Linux", description: "Penetration testing OS", type: "OS", url: "https://www.kali.org/" },
      { name: "Metasploit", description: "Exploitation framework", type: "Framework", url: "https://www.metasploit.com/" },
      { name: "Wireshark", description: "Network protocol analyzer", type: "Tool", url: "https://www.wireshark.org/" },
      { name: "Burp Suite", description: "Web vulnerability scanner", type: "Tool", url: "https://portswigger.net/burp" },
      { name: "Nmap", description: "Network scanner", type: "Tool", url: "https://nmap.org/" },
//      { name: "Hacking Tools and resourses", description: "104 Hacking Tools and Resources", type: "Webpage", url: "https://www.hackerone.com/blog/104-hacking-tools-and-resources"}
    ],
    resources: [
      { title: "HackTheBox", url: "https://www.hackthebox.com/", type: "Practice Platform" },
      { title: "VulnHub", url: "https://www.vulnhub.com/", type: "Vulnerable VMs" },
      { title: "Krebs on Security Blog", url: "https://krebsonsecurity.com/", type: "Blog" },
      { title: "r/netsec Reddit", url: "https://www.reddit.com/r/netsec/", type: "Community" },
      { title: "Hacking Tools and resourses", url: "https://www.hackerone.com/blog/104-hacking-tools-and-resources", type: "Blog"}

    ]
  },
  "web-development": {
    name: "Web Development",
    icon: "🌐",
    domain_intro: "Web Development is the art of building websites and web applications that power the internet. From social media platforms to e-commerce sites, web developers create the digital experiences we use daily. It's one of the most accessible tech careers with abundant remote opportunities and creative freedom.",
    description: "Build modern, responsive websites and web applications",
    roadmap: [
      { phase: "Frontend Basics", topics: ["HTML5", "CSS3", "JavaScript ES6+", "Responsive Design"], duration: "2-3 months" },
      { phase: "Frontend Frameworks", topics: ["React.js", "Vue.js or Angular", "Tailwind CSS", "TypeScript"], duration: "3-4 months" },
      { phase: "Backend Development", topics: ["Node.js", "Express/Fastify", "REST APIs", "Database (MongoDB/PostgreSQL)"], duration: "3-4 months" },
      { phase: "Full Stack", topics: ["Authentication", "Deployment", "Testing", "DevOps Basics"], duration: "4-6 months" }
    ],
    courses: {
      free: [
        { title: "freeCodeCamp - Responsive Web Design", url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/", provider: "freeCodeCamp" },
        { title: "The Odin Project", url: "https://www.theodinproject.com/", provider: "The Odin Project" },
        { title: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Learn", provider: "Mozilla" },
        { title: "JavaScript30", url: "https://javascript30.com/", provider: "Wes Bos" }
      ],
      paid: [
        { title: "The Complete Web Developer Course 2024", price: "$84.99", platform: "Udemy", rating: "4.5", url: "https://www.udemy.com/course/the-complete-web-developer-course-2/" },
        { title: "Full Stack Open", price: "Free", platform: "University of Helsinki", rating: "4.9", url: "https://fullstackopen.com/en/" },
        { title: "React - The Complete Guide", price: "$89.99", platform: "Udemy", rating: "4.7", url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/" },
        { title: "Node.js Bootcamp", price: "$99.99", platform: "Udemy", rating: "4.8", url: "https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/" }
      ]
    },
    videos: [
      { title: "Web Development Full Course - 10 Hours", channel: "freeCodeCamp", views: "8.2M", url: "https://www.youtube.com/watch?v=nu_pCVPKzTk" },
      { title: "React JS Full Course 2024", channel: "Programming with Mosh", views: "3.5M", url: "https://www.youtube.com/watch?v=SqcY0GlETPk" },
      { title: "HTML & CSS Full Course", channel: "SuperSimpleDev", views: "4.1M", url: "https://www.youtube.com/watch?v=G3e-cpL7ofc" },
      { title: "Node.js and Express.js Full Course", channel: "freeCodeCamp", views: "2.8M", url: "https://www.youtube.com/watch?v=Oe421EPjeBE" }
    ],
    tools: [
      { name: "VS Code", description: "Code editor", type: "IDE", url: "https://code.visualstudio.com/" },
      { name: "Git & GitHub", description: "Version control", type: "Tool", url: "https://github.com/" },
      { name: "Chrome DevTools", description: "Browser debugging", type: "Tool", url: "https://developer.chrome.com/docs/devtools/" },
      { name: "Postman", description: "API testing", type: "Tool", url: "https://www.postman.com/" },
      { name: "Figma", description: "Design collaboration", type: "Design", url: "https://www.figma.com/" }
    ],
    resources: [
      { title: "CSS-Tricks", url: "https://css-tricks.com/", type: "Blog" },
      { title: "Smashing Magazine", url: "https://www.smashingmagazine.com/", type: "Magazine" },
      { title: "Dev.to Community", url: "https://dev.to/", type: "Community" },
      { title: "Stack Overflow", url: "https://stackoverflow.com/", type: "Q&A" }
    ]
  },
  "software-engineering": {
    name: "Software Engineering",
    icon: "💻",
    domain_intro: "Software Engineering is the systematic approach to designing, developing, and maintaining software systems. Software engineers solve complex problems and build the applications that run our world—from banking apps to space rockets. It's a versatile career with opportunities in every industry and strong earning potential.",
    description: "Design, develop, and maintain software systems",
    roadmap: [
      { phase: "Programming Fundamentals", topics: ["Choose a language (Python/Java/C++)", "Data Structures", "Algorithms", "OOP Concepts"], duration: "3-4 months" },
      { phase: "Software Design", topics: ["Design Patterns", "SOLID Principles", "System Design Basics", "Testing"], duration: "3-4 months" },
      { phase: "Development Practices", topics: ["Git/Version Control", "Agile/Scrum", "CI/CD", "Code Review"], duration: "2-3 months" },
      { phase: "Specialization", topics: ["Backend/Frontend/Mobile", "Cloud Computing", "Microservices", "Performance Optimization"], duration: "6-12 months" }
    ],
    courses: {
      free: [
        { title: "CS50 - Harvard's Computer Science", url: "https://cs50.harvard.edu/x/", provider: "Harvard" },
        { title: "Algorithms by Princeton", url: "https://www.coursera.org/learn/algorithms-part1", provider: "Coursera" },
        { title: "MIT OpenCourseWare", url: "https://ocw.mit.edu/", provider: "MIT" },
        { title: "Google's Tech Dev Guide", url: "https://techdevguide.withgoogle.com/", provider: "Google" }
      ],
      paid: [
        { title: "Master the Coding Interview", price: "$129.99", platform: "Udemy", rating: "4.7", url: "https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/" },
        { title: "Design Patterns in Python", price: "$94.99", platform: "Udemy", rating: "4.6", url: "https://www.udemy.com/course/design-patterns-python/" },
        { title: "System Design Interview Course", price: "$149", platform: "Educative.io", rating: "4.8", url: "https://www.educative.io/courses/grokking-the-system-design-interview" },
        { title: "Clean Code", price: "$44.99", platform: "Udemy", rating: "4.5", url: "https://www.udemy.com/course/writing-clean-code/" }
      ]
    },
    videos: [
      { title: "Data Structures & Algorithms", channel: "freeCodeCamp", views: "6.5M", url: "https://www.youtube.com/watch?v=8hly31xKli0" },
      { title: "System Design Interview Guide", channel: "ByteByteGo", views: "2.1M", url: "https://www.youtube.com/watch?v=i53Gi_K3o7I" },
      { title: "Software Engineering Best Practices", channel: "Fireship", views: "890K", url: "https://www.youtube.com/watch?v=73I5dRucCds" },
      { title: "Clean Code - Uncle Bob", channel: "DevTernity", views: "1.5M", url: "https://www.youtube.com/watch?v=7EmboKQH8lM" }
    ],
    tools: [
      { name: "IntelliJ IDEA", description: "Java IDE", type: "IDE", url: "https://www.jetbrains.com/idea/" },
      { name: "Docker", description: "Containerization", type: "DevOps", url: "https://www.docker.com/" },
      { name: "Jenkins", description: "CI/CD automation", type: "DevOps", url: "https://www.jenkins.io/" },
      { name: "JUnit/PyTest", description: "Testing frameworks", type: "Testing", url: "https://junit.org/" },
      { name: "Jira", description: "Project management", type: "Tool", url: "https://www.atlassian.com/software/jira" }
    ],
    resources: [
      { title: "LeetCode", url: "https://leetcode.com/", type: "Practice" },
      { title: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/", type: "Learning" },
      { title: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer", type: "GitHub" },
      { title: "Clean Code Book", url: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882", type: "Book" }
    ]
  },
  "ui-ux-design": {
    name: "UI/UX Design",
    icon: "🎨",
    domain_intro: "UI/UX Design is the art and science of creating beautiful, user-friendly digital experiences. UI designers craft visual interfaces while UX designers ensure products are intuitive and delightful to use. It's a creative career that combines psychology, design, and technology—perfect for those who want to shape how people interact with technology.",
    description: "Create beautiful, user-friendly digital experiences",
    roadmap: [
      { phase: "Design Fundamentals", topics: ["Color Theory", "Typography", "Layout & Composition", "Visual Hierarchy"], duration: "2-3 months" },
      { phase: "UX Principles", topics: ["User Research", "Wireframing", "Prototyping", "Usability Testing"], duration: "3-4 months" },
      { phase: "Design Tools", topics: ["Figma/Adobe XD", "Design Systems", "Responsive Design", "Accessibility"], duration: "2-3 months" },
      { phase: "Specialization", topics: ["Mobile UI", "Web UI", "Motion Design", "Design Strategy"], duration: "4-6 months" }
    ],
    courses: {
      free: [
        { title: "Google UX Design Certificate", url: "https://www.coursera.org/google-certificates/ux-design-certificate", provider: "Google" },
        { title: "Figma Tutorial for Beginners", url: "https://www.youtube.com/watch?v=FTFaQWZBqQ8", provider: "YouTube" },
        { title: "Laws of UX", url: "https://lawsofux.com/", provider: "Laws of UX" },
        { title: "UX Design Course", url: "https://www.interaction-design.org/", provider: "IDF" }
      ],
      paid: [
        { title: "UI/UX Design Bootcamp", price: "$94.99", platform: "Udemy", rating: "4.7", url: "https://www.udemy.com/course/ui-ux-web-design-using-adobe-xd/" },
        { title: "Figma Masterclass", price: "$89.99", platform: "Udemy", rating: "4.8", url: "https://www.udemy.com/course/figma-ux-ui-design-user-experience-tutorial-course/" },
        { title: "Complete Web Design Course", price: "$99.99", platform: "Udemy", rating: "4.6", url: "https://www.udemy.com/course/web-design-secrets/" },
        { title: "UX Research & Testing", price: "$79.99", platform: "Udemy", rating: "4.5", url: "https://www.udemy.com/course/ux-research-practical-guide/" }
      ]
    },
    videos: [
      { title: "UI/UX Design Full Course", channel: "DesignCourse", views: "2.3M", url: "https://www.youtube.com/watch?v=c9Wg6Cb_YlU" },
      { title: "Figma in 40 Minutes", channel: "Flux Academy", views: "1.8M", url: "https://www.youtube.com/watch?v=FTFaQWZBqQ8" },
      { title: "UX Design Process", channel: "Charli Marie", views: "560K", url: "https://www.youtube.com/watch?v=RlQEoJaLQRA" },
      { title: "Design Systems 101", channel: "Design Systems", views: "420K", url: "https://www.youtube.com/watch?v=wc5krC28ynQ" }
    ],
    tools: [
      { name: "Figma", description: "Design & prototyping", type: "Design", url: "https://www.figma.com/" },
      { name: "Adobe XD", description: "UI/UX design", type: "Design", url: "https://www.adobe.com/products/xd.html" },
      { name: "Sketch", description: "Mac design tool", type: "Design", url: "https://www.sketch.com/" },
      { name: "Miro", description: "Collaborative whiteboard", type: "Tool", url: "https://miro.com/" },
      { name: "InVision", description: "Prototyping", type: "Prototype", url: "https://www.invisionapp.com/" }
    ],
    resources: [
      { title: "Dribbble", url: "https://dribbble.com/", type: "Inspiration" },
      { title: "Behance", url: "https://www.behance.net/", type: "Portfolio" },
      { title: "Nielsen Norman Group", url: "https://www.nngroup.com/", type: "Research" },
      { title: "UX Collective", url: "https://uxdesign.cc/", type: "Blog" }
    ]
  },
  "data-science": {
    name: "Data Science",
    icon: "📊",
    domain_intro: "Data Science is the field of extracting insights and knowledge from data using statistics, machine learning, and programming. Data scientists help companies make data-driven decisions, predict trends, and uncover hidden patterns. It's one of the hottest careers of the 21st century with strong demand across all industries.",
    description: "Extract insights from data using statistics and ML",
    roadmap: [
      { phase: "Foundation", topics: ["Python Programming", "Mathematics (Statistics, Linear Algebra)", "SQL", "Excel"], duration: "2-3 months" },
      { phase: "Data Analysis", topics: ["Pandas, NumPy", "Data Visualization (Matplotlib, Seaborn)", "EDA", "Feature Engineering"], duration: "3-4 months" },
      { phase: "Machine Learning", topics: ["Supervised Learning", "Unsupervised Learning", "Scikit-learn", "Model Evaluation"], duration: "4-5 months" },
      { phase: "Advanced", topics: ["Deep Learning", "NLP", "Big Data (Spark)", "MLOps"], duration: "6-12 months" }
    ],
    courses: {
      free: [
        { title: "Google Data Analytics Certificate", url: "https://www.coursera.org/google-certificates/data-analytics-certificate", provider: "Google" },
        { title: "IBM Data Science Professional", url: "https://www.coursera.org/professional-certificates/ibm-data-science", provider: "Coursera" },
        { title: "Kaggle Learn", url: "https://www.kaggle.com/learn", provider: "Kaggle" },
        { title: "Fast.ai Courses", url: "https://www.fast.ai/", provider: "Fast.ai" }
      ],
      paid: [
        { title: "Data Science A-Z", price: "$94.99", platform: "Udemy", rating: "4.6", url: "https://www.udemy.com/course/datascience/" },
        { title: "Machine Learning Specialization", price: "$49/month", platform: "Coursera", rating: "4.9", url: "https://www.coursera.org/specializations/machine-learning-introduction" },
        { title: "Complete Data Science Bootcamp", price: "$89.99", platform: "Udemy", rating: "4.5", url: "https://www.udemy.com/course/the-data-science-course-complete-data-science-bootcamp/" },
        { title: "Applied Data Science with Python", price: "$49/month", platform: "Coursera", rating: "4.7", url: "https://www.coursera.org/specializations/data-science-python" }
      ]
    },
    videos: [
      { title: "Data Science Full Course", channel: "freeCodeCamp", views: "4.5M", url: "https://www.youtube.com/watch?v=ua-CiDNNj30" },
      { title: "Python for Data Science", channel: "Programming with Mosh", views: "3.2M", url: "https://www.youtube.com/watch?v=_uQrJ0TkZlc" },
      { title: "Machine Learning Course", channel: "Stanford Online", views: "2.8M", url: "https://www.youtube.com/watch?v=jGwO_UgTS7I" },
      { title: "Data Analysis with Pandas", channel: "Corey Schafer", views: "1.5M", url: "https://www.youtube.com/watch?v=ZyhVh-qRZPA" }
    ],
    tools: [
      { name: "Jupyter Notebook", description: "Interactive coding", type: "IDE", url: "https://jupyter.org/" },
      { name: "Python", description: "Programming language", type: "Language", url: "https://www.python.org/" },
      { name: "R Studio", description: "Statistical computing", type: "IDE", url: "https://posit.co/products/open-source/rstudio/" },
      { name: "Tableau", description: "Data visualization", type: "BI Tool", url: "https://www.tableau.com/" },
      { name: "Apache Spark", description: "Big data processing", type: "Framework", url: "https://spark.apache.org/" }
    ],
    resources: [
      { title: "Kaggle Competitions", url: "https://www.kaggle.com/competitions", type: "Practice" },
      { title: "Towards Data Science", url: "https://towardsdatascience.com/", type: "Blog" },
      { title: "Analytics Vidhya", url: "https://www.analyticsvidhya.com/", type: "Community" },
      { title: "r/datascience", url: "https://www.reddit.com/r/datascience/", type: "Community" }
    ]
  },
  "mobile-development": {
    name: "Mobile Development",
    icon: "📱",
    domain_intro: "Mobile Development is the creation of applications for smartphones and tablets. With billions of mobile users worldwide, mobile developers build the apps we use for everything—from banking to gaming to social media. It's a dynamic field with high demand for both native (iOS/Android) and cross-platform developers.",
    description: "Build native and cross-platform mobile applications",
    roadmap: [
      { phase: "Fundamentals", topics: ["Programming Basics (Java/Kotlin/Swift)", "Mobile UI/UX", "App Lifecycle", "APIs"], duration: "2-3 months" },
      { phase: "Platform Specific", topics: ["Android (Kotlin)", "iOS (Swift)", "Platform APIs", "Local Storage"], duration: "3-4 months" },
      { phase: "Cross-Platform", topics: ["React Native or Flutter", "State Management", "Navigation", "Testing"], duration: "3-4 months" },
      { phase: "Advanced", topics: ["App Deployment", "Performance Optimization", "Push Notifications", "App Store Optimization"], duration: "4-6 months" }
    ],
    courses: {
      free: [
        { title: "Android Basics by Google", url: "https://developer.android.com/courses", provider: "Google" },
        { title: "iOS Development with SwiftUI", url: "https://developer.apple.com/tutorials/swiftui", provider: "Apple" },
        { title: "React Native Tutorial", url: "https://reactnative.dev/docs/tutorial", provider: "Meta" },
        { title: "Flutter Documentation", url: "https://docs.flutter.dev/", provider: "Google" }
      ],
      paid: [
        { title: "Complete Android Development", price: "$94.99", platform: "Udemy", rating: "4.6", url: "https://www.udemy.com/course/the-complete-android-oreo-developer-course/" },
        { title: "iOS & Swift Bootcamp", price: "$89.99", platform: "Udemy", rating: "4.7", url: "https://www.udemy.com/course/ios-13-app-development-bootcamp/" },
        { title: "React Native Complete Guide", price: "$99.99", platform: "Udemy", rating: "4.5", url: "https://www.udemy.com/course/react-native-the-practical-guide/" },
        { title: "Flutter & Dart Complete Course", price: "$94.99", platform: "Udemy", rating: "4.8", url: "https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/" }
      ]
    },
    videos: [
      { title: "Android Development Full Course", channel: "freeCodeCamp", views: "2.8M", url: "https://www.youtube.com/watch?v=fis26HvvDII" },
      { title: "iOS Development Course", channel: "CodeWithChris", views: "1.5M", url: "https://www.youtube.com/watch?v=09TeUXjzpKs" },
      { title: "React Native Full Course 2024", channel: "Programming with Mosh", views: "2.1M", url: "https://www.youtube.com/watch?v=0-S5a0eXPoc" },
      { title: "Flutter Tutorial for Beginners", channel: "The Net Ninja", views: "3.2M", url: "https://www.youtube.com/watch?v=1ukSR1GRtMU" }
    ],
    tools: [
      { name: "Android Studio", description: "Android IDE", type: "IDE", url: "https://developer.android.com/studio" },
      { name: "Xcode", description: "iOS development", type: "IDE", url: "https://developer.apple.com/xcode/" },
      { name: "VS Code", description: "Cross-platform coding", type: "IDE", url: "https://code.visualstudio.com/" },
      { name: "Firebase", description: "Backend services", type: "BaaS", url: "https://firebase.google.com/" },
      { name: "Postman", description: "API testing", type: "Tool", url: "https://www.postman.com/" }
    ],
    resources: [
      { title: "Android Developers", url: "https://developer.android.com/", type: "Official Docs" },
      { title: "Apple Developer", url: "https://developer.apple.com/", type: "Official Docs" },
      { title: "r/androiddev", url: "https://www.reddit.com/r/androiddev/", type: "Community" },
      { title: "Ray Wenderlich", url: "https://www.kodeco.com/", type: "Tutorials" }
    ]
  },
  "devops": {
    name: "DevOps Engineering",
    icon: "⚙️",
    domain_intro: "DevOps Engineering bridges the gap between development and operations, automating and optimizing software delivery. DevOps engineers ensure code moves smoothly from development to production, making systems faster, more reliable, and scalable. It's a high-paying career path that combines coding, automation, and infrastructure management.",
    description: "Automate and optimize software delivery processes",
    roadmap: [
      { phase: "Foundation", topics: ["Linux/Unix", "Networking Basics", "Scripting (Python/Bash)", "Git"], duration: "2-3 months" },
      { phase: "Infrastructure", topics: ["Cloud Platforms (AWS/Azure/GCP)", "Docker", "Kubernetes", "Infrastructure as Code (Terraform)"], duration: "3-4 months" },
      { phase: "CI/CD", topics: ["Jenkins/GitLab CI", "Build Automation", "Testing Automation", "Deployment Strategies"], duration: "3-4 months" },
      { phase: "Advanced", topics: ["Monitoring (Prometheus, Grafana)", "Log Management", "Security", "Cost Optimization"], duration: "4-6 months" }
    ],
    courses: {
      free: [
        { title: "AWS Free Tier", url: "https://aws.amazon.com/free/", provider: "AWS" },
        { title: "Docker for Beginners", url: "https://docker-curriculum.com/", provider: "Docker" },
        { title: "Kubernetes Documentation", url: "https://kubernetes.io/docs/tutorials/", provider: "Kubernetes" },
        { title: "Linux Foundation Free Courses", url: "https://training.linuxfoundation.org/resources/", provider: "Linux Foundation" }
      ],
      paid: [
        { title: "AWS Certified Solutions Architect", price: "$150", platform: "AWS", rating: "4.7", url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/" },
        { title: "Docker and Kubernetes", price: "$94.99", platform: "Udemy", rating: "4.7", url: "https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/" },
        { title: "DevOps Bootcamp", price: "$89.99", platform: "Udemy", rating: "4.6", url: "https://www.udemy.com/course/devops-bootcamp/" },
        { title: "Terraform Associate", price: "$70.50", platform: "HashiCorp", rating: "4.8", url: "https://www.hashicorp.com/certification/terraform-associate" }
      ]
    },
    videos: [
      { title: "DevOps Engineering Full Course", channel: "freeCodeCamp", views: "3.5M", url: "https://www.youtube.com/watch?v=j5Zsa_eOXeY" },
      { title: "Docker Tutorial for Beginners", channel: "TechWorld with Nana", views: "4.2M", url: "https://www.youtube.com/watch?v=3c-iBn73dDE" },
      { title: "Kubernetes Course", channel: "freeCodeCamp", views: "2.8M", url: "https://www.youtube.com/watch?v=X48VuDVv0do" },
      { title: "Linux Commands for Beginners", channel: "Engineering digest", views: "107", url: "https://www.youtube.com/watch?v=bUXuZbU6tYw&list=PLA3GkZPtsafbK3YyxdRzF5yh1TuwGn_Lu"},
      { title: "AWS Certified Solutions Architect", channel: "freeCodeCamp", views: "1.9M", url: "https://www.youtube.com/watch?v=Ia-UEYYR44s" }
    ],
    tools: [
      { name: "Docker", description: "Containerization", type: "Container", url: "https://www.docker.com/" },
      { name: "Kubernetes", description: "Container orchestration", type: "Orchestration", url: "https://kubernetes.io/" },
      { name: "Terraform", description: "Infrastructure as Code", type: "IaC", url: "https://www.terraform.io/" },
      { name: "Jenkins", description: "CI/CD automation", type: "CI/CD", url: "https://www.jenkins.io/" },
      { name: "Ansible", description: "Configuration management", type: "Automation", url: "https://www.ansible.com/" }
    ],
    resources: [
      { title: "DevOps Roadmap", url: "https://roadmap.sh/devops", type: "Roadmap" },
      { title: "AWS Well-Architected", url: "https://aws.amazon.com/architecture/well-architected/", type: "Best Practices" },
      { title: "r/devops", url: "https://www.reddit.com/r/devops/", type: "Community" },
      { title: "DevOps Weekly", url: "https://www.devopsweekly.com/", type: "Newsletter" }
    ]
  },
  "ai-ml": {
    name: "AI & Machine Learning",
    icon: "🤖",
    domain_intro: "AI & Machine Learning is the frontier of technology where computers learn to think and make decisions. From chatbots to self-driving cars, AI engineers build intelligent systems that transform industries. It's one of the most exciting and well-paid fields, requiring strong math skills but offering limitless innovation potential.",
    description: "Build intelligent systems with artificial intelligence",
    roadmap: [
      { phase: "Prerequisites", topics: ["Python Programming", "Mathematics (Calculus, Linear Algebra)", "Statistics & Probability", "Data Structures"], duration: "2-3 months" },
      { phase: "Machine Learning", topics: ["Supervised Learning", "Unsupervised Learning", "Scikit-learn", "Model Evaluation"], duration: "3-4 months" },
      { phase: "Deep Learning", topics: ["Neural Networks", "CNN, RNN", "TensorFlow/PyTorch", "Transfer Learning"], duration: "4-5 months" },
      { phase: "Specialization", topics: ["NLP", "Computer Vision", "Reinforcement Learning", "LLMs"], duration: "6-12 months" }
    ],
    courses: {
      free: [
        { title: "Machine Learning by Andrew Ng", url: "https://www.coursera.org/learn/machine-learning", provider: "Stanford" },
        { title: "Deep Learning Specialization", url: "https://www.deeplearning.ai/", provider: "DeepLearning.AI" },
        { title: "Fast.ai Practical Deep Learning", url: "https://course.fast.ai/", provider: "Fast.ai" },
        { title: "MIT Deep Learning", url: "https://deeplearning.mit.edu/", provider: "MIT" }
      ],
      paid: [
        { title: "Complete ML & Data Science", price: "$89.99", platform: "Udemy", rating: "4.6", url: "https://www.udemy.com/course/python-for-machine-learning-data-science-masterclass/" },
        { title: "TensorFlow Developer Certificate", price: "$100", platform: "TensorFlow", rating: "4.7", url: "https://www.tensorflow.org/certificate" },
        { title: "PyTorch for Deep Learning", price: "$94.99", platform: "Udemy", rating: "4.5", url: "https://www.udemy.com/course/pytorch-for-deep-learning-with-python-bootcamp/" },
        { title: "NLP Specialization", price: "$49/month", platform: "Coursera", rating: "4.8", url: "https://www.coursera.org/specializations/natural-language-processing" }
      ]
    },
    videos: [
      { title: "Machine Learning Full Course", channel: "freeCodeCamp", views: "5.2M", url: "https://www.youtube.com/watch?v=NWONeJKn6kc" },
      { title: "Neural Networks from Scratch", channel: "3Blue1Brown", views: "8.5M", url: "https://www.youtube.com/watch?v=aircAruvnKk" },
      { title: "PyTorch Tutorial", channel: "freeCodeCamp", views: "2.3M", url: "https://www.youtube.com/watch?v=V_xro1bcAuA" },
      { title: "Complete AI & ML Roadmap", channel: "Code With Harry", views: "1.8M", url: "https://www.youtube.com/watch?v=JfZ7Sc0MhdU" }
    ],
    tools: [
      { name: "Python", description: "Programming language", type: "Language", url: "https://www.python.org/" },
      { name: "TensorFlow", description: "ML framework", type: "Framework", url: "https://www.tensorflow.org/" },
      { name: "PyTorch", description: "Deep learning framework", type: "Framework", url: "https://pytorch.org/" },
      { name: "Jupyter", description: "Interactive notebooks", type: "IDE", url: "https://jupyter.org/" },
      { name: "Hugging Face", description: "NLP models", type: "Platform", url: "https://huggingface.co/" }
    ],
    resources: [
      { title: "Papers with Code", url: "https://paperswithcode.com/", type: "Research" },
      { title: "Kaggle", url: "https://www.kaggle.com/", type: "Competitions" },
      { title: "ArXiv", url: "https://arxiv.org/", type: "Research Papers" },
      { title: "r/MachineLearning", url: "https://www.reddit.com/r/MachineLearning/", type: "Community" }
    ]
  },
  "networking": {
    name: "Networking",
    icon: "🌐",
    domain_intro: "Networking is the backbone of all digital communication—connecting computers, servers, and devices across the world. Network engineers design, implement, and manage the infrastructure that keeps businesses online. It's a stable career with strong demand, especially with the growth of cloud computing and cybersecurity.",
    description: "Design, implement, and manage computer networks",
    roadmap: [
      { phase: "Basics", topics: ["OSI Model", "TCP/IP", "IP Addressing", "Subnetting"], duration: "2-3 months" },
      { phase: "Routing & Switching", topics: ["Cisco Basics", "VLANs", "Routing Protocols (OSPF, BGP)", "Switching"], duration: "3-4 months" },
      { phase: "Network Security", topics: ["Firewalls", "VPNs", "Network Monitoring", "IDS/IPS"], duration: "3-4 months" },
      { phase: "Advanced", topics: ["SD-WAN", "Cloud Networking", "Network Automation", "Wireless"], duration: "4-6 months" }
    ],
    courses: {
      free: [
        { title: "Cisco Networking Basics", url: "https://skillsforall.com/", provider: "Cisco" },
        { title: "Computer Networking Course", url: "https://www.youtube.com/playlist?list=PLowKtXNTBypH19whXTVoG3oKSuOcw_XeW", provider: "YouTube" },
        { title: "Network+ Study Guide", url: "https://www.professormesser.com/", provider: "Professor Messer" },
        { title: "Introduction to Networks", url: "https://www.netacad.com/", provider: "Cisco NetAcad" }
      ],
      paid: [
        { title: "CCNA 200-301 Complete", price: "$94.99", platform: "Udemy", rating: "4.7", url: "https://www.udemy.com/course/complete-networking-fundamentals-course-ccna-start/" },
        { title: "CompTIA Network+", price: "$329", platform: "CompTIA", rating: "4.6", url: "https://www.comptia.org/certifications/network" },
        { title: "Wireshark Certified", price: "$595", platform: "Wireshark", rating: "4.8", url: "https://www.wireshark.org/" },
        { title: "Advanced Networking", price: "$89.99", platform: "Udemy", rating: "4.5", url: "https://www.udemy.com/course/complete-networking-course/" }
      ]
    },
    videos: [
      { title: "Computer Networking Full Course", channel: "NetworkChuck", views: "3.8M", url: "https://www.youtube.com/watch?v=qiQR5rTSshw" },
      { title: "CCNA 200-301 Complete Course", channel: "Jeremy's IT Lab", views: "2.5M", url: "https://www.youtube.com/watch?v=H8W9oMNSuwo" },
      { title: "Networking Fundamentals", channel: "Professor Messer", views: "1.9M", url: "https://www.youtube.com/watch?v=As6g6IXcVa4" },
      { title: "Subnetting Made Easy", channel: "Sunny Classroom", views: "1.2M", url: "https://www.youtube.com/watch?v=BWZ-MHIhqjM" }
    ],
    tools: [
      { name: "Cisco Packet Tracer", description: "Network simulation", type: "Simulator", url: "https://www.netacad.com/courses/packet-tracer" },
      { name: "Wireshark", description: "Packet analyzer", type: "Tool", url: "https://www.wireshark.org/" },
      { name: "GNS3", description: "Network emulator", type: "Simulator", url: "https://www.gns3.com/" },
      { name: "PuTTY", description: "SSH client", type: "Tool", url: "https://www.putty.org/" },
      { name: "Nmap", description: "Network scanner", type: "Tool", url: "https://nmap.org/" }
    ],
    resources: [
      { title: "Cisco Learning Network", url: "https://learningnetwork.cisco.com/", type: "Community" },
      { title: "r/networking", url: "https://www.reddit.com/r/networking/", type: "Community" },
      { title: "Network World", url: "https://www.networkworld.com/", type: "News" },
      { title: "Packet Pushers", url: "https://packetpushers.net/", type: "Podcast" }
    ]
  }
};