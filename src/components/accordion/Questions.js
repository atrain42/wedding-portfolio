import SingleQuestion from "./SingleQuestion";
import classes from "./Question.module.css";

const questions = [
  {
    id: 1,
    title: "Can anyone access my site?",
    info: "No. Every site is password protected and your guests must enter the password in order to gain access to the site. We generate random passwords to each site and provide you with the password.",
  },
  {
    id: 2,
    title: "How long does it take to build my site?",
    info: "We ask you to give us 2 - 3 days to complete your site. It is important to us that your site looks nice, so we take our time when completing it.",
  },
  {
    id: 3,
    title: "What information do I provide?",
    info: "It is recommended that you provide your address, gender and name of the baby (if known), and any other information you may want to be on your website.",
  },
  {
    id: 4,
    title: "Does my website stay up forever?",
    info: "We take your website down a week after your baby shower. This prevents the information about your baby shower from living on the internet longer then it needs to.",
  },
  {
    id: 5,
    title: "How does guest RSVP work?",
    info: "When one of your guests fills out the contact form, the information on the form is directed to your email. This allows you to easily see who is planning on attending. Please inform us of the email you want to use.",
  },
];

const Questions = () => {
  return (
    <main>
      <h1 className="infoTitle">We have answers</h1>
      <div className={classes.container}>
        {questions.map((question) => {
          return <SingleQuestion key={question.id} {...question} />;
        })}
      </div>
    </main>
  );
};
export default Questions;
