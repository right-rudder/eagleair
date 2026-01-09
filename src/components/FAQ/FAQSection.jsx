import { useState } from "react";
import Accordion from "./Accordion";

export const generalFAQs = [
  {
    title: "What are Eagle Aircraft's operating hours?",
    content:
      "Our office is open daily from 7:00 AM to 7:00 PM. Flight training sessions can be scheduled during these hours depending on instructor availability and weather conditions.",
  },
  {
    title: "Do you offer discovery flights?",
    content:
      "Yes! Our Discovery Flights last approximately 1 hour and allow you to experience flying over the lakeshore or local areas. Up to 3 passengers (500 lbs max each) can join, and the cost is $188 per flight.",
  },
  {
    title: "Can I purchase a Discovery Flight as a gift?",
    content:
      "Absolutely! Discovery Flight gift certificates are available and make a perfect gift for friends or family interested in aviation.",
  },
  {
    title: "How do I schedule a flight lesson?",
    content:
      "Lessons can be scheduled by phone, email, or through our online booking system. We recommend booking at least 48 hours in advance to ensure instructor and aircraft availability.",
  },
  {
    title: "What payment methods do you accept?",
    content:
      "We accept major credit cards, debit cards, checks, and bank transfers. Flexible payment plans are available for students enrolled in full training programs.",
  },
];

export const internationalStudentFAQs = [
  {
    title: "Can international students train at Eagle Aircraft?",
    content:
      "Yes, we are SEVIS-approved and can issue an I-20 for M-1 visas. Affordable housing arrangements are available for international students.",
  },
  {
    title: "What is the application process for international students?",
    content:
      "Students must create an account on the FTSP Flight Training Security Program website, submit required forms and payments, and complete fingerprinting as instructed by the TSA. Training should begin immediately upon approval, as visa authorization is valid for one year.",
  },
  {
    title: "What fees are involved for international students?",
    content:
      "The TSA application fee is $130 USD, which is paid when instructed by TSA. Students must also submit fingerprints as part of the process.",
  },
  {
    title: "Are there English language requirements?",
    content:
      "Yes, all international students must demonstrate English proficiency sufficient to safely operate aircraft and complete flight training.",
  },
  {
    title: "Who can I contact for assistance with my application?",
    content:
      "Eagle Aircraft staff are available to help international students with any questions about forms, payments, or visa instructions. Call +1 (219) 464-0132 or email eaglevpz@gmail.com.",
  },
];

export const trainingFAQs = [
  {
    title: "What flight programs does Eagle Aircraft offer?",
    content:
      "We provide FAA Part 141 flight training from Private Pilot through ATP, including Instrument, Commercial, Multi-Engine, and CFI/CFII/MEI ratings.",
  },
  {
    title: "What aircraft types are used in training?",
    content:
      "Students train in Cessna 150 and 172 for Private through Commercial, Piper aircraft for complex training, and Beechcraft Baron for Multi-Engine training.",
  },
  {
    title: "Do you offer simulator training?",
    content:
      "Yes, our FRASCA  full-motion simulator can be used for 14 hours of Instrument Rating training and 11 hours of Commercial Rating training, including preparation for Multi-Engine flight.",
  },
  {
    title: "How long does each program typically take?",
    content:
      "Program duration varies: Private Pilot training generally takes 5-12 months depending on student availability, Instrument Rating requires approximately 3-5 months, and Commercial or Multi-Engine programs follow FAA hour requirements.",
  },
  {
    title: "Are there prerequisites for advanced ratings?",
    content:
      "Yes. For example, Instrument training requires a Private Pilot Certificate, Commercial requires Instrument and Private ratings, and CFI training requires a Commercial Certificate and IFR rating.",
  },
];

export default function EnhancedFAQs({
  generalFaqs = generalFAQs,
  newStudentFaqs = internationalStudentFAQs,
  currentStudentFaqs = trainingFAQs,
  careerTrackFaqs = [],
  recreationalPilotFaqs = [],
  type = "General",
}) {
  const [open, setOpen] = useState("");
  const [activeCategory, setActiveCategory] = useState("general");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = {
    general: { name: "General", faqs: generalFaqs },
    newStudent: { name: "New Students", faqs: newStudentFaqs },
    currentStudent: { name: "Current Students", faqs: currentStudentFaqs },
    careerTrack: { name: "Career Track", faqs: careerTrackFaqs },
    recreational: { name: "Recreational Pilots", faqs: recreationalPilotFaqs },
  };

  const handleClick = (e) => {
    if (open === e.target.id) {
      setOpen("");
    } else {
      setOpen(e.target.id);
    }
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setOpen("");
    setSearchTerm("");
  };

  const currentFaqs = categories[activeCategory]?.faqs || [];

  const filteredFaqs = searchTerm
    ? currentFaqs.filter(
        (faq) =>
          faq.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.content.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : currentFaqs;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl">
          {/* Search Bar */}
          <div className="mt-8 mb-6">
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border-2 border-madison-950 rounded-lg focus:ring-2 focus:ring-madison-500 focus:border-transparent"
            />
          </div>

          {/* Category Filters */}
          {Object.keys(categories).some(
            (key) => categories[key].faqs.length > 0
          ) && (
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {Object.entries(categories).map(
                ([key, category]) =>
                  category.faqs.length > 0 && (
                    <button
                      key={key}
                      onClick={() => handleCategoryChange(key)}
                      className={`px-4 py-2 rounded-full transition-all duration-300 ${
                        activeCategory === key
                          ? "bg-muted-50 text-black hover:cursor-not-allowed"
                          : "bg-madison-950 text-white hover:bg-madison-500 hover:cursor-pointer"
                      }`}
                    >
                      {category.name}
                      <span className="ml-1 text-sm">
                        ({category.faqs.length})
                      </span>
                    </button>
                  )
              )}
            </div>
          )}

          {/* Results Count */}
          {searchTerm && (
            <p className="text-center text-gray-600 mb-4">
              {filteredFaqs.length} result{filteredFaqs.length !== 1 ? "s" : ""}
              {searchTerm && ` for "${searchTerm}"`}
            </p>
          )}

          {/* FAQ List */}
          <dl className="flex flex-col gap-2 mt-6">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <Accordion
                  key={`${activeCategory}-${index}`}
                  index={index}
                  faq={faq}
                  toggled={faq.title === open}
                  onShow={handleClick}
                />
              ))
            ) : (
              <p className="text-center text-madison-950 py-8">
                {searchTerm
                  ? "No FAQs found matching your search."
                  : "No FAQs available for this category."}
              </p>
            )}
          </dl>
        </div>

        <p className="text-center mt-12 text-gray-600 pb-20">
          If you have any additional questions please send us an email to{" "}
          <a
            href="/about/contact"
            className="text-madison-700 font-bold underline"
          >
            Contact Us
          </a>
        </p>
      </div>
    </div>
  );
}
