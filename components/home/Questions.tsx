import Image from "next/image";
import { FC } from "react";
import dinosaur from "../../public/images/dinobeet_hula_two.svg";

interface Faqs {
  question: string;
  answer: string;
}

const faqs: Faqs[] = [
  {
    question: "How many recipes are there?",
    answer:
      "There is currently a total of XX curated recipes. We add and remove recipes based on reviews and feedback from users",
  },
  {
    question: "Do you offer a money back guarantee?",
    answer:
      "If you don't feel is worth the money let us know why and we will refund your money within 30 days",
  },
  {
    question: "Can you track nutrition?",
    answer: "We're currently working on a feature to allow nutrition tracking",
  },
];

export const Questions: FC = () => (
  <div id="about" className="mx-auto mt-4 max-w-7xl px-4 md:mt-8 lg:mt-12">
    <h2 className="mb-5 w-full text-4xl leading-9  md:ml-5">
      Have some more questions?
    </h2>
    <div className="flex w-full flex-col items-center justify-center md:flex-row">
      <Image className="" src={dinosaur} alt="dinosaur" />
      <dl className="mt-2 w-full pl-0 md:w-2/3 md:pl-5">
        {faqs.map((faq, index) => (
          <div className="relative" key={index}>
            <dt className="mb-1">
              <h3 className="text-xl font-semibold">{faq.question}</h3>
            </dt>
            <dd className="mb-8 pr-0 md:pr-28">
              <p>{faq.answer}</p>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </div>
);
