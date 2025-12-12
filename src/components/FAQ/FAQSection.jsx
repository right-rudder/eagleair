import { useState } from "react";
import Accordion from "./Accordion";


export const generalFAQsPlaceholder = [
  {
    title: "What are your operating hours?",
    content: "We operate seven days a week from 8:00 AM to 8:00 PM. Flight training sessions can be scheduled during these hours based on instructor availability and weather conditions."
  },
  {
    title: "Do you offer introductory or discovery flights?",
    content: "Yes! We offer discovery flights that typically last 30-60 minutes. This is a great opportunity to experience flying firsthand with one of our certified flight instructors and see if flight training is right for you."
  },
  {
    title: "What payment methods do you accept?",
    content: "We accept all major credit cards, debit cards, checks, and bank transfers. We also offer flexible payment plans for students enrolled in our comprehensive training programs."
  },
  {
    title: "How do I schedule a flight lesson?",
    content: "You can schedule lessons through our online booking system, by phone, or in person at our facility. We recommend booking at least 48 hours in advance to ensure instructor and aircraft availability."
  },
  {
    title: "What is your cancellation policy?",
    content: "We require at least 24 hours notice for cancellations. Cancellations made with less than 24 hours notice may be subject to a cancellation fee. Weather-related cancellations are always free of charge."
  },
  {
    title: "Do you provide ground school training?",
    content: "Yes, we offer comprehensive ground school training both in-person and online. Our ground school covers all the knowledge areas required for your written exam and practical test."
  },
  {
    title: "What medical requirements are needed to start flight training?",
    content: "For most pilot certificates, you'll need at least a third-class medical certificate issued by an FAA-authorized Aviation Medical Examiner (AME). We can provide you with a list of local AMEs and help you understand the medical requirements."
  },
  {
    title: "Can I use my training hours toward multiple certificates?",
    content: "Yes, flight hours logged during training generally count toward multiple certificate and rating requirements, as long as they meet the specific requirements for each certificate."
  }
];


export default function EnhancedFAQs({
  generalFaqs = generalFAQsPlaceholder,
  newStudentFaqs = generalFAQsPlaceholder,
  currentStudentFaqs = generalFAQsPlaceholder,
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
          faq.content.toLowerCase().includes(searchTerm.toLowerCase()),
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
            (key) => categories[key].faqs.length > 0,
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
                    ),
                )}
                </div>
            )
            }

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
          <a href="/contact" className="text-primary-800 hover:underline">
            Contact Us
          </a>
        </p>
      </div>
    </div>
  );
}
