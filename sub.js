function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var passwedCourseId=getParameterByName('courseId');

var courses=[
    [1,"The Complete Web Development bootcamp","Become a full-stack web developer with just one course. HTML, CSS, Javascript, Node, React, MongoDB and more!","10 hours","Dr.Angela Yu",4.5,"(33,748 ratings)","203,546 students","7/2021","English [Auto], French [Auto]","img1.jpg","https://www.youtube.com/embed/Q33KBiDriJY","https://www.youtube.com/embed/j59qQ7YWLxw","https://www.youtube.com/embed/Ki0XXrlKlHY","https://www.youtube.com/embed/fYq5PXgSsbE","40 minutes","18 minutes","16 minutes"],
    [2,"The Web Developer Roadmap","COMPLETELY REDONE - The only course you need to learn web development - HTML, CSS, JS, Node, and More!","14 hours","Dr.Colt Steele",4.4,"(38,789 ratings)","404,846 students","4/2021","English [Auto], Spanish [Auto]","img2.jpg","https://www.youtube.com/embed/2Gv6CMvI-Lw","https://www.youtube.com/embed/jx5jmI0UlXU","https://www.youtube.com/embed/NzjU1GmKosQ","https://www.youtube.com/embed/At4B7A4GOPg","9 minutes","8 minutes","14 minutes"],
    [3,"The Python Web Development Course: Zero to Mastery","Full Stack Web Development. Full Stack Web Development Bootcamp. HTML, CSS, JavaScript, etc. ! Major Projects. Complete","10 hours","Dr.Andrei Neagoie",4.3,"(39,854 ratings)","273,776 students","6/2020","English [Auto], Greek [Auto]","img3.jpg","https://www.youtube.com/embed/zuxzE7--RYM","https://www.youtube.com/embed/v_8CmC6cwUs","https://www.youtube.com/embed/ZVug65gW-fc","https://www.youtube.com/embed/v2tJ3nzXh8I","7 minutes","10 minutes","18 minutes"],
    [4,"Learn DevOps: Infrastructure Automation: Zero to Mastery","DevOps with Jenkins Terraform AWS Docker Swarm Kubernetes GIT with DevOps Real-world Exercises","30 minutes","Edward Viaene",4.6,"(43,644 ratings)","238,446 students","3/2021","English [Auto], Telugu [Auto]","img4.jpg","https://www.youtube.com/embed/znXxF4ni2yA","https://www.youtube.com/embed/20QiX8rmHnU","https://www.youtube.com/embed/bn-DQCifeQQ","https://www.youtube.com/embed/_1vEGYWaaQY","42 minutes","43 minutes","1 minutes"],
    [5,"DevOps Infrastructure Automation: Zero to Expert","Terraform on AWS EC2, VPC, ALB, CLB, NLB, Autoscaling, Route53, ACM, CloudWatch, SNS, CodePipeline, CodeBuild, S3,","30 minutes","Icaro Lavrador",4.8,"(45,898 ratings)","269,959 students","2/2021","English [Auto], Tamil [Auto]","img5.jpg","https://www.youtube.com/embed/MHz2ztu8Nds","https://www.youtube.com/embed/RmDh3m8b9cU","https://www.youtube.com/embed/wHFflWvii3M","https://www.youtube.com/embed/zmb_zMhALNo","6 minutes","22 minutes","26 minutes"],
    [6,"Infrastructure as code for freshers","Master Terraform in practical approach with 50 demos and 50 concepts using step-by-step GitHub Documentation on AWS","15 Minutes","Robin Beck",4.7,"(28,364 ratings)","324,098 students","1/2021","English [Auto], Hindi [Auto]","img6.jpg","https://www.youtube.com/embed/BPJ1RuBRJLQ","https://www.youtube.com/embed/j59qQ7YWLxw","https://www.youtube.com/embed/Ki0XXrlKlHY","https://www.youtube.com/embed/fYq5PXgSsbE","40 minutes","18 minutes","16 minutes"],
    [7,"Cloud Computing Tutorial for beginners: IaaS","Learn Cloud Computing concepts and AWS Basics. Master AWS fundamentals and hands-on skills on Amazon Web Services (AWS)","10 hours","Neal Davis",4.2,"(26,768 ratings)","383,579 students","5/2021","English [Auto], Malayalam [Auto]","img7.jpg","https://www.youtube.com/embed/2LaAJq1lB1Q","https://www.youtube.com/embed/jx5jmI0UlXU","https://www.youtube.com/embed/NzjU1GmKosQ","https://www.youtube.com/embed/At4B7A4GOPg","9 minutes","8 minutes","14 minutes"],
    [8,"Google Cloud Platform Course: Zero to Mastery","Plan, Deploy and Monitor Cloud Solutions in Microsoft Azure Infrastructure as a Service","8 hours","Idan Gabrieli",4.3,"(33,748 ratings)","246,867 students","6/2021","English [Auto], Kannada [Auto]","img8.jpg","https://www.youtube.com/embed/IUU6OR8yHCc","https://www.youtube.com/embed/v_8CmC6cwUs","https://www.youtube.com/embed/ZVug65gW-fc","https://www.youtube.com/embed/v2tJ3nzXh8I","7 minutes","10 minutes","18 minutes"],
    [9,"Salesforce Tutorial for Beginners","AWS Networking from basics to advanced with 20+ simple to complex real life hands on exercises","9 hours","Chris Parent",4.6,"(47,878 ratings)","363,924 students","8/2021","English [Auto], Bengali [Auto]","img9.jpg","https://www.youtube.com/embed/I3Dk3i4GpU8","https://www.youtube.com/embed/20QiX8rmHnU","https://www.youtube.com/embed/bn-DQCifeQQ","https://www.youtube.com/embed/_1vEGYWaaQY","42 minutes","43 minutes","1 minutes"],
    [10,"The Complete Networking Fundamental Course","Learn about networking and start your journey to Cisco 200-301 Certification.","1 hours","David Bombal",4.7,"(52,744 ratings)","435,345 students","9/2021","English [Auto], Chineese [Auto]","img10.jpg","https://www.youtube.com/embed/Ndp_UTAV-SE","https://www.youtube.com/embed/MHz2ztu8Nds","https://www.youtube.com/embed/RmDh3m8b9cU","https://www.youtube.com/embed/wHFflWvii3M","https://www.youtube.com/embed/zmb_zMhALNo","6 minutes","22 minutes","26 minutes"],
    [11,"Introduction to Computer Network for Non-Techies","Learn the Fundamentals of Computer Networking for Non-Techies","1.5 hours","Alton Hardin",4.7,"(67,430 ratings)","474,747 students","10/2021","English [Auto], Japaneese [Auto]","img11.jpg","https://www.youtube.com/embed/x6iCd3ACHw4","https://www.youtube.com/embed/j59qQ7YWLxw","https://www.youtube.com/embed/Ki0XXrlKlHY","https://www.youtube.com/embed/fYq5PXgSsbE","40 minutes","18 minutes","16 minutes"],
    [12,"Digital Marketing Full Course","Learn to create Deep Learning Algorithms in Python from two Machine Learning & Data Science experts. Templates included.","7 hours","Nathan House",4.8,"(28,898 ratings)","193,678 students","11/2021","English [Auto], Marati [Auto]","img12.jpg","https://www.youtube.com/embed/hiEb1m7CXH4","https://www.youtube.com/embed/jx5jmI0UlXU","https://www.youtube.com/embed/NzjU1GmKosQ","https://www.youtube.com/embed/At4B7A4GOPg","9 minutes","8 minutes","14 minutes"],
    [13,"Cyber Security Full Course","Learn the fundamentals of Azure/Microsoft 365 Security, and get certified, with this complete beginner's SC-900 course!","8 hours","Scott Duffy",4.5,"(28,653 ratings)","453,985 students","12/2021","English [Auto], Telugu [Auto]","img13.jpg","https://www.youtube.com/embed/nzZkKoREEGo","https://www.youtube.com/embed/v_8CmC6cwUs","https://www.youtube.com/embed/ZVug65gW-fc","https://www.youtube.com/embed/v2tJ3nzXh8I","7 minutes","10 minutes","18 minutes"],
    [14,"The Ethical Hacking Course","Become a bug bounty hunter! Learn to hack websites, fix vulnerabilities, and improve web security online for clients.","10 hours","Nathan House",4.3,"(34,756 ratings)","274,567 students","8/2020","English [Auto], Chineese [Auto]","img14.jpg","https://www.youtube.com/embed/dz7Ntp7KQGA","https://www.youtube.com/embed/znXxF4ni2yA","https://www.youtube.com/embed/20QiX8rmHnU","https://www.youtube.com/embed/bn-DQCifeQQ","https://www.youtube.com/embed/_1vEGYWaaQY","42 minutes","43 minutes","1 minutes"],
    [15,"Application Security: Zero to Master","Volume 1 : Become a Cyber Security Specialist, Learn How to Stop Hackers, Prevent Hacking, Learn IT Security & INFOSEC","1 hours","Easy Bytes",4.4,"(38,872 ratings)","309,768 students","11/2020","English [Auto], Japaneese [Auto]","img15.jpg","https://www.youtube.com/embed/9FTvrBuvTcM","https://www.youtube.com/embed/RmDh3m8b9cU","https://www.youtube.com/embed/wHFflWvii3M","https://www.youtube.com/embed/zmb_zMhALNo","6 minutes","22 minutes","26 minutes"],
]


for(var i=0;i<courses.length;i++){
        if(courses[i][0]==passwedCourseId)
        {
            var name=courses[i][1];
            var desc=courses[i][2];
            var dur=courses[i][3];
            var auth=courses[i][4];
            var rate=courses[i][5];
            var num=courses[i][6];
            var stud=courses[i][7];
            var up=courses[i][8]; 
            var lang=courses[i][9];
            var img=courses[i][10];   
            var video=courses[i][11];
            var link=courses[i][12];
            var lin=courses[i][13];
            var li=courses[i][14];
            var time=courses[i][15];
            var tim=courses[i][16];
            var ti=courses[i][17];
        }        
    }
    document.getElementById("headings").innerHTML = name;
    document.getElementById("description").innerHTML = desc;
    document.getElementById("duration").innerHTML =dur;
    document.getElementById("author").innerHTML = auth;
    document.getElementById("star").innerHTML = rate;
    document.getElementById("num").innerHTML = num;
    document.getElementById("stud").innerHTML = stud;
    document.getElementById("up").innerHTML =("last Updated :- "+ up);
    document.getElementById("lang").innerHTML = lang;
    document.getElementById("img").src = img;
    document.getElementById("video").src = video;
    document.getElementById("vide").src = link;
    document.getElementById("vid").src = lin;
    document.getElementById("vi").src = li;
    document.getElementById("time").innerHTML = time;
    document.getElementById("tim").innerHTML = tim;
    document.getElementById("ti").innerHTML = ti;

    