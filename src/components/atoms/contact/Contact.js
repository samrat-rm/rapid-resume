import { HStack, List, ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";
import InlineEdit from "../inlineEdit/InlineEdit";
import {
  
  AddIcon,
  MinusIcon,
  EmailIcon,
  PhoneIcon,
  AtSignIcon,
  ExternalLinkIcon,
} from "@chakra-ui/icons";
import "./contact.css";

const Contact = ({
  align = "center",
  hasIcons = true,
  headingColor = "black",
  isPreview = "false",
  content = { email: "", phone: "", linkedin: "", website: "" },
}) => {
  if (align == "right") {
    return (
      <div className={"d-flex flex-column col align-items-" + align}>
        {console.log(" this is " + content.email)}
        <List>
          <ListItem className="align-items-right">
            <InlineEdit
              isPreview={isPreview}
              value={content.email}
              className={"text-align-" + align}
              maxLength={25}
            />
            {hasIcons && (
              <EmailIcon mt={0} ml={3} color={headingColor} rounded="full" />
            )}
          </ListItem>
          <ListItem className={"text-align-right"}>
            <InlineEdit
              isPreview={isPreview}
              value={content.phone}
              type={"tel"}
              className={"border-2 text-align-" + align}
            />
            {hasIcons && (
              <PhoneIcon mt={0} ml={3} color={headingColor} rounded="full" />
            )}
          </ListItem>
          <ListItem className={"text-align-right"}>
            <InlineEdit
              isPreview={isPreview}
              value={content.linkedin}
              className={"text-align-" + align}
            />
            {hasIcons && (
              <AtSignIcon mt={0} ml={3} color={headingColor} rounded="full" />
            )}
          </ListItem>
          <ListItem className={"text-align-right"}>
            <InlineEdit
              isPreview={isPreview}
              value={content.website}
              className={"text-align-" + align}
            />
            {hasIcons && (
              <ExternalLinkIcon
                mt={0}
                ml={3}
                color={headingColor}
                rounded="full"
              />
            )}
          </ListItem>
        </List>
      </div>
    );
  } else if (align == "center") {
    return (
      <div className={"d-flex flex-column col px-3 align-items-" + align}>
        <List>
          <HStack>
            <ListItem className="d-flex justify-content-center">
              {hasIcons && (
                <EmailIcon
                  mt={0}
                  ml={1}
                  mr={2}
                  color={headingColor}
                  rounded="full"
                />
              )}
              <InlineEdit
                isPreview={isPreview}
                value={content.email}
                className={""}
              />
            </ListItem>
            <ListItem className="d-flex justify-content-center">
              {hasIcons && (
                <PhoneIcon
                  mt={0}
                  ml={1}
                  mr={2}
                  color={headingColor}
                  rounded="full"
                />
              )}
              <InlineEdit
                isPreview={isPreview}
                value={content.phone}
                className={""}
                type="tel"
              />
            </ListItem>
            <ListItem className="d-flex justify-content-center">
              {hasIcons && (
                <AtSignIcon
                  mt={0}
                  ml={1}
                  mr={2}
                  color={headingColor}
                  rounded="full"
                />
              )}
              <InlineEdit
                isPreview={isPreview}
                value={content.linkedin}
                className={""}
              />
            </ListItem>
            <ListItem className="d-flex justify-content-center">
              {hasIcons && (
                <ExternalLinkIcon
                  mt={0}
                  ml={1}
                  mr={2}
                  color={headingColor}
                  rounded="full"
                />
              )}
              <InlineEdit
                isPreview={isPreview}
                value={content.website}
                className={""}
              />
            </ListItem>
          </HStack>
        </List>
        <br />
      </div>
    );
  }
  return (
    <div className={"d-flex flex-column col pr-3 align-items-" + align}>
      <List>
        <ListItem>
          {hasIcons && (
            <EmailIcon mt={0} mr={3} color={headingColor} rounded="full" />
          )}
          <InlineEdit
            isPreview={isPreview}
            value={content.email}
            className={""}
          />
        </ListItem>
        <ListItem>
          {hasIcons && (
            <PhoneIcon mt={0} mr={3} color={headingColor} rounded="full" />
          )}
          <InlineEdit
            isPreview={isPreview}
            value={content.phone}
            className={""}
            type="tel"
          />
        </ListItem>
        <ListItem>
          {hasIcons && (
            <AtSignIcon mt={0} mr={3} color={headingColor} rounded="full" />
          )}
          <InlineEdit
            isPreview={isPreview}
            value={content.linkedin}
            className={""}
            maxLength={25}
            type="email"
          />
        </ListItem>
        <ListItem>
          {hasIcons && (
            <ExternalLinkIcon
              mt={0}
              mr={3}
              color={headingColor}
              rounded="full"
            />
          )}
          <InlineEdit
            isPreview={isPreview}
            value={content.website}
            className={""}
            maxLength={25}
          />
        </ListItem>
      </List>
    </div>
  );
};

export default Contact;
