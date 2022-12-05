import UserName from "../../../atoms/userName/UserName";

const UserInfoSection = ({
  headingColor,
  content,
  align = "left",
  includeContacts = false,
  alignContacts = "left",
  hasProfilePic = false,
  isProfileRound = false,
  isProfessionVisible = false,
  isPreview,
}) => {
  return (
    <div className="pt-4 border-0 border-bottom  border-dark">
      {/* {//console.log("isPreview userinfo : " + isPreview)} */}
      <UserName
        align={align}
        includeContacts={includeContacts}
        alignContacts={alignContacts}
        hasProfilePic={hasProfilePic}
        isProfileRound={isProfileRound}
        headingColor={headingColor}
        isProfessionVisible={isProfessionVisible}
        isPreview={isPreview}
        content={content}
      />
    </div>
  );
};

export default UserInfoSection;
