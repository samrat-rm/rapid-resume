import Contact from "../../../atoms/contact/Contact";

const ContactSection = ({
  align = "center",
  hasIcons = true,
  padding = false,
  headingColor = "black",
  isPreview = "false",
  content = { email: "", phone: "", linkedin: "", website: "" },
}) => {
  return (
    <>
      <div className={padding ? "col pl-3" : "col"}>
        <h3
          className={padding ? "fw-bolder pt-3" : "pl-3 fw-bolder pt-3"}
          style={{ color: headingColor }}
        >
          Education
          <hr className="border border-1 border-dark"></hr>
        </h3>
        <Contact
          align={align}
          content={content}
          padding
          isPreview={isPreview}
        />
      </div>
    </>
  );
};

export default ContactSection;
