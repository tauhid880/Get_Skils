import React from "react";

const Faq = () => {
  return (
    <div className="min-h-screen">
      <h1 className="text-5xl mt-20  text-center">
        We’re hoping we’ve provided you with some answers
      </h1>
      <div className="flex flex-row  mt-10">
        <div className="collapse w-1/2">
          <input type="checkbox" />
          <div className="collapse-title text-black text-xl font-medium">
            What are the technology requirements to take an online course?
          </div>
          <div className="collapse-content">
            <p>
              You will need a computer, a high speed Internet connection, a
              newer version of a web browser, and access to common tools and
              software like word processors, email, etc. Some courses may have
              other software or technology requirements as well.
            </p>
          </div>
        </div>
        <div className="collapse w-1/2">
          <input type="checkbox" />
          <div className="collapse-title text-black text-xl font-medium">
            What are the admission requirements for Online Learning courses?
          </div>
          <div className="collapse-content">
            <p>
              The Online Learning program currently operates in semesters and
              each online course carries between two and four semester credits.
              Registration begins when the course offerings are listed on the
              Online Learning website and continues until the first day of
              classes or the course is full. Please carefully read through the
              registration section for your student status before you register:
              High school program (PSEO) registration Student from another U of
              M campus registration Non-University of Minnesota student
              registration Current Morris student registration Early
              registration, at least one week prior to the first day of class,
              is encouraged for any student who is not familiar with computer
              hardware, the Internet, email and software such as discussion
              boards or chat rooms. PSEO students should register at least one
              week before class start dates to ensure their textbooks arrive on
              time.
            </p>
          </div>
        </div>
        <div className="collapse w-1/2">
          <input type="checkbox" />
          <div className="collapse-title text-black text-xl font-medium">
            Will I get credit for this course?
          </div>
          <div className="collapse-content">
            <p>
              Online Learning credit courses are comparable to on-campus courses
              and appear on your University of Minnesota Morris transcript in
              exactly the same manner as an on-campus course. You will receive
              University credit for these courses.
            </p>
          </div>
        </div>
        <div className="collapse w-1/2">
          <input type="checkbox" />
          <div className="collapse-title text-black text-xl font-medium">
            What happens if I don’t finish the course?
          </div>
          <div className="collapse-content">
            <p>
              If you do not finish the course during the semester enrollment
              period, and if you do not request an incomplete, the course will
              appear on your University of Minnesota transcript with the grade
              of N (not completed), or a letter grade that reflects your course
              participation. You must officially drop from a course by the
              necessary deadline in order to remove the course from your
              transcript. You may also cancel the course and receive a “W” on
              your transcript and a tuition refund if you meet the refund
              deadlines for the semester.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
